import React, { useEffect, useState } from 'react'
import "./Ongoing_discount.css"
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
    Menu,
    Input,
    ButtonGroup,
    IconButton
  } from "@chakra-ui/react";
  import { AddIcon, DeleteIcon, EditIcon, MinusIcon } from '@chakra-ui/icons'
  import { FaEllipsisV } from 'react-icons/fa';
  import { Link, Navigate, useNavigate } from 'react-router-dom';
  import axios from "axios"
import DeleteModal from './deleteModal/deleteModal';
import DinnerDiscount from '../DinnerDiscounnt/DinnerDiscount';
import Navbar from '../../component/Navbar/Navbar';
import PreNav from '../../component/Pre-nav/PreNav';
export default function Ongoing_discount() {
    const [flag,setFlag]=useState(0)
    const [data,setData]=useState([])

    const fetchOnGoingDiscount=async()=>{
      let data=JSON.parse(localStorage.getItem('data'))

try{
let response=await axios.post('https://support.saveeat.in:3035/api/v1/user/itemListForSell ',{"brandId": data._id})
console.log(response.data)
setData(response.data.data)
}
catch(e){
  console.log(e)
}
    }
    useEffect(()=>{
fetchOnGoingDiscount()
    },[])
  return (
   <>
    <PreNav/>
      <Navbar/>
   <Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>

<Box  display={"flex"} gap={"5"} >
<Button colorScheme='green' size='md' className='btt'>Add to Discount</Button>
{/* <Button colorScheme='green' size='md' className='btt'>Add New Menu</Button> */}
</Box>

</Box>


<Box className="table-container" w={{base:"90vw",lg:"80vw"}} m={"auto"}>
    <TableContainer borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"} className="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thds">Item Name</Th>
            <Th id="thds">Quantity</Th>
            <Th id="thds">Timer</Th>
            <Th id="thds">Expiry Date&Time</Th>
            <Th id="thds">Discount %</Th>
            <Th id="thds">Full Price</Th>
            <Th id="thds">Discounted Price</Th>
            <Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} color='white'/></Th>
          </Tr>
        </Thead>
        <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          {data&&data.map((el)=>(

          <Box key={el._id} border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Item Name</Th><Td id="thd"><Input type='text' placeholder='Item name' /></Td><Td id="thd">Biryani Rice</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Quantity</Th><Td id="thd"><Input type='text' placeholder='Item name' /></Td><Td id="thd">{flag==(el._id)?<ButtonGroup size='sm' isAttached variant='outline'><IconButton aria-label='Add to friends' icon={<MinusIcon />} /><IconButton aria-label='Add to friends'  ><span>5</span></IconButton> <IconButton aria-label='Add to friends' icon={<AddIcon />} /></ButtonGroup>:
              (<ButtonGroup size='sm' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  ><span>5</span></IconButton> <IconButton aria-label='Add to friends' ><span>5</span></IconButton></ButtonGroup>)}</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Timer</Th><Td id="thd"><Input type='text' placeholder='Item name' /></Td><Td id="thd">2d 23h 40m 60s</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Expiry Date&Time</Th><Td id="thd"><Input type='text' placeholder='Item name' /></Td><Td id="thd">{flag==(el._id)?<Input placeholder="Select Date and Time" size="md" type="datetime-local"/>:"22/12/22 8:00pm"}</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Discount %</Th><Td id="thd"><Input type='text' placeholder='Item name' /></Td><Td id="thd">20</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Full Price</Th><Td id="thd"><Input type='text' placeholder='Item name' /></Td><Td id="thd">450</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Discounted Price</Th><Td id="thd"><Input type='text' placeholder='Item name' /></Td><Td id="thd">412</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} color='white'/></Th><Td></Td><Td id="thd"><Menu>
           {flag==(el._id)?<Button colorScheme='green' size='sm' color={"white"} onClick={()=>{setFlag(0)}}>save</Button>:<MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>}
  <MenuList  >
 
    <MenuItem icon={<EditIcon />} onClick={()=>{setFlag(1)}}>
      Edit Item
    </MenuItem>
    <DeleteModal/>

    
  </MenuList>
</Menu></Td></Tr></Flex>

          
          </Box>
          ))}
         


          
        
          </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
            <Tr >
                <Td id="thd"><Input type='text' placeholder='Item name' /></Td>
                <Td id="thd"><Input type='text' placeholder="Full Price"/></Td>
                <Td id="thd"><Input type='text' placeholder="Tax Type"/></Td>
                <Td id="thd"><Input type='text' placeholder="Cuisine"/></Td>
                <Td id="thd"><Input type='text' placeholder="Weight"/></Td>
                <Td id="thd"><Input type='text' placeholder="Food Price"/></Td>
                <Td id="thd"><Input type='text' placeholder="Item Window"/></Td>
                <Td></Td>
            </Tr>
         
          {data&&data.map((el)=>(
            <Tr key={el._id}>
            <Td id="thd">{el.foodName}</Td>
            <Td id="thd">{flag==(el._id)?<ButtonGroup size='sm' isAttached variant='outline'><IconButton aria-label='Add to friends' icon={<MinusIcon />} /><IconButton aria-label='Add to friends'  ><span>5</span></IconButton> <IconButton aria-label='Add to friends' icon={<AddIcon />} /></ButtonGroup>:
              (<ButtonGroup size='lg' isAttached variant='outline' id="btnparent">
                <Box id="btncaption"><h2 id="cap" style={{marginRight:"13px"}}>On <br/> Discount</h2><h2 id="cap" style={{marginRight:"8px"}}>Left</h2></Box>
                <IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}  >5</span></IconButton>
                 <IconButton aria-label='Add to friends' borderLeftColor={"#19ABAD"}><span style={{marginBottom:"10px"}}>5</span></IconButton>
                 </ButtonGroup>)}</Td>
            <Td id="thd">2d 23h 40m 60s</Td>
            <Td id="thd">{flag==(el._id)?<Input placeholder="Select Date and Time" size="md" type="datetime-local"/>:"22/12/22 8:00pm"}</Td>
            <Td id="thd">20</Td>
            <Td id="thd">{el.price}</Td>
            <Td id="thd">412</Td>
            <Td id="thd"> <Menu>
  {flag==(el._id)?<Button colorScheme='green' size='sm' color={"white"} onClick={()=>{setFlag(0)}}>save</Button>:<MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>}
  <MenuList  >
 
    <MenuItem icon={<EditIcon />} onClick={()=>{setFlag(el._id)}}>
      Edit Item
    </MenuItem>
    <DeleteModal/>

    
  </MenuList>
</Menu></Td>
          </Tr>
          ))}

       
         
          
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
<br/><br/>
<DinnerDiscount/>
<br/><br/>

</>  )
}
