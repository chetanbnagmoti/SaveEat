import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Checkbox,
  Flex
} from "@chakra-ui/react";
import "./MenuPageTable.css";
import axios from "axios";


export default function MenuTables({data}) {
  const [list,setList]=useState([])

  const GET_LIST=async()=>{
    let brandId=JSON.parse(localStorage.getItem('data'))
    let creds={
        "menuId": data._id,
        "brandId": brandId._id
      }
    try{
        let response=await axios.post('https://support.saveeat.in:3035/api/v1/user/itemList',creds)
        console.log(response.data)
         setList(response.data.data)
        // dispatch({type:MENU_ITEMLIST,payload:response.data})
    }catch(e){
        console.log(e)
    }
  }
  useEffect(()=>{
// dispatch(GET_ITEM_LIST(data._id))
GET_LIST()
  },[data])
  return (
    <Box className="table-container"  overflowY="auto" maxHeight="30vw" >
    <TableContainer borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead position={"sticky"} w={"100%"} className="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thds">Item Name</Th>
            <Th id="thds">Image</Th>
            <Th id="thds">Food Type</Th>
            <Th id="thds">Tax Type</Th>
            <Th id="thds">Tax Rate</Th>
            <Th id="thds">Cuisine</Th>
            <Th id="thds">Sub Cuisine</Th>
            <Th id="thds">Weight in (g)</Th>
            <Th id="thds">Food Price</Th>
            <Th id="thds">Item Window</Th>
          </Tr>
        </Thead>
       
        <Tbody >
          {list?.map((el)=>(
            <Tr key={el._id} display={{base:"none",md:"none",lg:"table"}}>
            <Td id="thd">{el.foodName}</Td>
            {el.foodImage?<Td id="thd"><Checkbox colorScheme='green' defaultChecked></Checkbox></Td>:<Td id="thd"> <label htmlFor="fileInput"> Upload</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>}
            <Td id="thd">{el.foodType}</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">{el.cuisine}</Td>
            <Td id="thd">{el.subCategory}</Td>
            <Td id="thd">9</Td>
            <Td id="thd">{el.price}</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          ))}
          
          
 <Box display={{base:"block",md:"block",lg:"none"}} width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
 {list?.map((el)=>(
   <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} key={el._id}>
  <Tr  p={2} > <Th id="thds">Item Name</Th>            <Td id="thd">{el.foodName}</Td></Tr>
  <Tr  p={2} > <Th id="thds">Image</Th>           {el.foodImage?<Td id="thd"><Checkbox colorScheme='green' defaultChecked></Checkbox></Td>:<Td id="thd"> <label htmlFor="fileInput"> Upload</label><input id="fileInput" type="file" style={{ display: "none" }} className="registerPPInput"/></Td>}</Tr>
  <Tr   p={2}> <Th id="thds">Food Type</Th>            <Td id="thd">{el.foodType}</Td></Tr>
  <Tr   p={2}> <Th id="thds">Tax Type</Th>            <Td id="thd">MRP</Td></Tr>
  <Tr   p={2}> <Th id="thds">Tax Rate</Th>            <Td id="thd">20%</Td></Tr>
  <Tr   p={2}> <Th id="thds">Cuisine</Th>            <Td id="thd">{el.cuisine}</Td></Tr>
  <Tr   p={2}> <Th id="thds">Sub Cuisine</Th>            <Td id="thd">{el.subCategory}</Td></Tr>
  <Tr   p={2}> <Th id="thds">Weight in (g)</Th>            <Td id="thd">9</Td></Tr>
  <Tr   p={2}> <Th id="thds">Food Price</Th>            <Td id="thd">{el.price}</Td></Tr>
  <Tr   p={2}> <Th id="thds">Item Window</Th>            <Td id="thd">9 am to 11 am</Td></Tr>
 </Box>
 ))}

 </Box>
      
          
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
  );
}


// <Tr>
//             <Td id="thd">Pizza</Td>
//             <Td id="thd"> <label htmlFor="fileInput"> Upload</label><input
//               id="fileInput"
//               type="file"
//               style={{ display: "none" }}
//               className="registerPPInput"/></Td>
//             <Td id="thd">Veg</Td>
//             <Td id="thd">MRP</Td>
//             <Td id="thd">20%</Td>
//             <Td id="thd">200</Td>
//             <Td id="thd">Indian</Td>
//             <Td id="thd">9</Td>
//             <Td id="thd">200.00</Td>
//             <Td id="thd">9 am to 11 am</Td>

//           </Tr>

// {data.orderData?.map((el)=>(
//   <Tr key={el._id} display={{base:"none",md:"none",lg:"table"}}>
//   <Td id="thd">{el.productData.foodName}</Td>
//   <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
//   <Td id="thd">{el.productData.price}</Td>
//   <Td id="thd">{Math.floor(((el.productData.price-el.productAmount)/el.productData.price)*100)}%</Td>
//   <Td id="thd">{el.quantity}</Td>
//   <Td id="thd">{el.productAmount}</Td>
//   <Td id="thd">{~~el.tax}</Td>
//   <Td id="thd">{el.amountWithQuantuty}</Td>
//   <Td id="thd">{~~el.withTax}</Td>
// </Tr>
// ))}

// <Box display={{base:"block",md:"block",lg:"none"}} width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
// {data.orderData?.map((el)=>(
//   <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} key={el._id}>
//  <Tr  p={2} > <Th id="thds">Item Name</Th>            <Td id="thd">{el.productData.foodName}</Td></Tr>
//  <Tr  p={2} > <Th id="thds">Choices</Th>            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td></Tr>
//  <Tr   p={2}> <Th id="thds">Full Price</Th>            <Td id="thd">{el.productData.price}</Td></Tr>
//  <Tr   p={2}> <Th id="thds">Discount</Th>            <Td id="thd">{Math.floor(((el.productData.price-el.productAmount)/el.productData.price)*100)}%</Td></Tr>
//  <Tr   p={2}> <Th id="thds">Quantity</Th>            <Td id="thd">{el.quantity}</Td></Tr>
//  <Tr   p={2}> <Th id="thds">Amount</Th>            <Td id="thd">{el.productAmount}</Td></Tr>
//  <Tr   p={2}> <Th id="thds">Tax</Th>            <Td id="thd">{~~el.tax}</Td></Tr>
//  <Tr   p={2}> <Th id="thds">Totals</Th>            <Td id="thd">{el.amountWithQuantuty}</Td></Tr>
//  <Tr   p={2}> <Th id="thds">Store Proceeds</Th>            <Td id="thd">{~~el.withTax}</Td></Tr>
// </Box>

// ))}

// </Box>