import {connect} from "react-redux";
import Users from "./Users";
import {follow, reloadComponent, setCurrentPage, setUsers, unFollow} from "../../Redux/usersReducer";
import React from "react";
import axios from "axios";
import Reloader from "../common/Reloader/Reloader";

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.reloadComponent(true);
        axios.get('https://react-first-project-6571f-default-rtdb.firebaseio.com/users.json?orderBy="id"&limitToFirst=5&print=pretty').then(response => {
            this.props.reloadComponent(false);
            console.log(response);

            const data = response.data;

            const newUsers = [];

            for (let key in data) {
                const newUser = data[key];
                newUsers.push(newUser)
            }

            console.log(newUsers);

            this.props.setUsers(newUsers);
        })

    }

    changeCurrentPage = (pageNumber) => {
        this.props.reloadComponent(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://react-first-project-6571f-default-rtdb.firebaseio.com/users.json?orderBy="id"&startAt=${(pageNumber*this.props.pageSize)-4}&endAt=${pageNumber*this.props.pageSize}&print=pretty`).then(response => {
            this.props.reloadComponent(false);


            const data = response.data;

            const newUsers = [];

            for (let key in data) {
                const newUser = data[key];
                newUsers.push(newUser)
            }

            console.log(response.data);
            console.log(newUsers);


            this.props.setUsers(newUsers);
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
                   unFollow={this.props.unFollow}/>
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
    setCurrentPage, reloadComponent})(UsersContainerAPI);

export default UsersContainer;