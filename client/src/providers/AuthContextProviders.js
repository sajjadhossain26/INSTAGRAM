import { useReducer } from "react";
import AuthContext from "../context/AuthContext";
import cookie from 'js-cookie'
import AuthReducer from "../reducers/AuthReducer";

export const INITIAL_STATE = {
  isUserLoggedIn : false,
  user: {}
}

const AuthContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
   return(
    <AuthContext.Provider value={{
      isUserLoggedIn: state.isUserLoggedIn,
      user: state.user,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
   )
}

export default AuthContextProvider;