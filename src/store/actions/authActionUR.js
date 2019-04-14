export const userSignUp = (newStudent) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newStudent.email,
            newStudent.password
        ).then((res)=>{
        return firestore.collection("student").doc(res.user.uid).set({
                email    : newStudent.email,
                firstName: newStudent.firstName,
                lastName:  newStudent.lastName,     
            })
        }).then(() => {
            dispatch({ type:'SIGNUP_SUCCESS',payload:'User' })
        }).catch((err) => {
            dispatch({ type:'SIGNUP_ERROR',err });
        });
    }
}

export const signInUR = (credentails) =>{
    return (dispatch,getState,{getFirebase})=>{
        console.log("Credentail STD",credentails);
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentails.email,
            credentails.password
        ).then(()=>{
            dispatch({type:'Login_SuccessFull',payload:'User'});
        }).catch((err)=>{
            dispatch({type:'Login_Error',err});
        });
    }
}

export const signOutStd = () =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=>{
            console.log("LogOut_SuccesFull**Action**")
            dispatch({type:'LogOut_SuccessFull'});
        })
    }
}