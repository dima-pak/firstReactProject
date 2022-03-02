import {connect} from "react-redux";
import Users from "./Users";
import {follow, reloadComponent, setCurrentPage, setUsers, unFollow} from "../../Redux/usersReducer";
import React from "react";
import Reloader from "../common/Reloader/Reloader";
import {getUsers, getUsers2} from "../../Api/Api";

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.reloadComponent(true);

        getUsers().then(response => {
            this.props.reloadComponent(false);
            console.log(response);

            const data = response;

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

        getUsers2(pageNumber, this.props.pageSize)
            .then(response => {

                this.props.reloadComponent(false);

                const data = response;

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

const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, reloadComponent
})(UsersContainerAPI);

export default UsersContainer;