import {  BULK_UPLOAD, MENU_ORDER } from "./Menu.types"


const initial={
   message:"",
    data:[],
}
 export const Menu_orderReducer=(state=initial,{type,payload})=>{
    switch(type){
        case MENU_ORDER:{
            
            return{
                ...state,message:payload.message,data:payload.data
            }
        }
      case BULK_UPLOAD:{
        return{
            ...state,message:payload.message
        }
      }
       
        default :return state

    }
 }