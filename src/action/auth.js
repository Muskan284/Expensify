import {firebase,googleprovider} from '../firebase/firebase';
import Loginpage from '../components/Loginpage';

export const login=(uid)=>({
    type:'LOGIN',
    uid
})

export const startlogin = () => {
    return () => {
        return firebase.auth().signInWithRedirect(googleprovider);
    }
}

export const logout=()=>({
    type:'LOGOUT' 
})

export const startlogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}