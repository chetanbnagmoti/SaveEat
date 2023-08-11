import React, { useEffect, useState } from 'react'
import "./editmenu.css"
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
  Flex,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { FaEllipsisV } from 'react-icons/fa';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import BulkUpload from '../bulk/Bulk';
import Navbar from '../Navbar/Navbar';
import PreNav from '../Pre-nav/PreNav';
import axios from 'axios';
import UpdateItem from '../updateItem/UpdateItem';
import AddItem from '../Add_new_Item/Add_newItem';

export default function Editmenu() {
  const navigate=useNavigate()
  const [list,setList]=useState([])
  const params=useParams()

  const GET_LIST=async()=>{
    let brandId=JSON.parse(localStorage.getItem('data'))
    let creds={
        "menuId": params.id,
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
  },[])
  return (
    <>
     <PreNav/>
      <Navbar/>
    <Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>

    <Box  display={"flex"} gap={"5"} >
    {/* <Button colorScheme='green' size='md' className='btt'>Bulk Upload</Button> */}
    <BulkUpload/>
  {/* <Link to="/addItem">   <Button colorScheme='green' size='md'  className='btt'>Add Individual Product</Button></Link> */}
    <AddItem data={list}/>
    </Box>
    
    </Box>
    <Box className="table-container" w={{base:"90vw",lg:"80vw"}} m={"auto"}>
    <TableContainer borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"} className="hgf" display={{base:"none",md:"none",lg:"table"}}>
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
            <Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} color='white'/></Th>
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
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  {/* <Link to="/updateItem"> */}
    {/* <MenuItem icon={<EditIcon />} > */}
      <UpdateItem/>
    {/* </MenuItem> */}
    {/* </Link> */}
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
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
    </>
  )
}



// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
{/* <Table  size="sm" variant="striped" colorScheme={"gray"}>
      <Thead>
        <Tr>
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Tablescon</Td>
          <Td>9 April 2019</Td>
          <Td>East Annex</Td>
        </Tr>
        <Tr>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table> */}