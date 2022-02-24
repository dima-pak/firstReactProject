const FOLLOW = "FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS ="SET-USERS";

let initialState = {
    users: []
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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export let followAC = (userId) => ({type: FOLLOW, userId});

export let unFollowAC = (userId) => ({type: UNFOLLOW, userId});

export let setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;