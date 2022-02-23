const FOLLOW = "FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS ="SET-USERS";

let initialState = {
    users: [
        {id: 1, followed: true, fullName: "Dimitry.V.K", status: "funny", location: { city: "Severodvinsk", country: "Russia"}},
        {id: 2, followed: false, fullName: "Alexander.G.D", status: "funny", location: {city: "Severodvinsk", country: "Russia"}},
        {id: 3, followed: true, fullName: "Vladimir.D.B", status: "funny", location: {city: "Severodvinsk", country: "Russia"}},
        {id: 4, followed: false,  fullName: "Artem.D.A", status: "funny", location: {city: "Severodvinsk", country: "Russia"}},
        {id: 5, followed: true, fullName: "Maksim.G.G", status: "funny", location: {city: "Severodvinsk", country: "Russia"}}
    ]
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