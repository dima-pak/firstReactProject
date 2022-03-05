import {connect} from "react-redux";
import Users from "./Users";
import {follow, reloadComponent, setCurrentPage, setUsers, unFollow, getUsers, getUsers2} from "../../Redux/usersReducer";
import React from "react";
import Reloader from "../common/Reloader/Reloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
// import {getUsers2} from "../../Api/Api";

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        // this.props.reloadComponent(true);
        //
        // getUsers().then(response => {
        //     this.props.reloadComponent(false);
        //     console.log(response);
        //
        //     const data = response;
        //
        //     const newUsers = [];
        //
        //     for (let key in data) {
        //         const newUser = data[key];
        //         newUsers.push(newUser)
        //     }
        //
        //     console.log(newUsers);
        //
        //     this.props.setUsers(newUsers);
        // })

        this.props.getUsers();
    }

    changeCurrentPage = (pageNumber) => {
        // this.props.reloadComponent(true);
        // this.props.setCurrentPage(pageNumber);
        //
        // getUsers2(pageNumber, this.props.pageSize)
        //     .then(response => {
        //
        //         this.props.reloadComponent(false);
        //
        //         const data = response;
        //
        //         const newUsers = [];
        //
        //         for (let key in data) {
        //             const newUser = data[key];
        //             newUsers.push(newUser)
        //         }
        //
        //         console.log(response.data);
        //         console.log(newUsers);
        //
        //
        //         this.props.setUsers(newUsers);
        //     })

        this.props.getUsers2(pageNumber, this.props.pageSize);

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

// let AuthRedirectComponent = withAuthRedirect(UsersContainerAPI)
//
// const UsersContainer = connect(mapStateToProps, {
//     follow, unFollow, setUsers,
//     setCurrentPage, reloadComponent, getUsers,
//     getUsers2
// })(AuthRedirectComponent);
//
// export default UsersContainer;

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unFollow, setUsers,
        setCurrentPage, reloadComponent, getUsers,
        getUsers2
    })
)(UsersContainerAPI)



