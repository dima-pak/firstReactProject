import users from "../components/Users/Users";

const FOLLOW = "FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS ="SET-USERS";
const SET_CURRENT_PAGE ="SET-CURRENT-PAGE";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 22,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId)
                    {
                        let user = u;
                        user.followed = false;
                        return user;
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId)
                    {
                        let user = u;
                        user.followed = true;
                        return user;
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newCurrentPage
            }
        default:
            return state;
    }
}

export let followAC = (userId) => ({type: FOLLOW, userId});

export let unFollowAC = (userId) => ({type: UNFOLLOW, userId});

export let setUsersAC = (users) => ({type: SET_USERS, users});

export let setCurrentPageAC = (newCurrentPage) => ({type: SET_CURRENT_PAGE, newCurrentPage});

export default usersReducer;