import Loader from '../../../components/loader/Loader'
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
            <Loader/>
            dispatch({ type:'SIGNUP_SUCCESS',payload:'User' })
        }).catch((err) => {
            dispatch({ type:'SIGNUP_ERROR',err });
        });
    }
}