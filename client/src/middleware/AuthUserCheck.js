import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


const AuthUserCheck = ({children}) => {
  const {isUserLoggedIn} = useContext(AuthContext)
  return isUserLoggedIn? children : <Navigate to={'/login'}/>
}


export default AuthUserCheck;