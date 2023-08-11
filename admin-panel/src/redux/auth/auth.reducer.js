import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from "./auth.types"


let token=localStorage.getItem("token")
let data=JSON.parse(localStorage.getItem('data'))
const initial={
    isAuth:!!token,
    token:token,
    error:false,
    message:"",
    data:data
}
 export const authReducer=(state=initial,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:{
            localStorage.setItem("token",payload.data.jwtToken)
            localStorage.setItem("data",JSON.stringify(payload.data))
            return{
                ...state,isAuth:true,error:false,token:payload.data.jwtToken,message:payload.message,data:payload.data
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,isAuth:false,token:"",error:true
            }
        }
       
        case LOGOUT:{
            localStorage.removeItem("token")
            localStorage.removeItem("data")
            return{
                ...state,isAuth:false,token:"",error:false
            }

        }
       
        default :return state

    }
 }