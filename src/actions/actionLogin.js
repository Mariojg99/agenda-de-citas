import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { types } from "../types/types";

export const loginEmailPassAsync = (email, password) => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            // dispatch(loginSync(user.uid, user.displayName))
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const loginSync = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id, displayname
        }
    }
}

export const logoutAsync = () => {
    return( dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSync())
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSync = () => {
   return{
       type: types.logout,
       payload: {}
   }
}