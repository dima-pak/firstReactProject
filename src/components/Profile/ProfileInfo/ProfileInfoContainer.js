import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from "axios";

class ProfileInfoContainerAPI extends React.Component {

    componentDidMount() {
        console.log(this.props);
        let userId = this.props.match.params.userId;

        // axios.get(`https://react-first-project-6571f-default-rtdb.firebaseio.com/users.json?orderBy="id"&print=pretty`).then( response => {
        //     this.props.serUserProfile(response.data);
        // })
    }

    render() {
        return <ProfileInfo informationAboutUser={this.props.informationAboutUser}/>
    }
}

let mapStateToProps = (state) => {
    return {
        informationAboutUser: state.profile.informationAboutUser
    }
}

let withUrlDataContainerComponent = withRouter(ProfileInfoContainerAPI);

const ProfileInfoContainer = connect(mapStateToProps)(withUrlDataContainerComponent);

export default ProfileInfoContainer;