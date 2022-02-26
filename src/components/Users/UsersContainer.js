import {connect} from "react-redux";
import Users from "./Users";
import {follow, reloadComponent, setCurrentPage, setUsers, unFollow} from "../../Redux/usersReducer";
import React from "react";
import axios from "axios";
import Reloader from "../common/Reloader/Reloader";

class UsersContainerAPI extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://react-first-project-6571f-default-rtdb.firebaseio.com/users.json').then(response => {
                this.props.setUsers(response.data);
                console.log(response);
            })
        }
    }

    componentDidMount() {
        this.props.reloadComponent(true);
        axios.get(`https://react-first-project-6571f-default-rtdb.firebaseio.com/users.json?orderBy="id"&limitToFirst=${this.props.currentPage}&print=pretty`).then(response => {
            this.props.reloadComponent(false);
            //console.log(response.data);
            this.props.setUsers(response.data);
        })
    }

    changeCurrentPage = (pageNumber) => {
        this.props.reloadComponent(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://react-first-project-6571f-default-rtdb.firebaseio.com/users.json?orderBy="id"&limitToFirst=${pageNumber}&print=pretty`).then(response => {
            this.props.reloadComponent(false);
            this.props.setUsers(response.data);
        })
    }


    render() {
        return <>
            {this.props.isReload === true ? <Reloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   changeCurrentPage={this.changeCurrentPage}
                   getUsers={this.getUsers}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isReload: state.usersPage.isReload
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         changeCurrentPage: (newCurrentPage) => {
//             dispatch(setCurrentPageAC(newCurrentPage));
//         },
//         reloadComponent: (isReload) => {
//             dispatch(reloadComponentAC(isReload));
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, reloadComponent
})(UsersContainerAPI);

export default UsersContainer;