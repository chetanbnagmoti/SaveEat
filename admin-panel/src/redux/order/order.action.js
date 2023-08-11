import axios from 'axios'
import { ACCEPT_ORDER, ORDER,REJECT_ORDER,READYTOPICK_ORDER } from './order.types'


export const GETDATA=()=>async(dispatch)=>{
    let data=JSON.parse(localStorage.getItem('data'))
    let creds={
        "timeframe": "Today",
        "orderStatus": "All",
        "restaurantIdData": [
          {
            "_id": data._id,
            "name": data.businessName
          }
        ],
        "brandId": data._id,
        "pageNumber": 1,
        "limit": 30,
        "fromDate": "",
        "toDate": ""
      }
    try{
        let response=await axios.post('https://apis.saveeat.in/api/v1/user/getOrderListForBrand',creds)
        //console.log(response.data)

        dispatch({type:ORDER,payload:response.data})
    }catch(e){
        console.log(e)
    }

}

export const Accept=(id)=>async(dispatch)=>{
  console.log(id)


  try{
      let response=await axios.post('https://apis.saveeat.in/api/v1/user/acceptOrder',{    "orderId": id    })
      console.log(response.data)

      dispatch({type:ACCEPT_ORDER,payload:response.data})
  }catch(e){
      console.log(e)
  }
}
export const Reject=(id)=>async(dispatch)=>{
  try{
      let response=await axios.post('https://apis.saveeat.in/api/v1/user/caneclOrder',{    "orderId": id    })
      console.log(response.data)

      dispatch({type:REJECT_ORDER,payload:response.data})
  }catch(e){
      console.log(e)
  }
}
export const ReadyFood=(id)=>async(dispatch)=>{
  try{
      let response=await axios.post('https://apis.saveeat.in/api/v1/user/readyForPickupOrder',{    "orderId": id    })
      console.log(response.data)

      dispatch({type:READYTOPICK_ORDER,payload:response.data})
  }catch(e){
      console.log(e)
  }
}
