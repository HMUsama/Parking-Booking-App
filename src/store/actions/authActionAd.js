export const adminLognin = (credentails) =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentails.email,
            credentails.password
        ).then(()=>{
            dispatch({type:'Login_SuccessFull_Admin',payload:'Admin'});
        }).catch((err)=>{
            dispatch({type:'Login_Error',err});
        });
    }
}

export const signOutAd = () =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=>{
            console.log("LogOut_SuccesFull**Action**")
            dispatch({type:'LogOut_SuccessFull'});
        })
    }
}