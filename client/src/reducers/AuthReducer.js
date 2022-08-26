
const AuthReducer = (state, {type, payload}) => {
   switch (type) {
    case 'LOGED_USER_SUCCESSFUL':
        return{
            isUserLoggedIn: true,
            user: payload
        }
     case 'LOGOUT_USER':
        return{
            isUserLoggedIn: false,
            user: {}
        }
   
    default:
        return state
   }
}

export default AuthReducer;