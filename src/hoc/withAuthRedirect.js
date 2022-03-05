import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/music'/>
            }

            return <Component {...this.props} />
        }
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

