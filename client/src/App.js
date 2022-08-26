import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import "./App.scss"
import AuthUserCheck from "./middleware/AuthUserCheck";
import AuthUserRedirect from "./middleware/AuthUserRedirect";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import LoadingBar from 'react-top-loading-bar'
import LoaderContext from "./context/LoaderContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./components/Verify/Verify";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import RecoverPassword from "./pages/RecoverPassword/RecoverPassword";

function App() {


  const token = Cookies.get('token')
  const {dispatch} = useContext(AuthContext)
  const {loaderState, loaderDispatch} = useContext(LoaderContext)

  useEffect(()=>{
    try {
       axios.get('http://localhost:5050/api/user/me', {headers:{
        "authorization" : `Bearer ${token}`
       }}).then(res=>{
        if(res.data.isVerified && token){
         dispatch({type: "LOGED_USER_SUCCESSFUL", payload: res.data})   
        }else{
          alert('verify your account')
           Cookies.remove('token')
        }

         
       }).catch(error=>{
           dispatch({type: "LOGOUT_USER"})
       })
       
    } catch (error) {
      console.log(error);
    }
  },[token])


  return (
   <>
     <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({type: "LOADER_END"})}
      />

      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />


    <Routes>
      <Route path="/login" element={<AuthUserRedirect><Login/></AuthUserRedirect>}/>
      <Route path="/register" element={<AuthUserRedirect><Register/></AuthUserRedirect>}/>
      <Route path="/profile" element={<AuthUserCheck><Profile/></AuthUserCheck>}/>
      <Route path="/" element={<AuthUserCheck><Home/></AuthUserCheck>}/>
      <Route path="/user/:id/verify/:token" element={<Verify/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/recover-password/:token" element={<RecoverPassword/>}/>
    </Routes>
   </>
  );
}

export default App;
