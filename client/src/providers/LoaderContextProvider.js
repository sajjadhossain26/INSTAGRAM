import { useReducer } from "react";
import AuthContext from "../context/AuthContext";
import cookie from 'js-cookie'
import AuthReducer from "../reducers/AuthReducer";
import LoaderContext from "../context/LoaderContext";
import LoaderReducer from "../reducers/LoaderReducer";

export const INITIAL_STATE = 0

const LoaderContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(LoaderReducer, INITIAL_STATE)
   return(
    <LoaderContext.Provider value={{
      loaderState: state,
      loaderDispatch: dispatch
    }}>
      {children}
    </LoaderContext.Provider>
   )
}

export default LoaderContextProvider;