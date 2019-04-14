const initState = {
    authReducesUser:null
}
const authReducesUser =( state = initState,action )=>{
    switch(action.type){
        case "Login_Error":
            console.log("Login_Error**authReduces**")
        return{
            ...state,
            authErrorStd_login:'Login_failed'
        }
        case "Login_SuccessFull":
        console.log("Login_SuccesFull**authReduces**")
        return{
            student:'student',
            ...state,
            authErrorStd_signup:null,
        }

        case "LogOut_SuccessFull":
        console.log("LogOut_SuccesFull**authReduces**")
        return {
            student:false,
            state,
        }



        case 'SIGNUP_SUCCESS' :
            console.log('signup_successfull**authReduces**');
        return{
            student:'student',
            ...state,
            authErrorStd_signup:null,
        }
        case 'SIGNUP_ERROR' :
            console.log('signup_Error**authReduces**');
        return{
            ...state,
            authErrorStd_signup:action.err.message
        }
        default:
        return state     
        }
}

export default authReducesUser;