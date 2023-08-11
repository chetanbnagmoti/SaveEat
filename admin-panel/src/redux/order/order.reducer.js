import { ACCEPT_ORDER, ORDER, READYTOPICK_ORDER, REJECT_ORDER } from "./order.types"


const initial={
   message:"",
    data:[]
}
 export const orderReducer=(state=initial,{type,payload})=>{
    switch(type){
        case ORDER:{
            
            return{
                ...state,message:payload.message,data:payload.data
            }
        }
        case ACCEPT_ORDER:{
            return{
                ...state,message:payload.message
            }
        }
        case REJECT_ORDER:{
            return{
                ...state,message:payload.message
            }
        }
       case READYTOPICK_ORDER:{
        return{
            ...state,message:payload.message
        }
       }
       
        default :return state

    }
 }