import axios from 'axios'
import {  LOGIN_SUCCESS, LOGOUT } from './auth.types'


export const login=(creds)=>async(dispatch)=>{
    try{
        let response=await axios.post('https://apis.saveeat.in/api/v1/user/brandLoginForPanel',creds)
        console.log(response.data)

        dispatch({type:LOGIN_SUCCESS,payload:response.data})
    }catch(e){
        console.log(e)
    }
}



export const logout=()=>({type:LOGOUT})