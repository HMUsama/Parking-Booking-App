
export const fatchAndCreate = (fatchAndCreate) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        console.log("Action=====================Action=====================fatchAndCreate",fatchAndCreate)
        const firebase=getFirebase();
        const firestore=getFirestore();
        return firestore.collection("parking").doc().add({
                Date    : fatchAndCreate.date,
                slot1:  true,
                slot2:  true,     
                slot3:  true,     
                slot4:  true,     
                slot5:  true,     
                slot6:  true,     
            }).then(() => {
            dispatch({ type:'SIGNUP_SUCCESS', })
        }).catch((err) => {
            dispatch({ type:'SIGNUP_ERROR',err });
        });
    }
}

export const bookSlot = (newBooking) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        console.log("Action=====================Action=====================Action",newBooking)
        const firebase=getFirebase();
        const firestore=getFirestore();
        // return firestore.collection("student").doc(res.user.uid).set({
        //         // newBooking    : newStudent.email,
        //         // firstName: newStudent.firstName,
        //         // lastName:  newStudent.lastName,     
        //     })
        // }).then(() => {
        //     dispatch({ type:'SIGNUP_SUCCESS',payload:'User' })
        // }).catch((err) => {
        //     dispatch({ type:'SIGNUP_ERROR',err });
        // });
    }
}