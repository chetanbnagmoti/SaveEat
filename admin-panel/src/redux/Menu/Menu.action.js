import axios from 'axios'
import {  BULK_UPLOAD, MENU_ORDER,INDIVIDUAL_ADD

} from './Menu.types'


export const GET_MENU_DATA=()=>async(dispatch)=>{
    let data=JSON.parse(localStorage.getItem('data'))
    let creds={
        "brandId": data._id,
        "type": "Brand"
      }
    try{
        let response=await axios.post('https://support.saveeat.in:3035/api/v1/user/menuList',creds)
        console.log(response.data)

        dispatch({type:MENU_ORDER,payload:response.data})
    }catch(e){
        console.log(e)
    }

}
export const Bulk_upload=(formdata)=>async(dispatch)=>{
   // console.log(formdata)
    try {
      let response=  await axios.post('https://support.saveeat.in:3035/api/v1/user/uploadExcel', formdata);
  console.log(response.data)
  dispatch({type:BULK_UPLOAD,payload:response.data})


      } catch (error) {
        console.log(error)
      }
 }


export const Add_Individual_Item=(data)=>async(dispatch)=>{
  try{
let res=await axios.post("https://support.saveeat.in:3035/api/v1/user/addItem",data)
console.log(res.data)
  }
  catch(e){
    console.log(e)
  }
} 