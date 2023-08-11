import React, { useState } from 'react'
import "./Choice.css"
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
  Menu,Input, InputRightElement, InputGroup
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { FaEllipsisV } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CreateChoice from './CreateChoice';
import AddChoice from './AddChoice';

export default function Choice() {
    const [value,setValue]=useState("")
  const navigate=useNavigate()
  return (
    <>
    <Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>

    <Box  display={"flex"} gap={"5"} >
    {/* <Button bgColor={"#96D780"} size='md' className='btt'>Create a Choice</Button> */}
    <CreateChoice/>
    <AddChoice/>
    {/* <Button bgColor={"#96D780"} size='md'  className='btt'>Add Item to a Choice</Button> */}
    
    </Box>
    
    </Box>
    <Box className="table-container" w={{base:"90vw",lg:"80vw"}} m={"auto"}>
    <TableContainer >
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"} className="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thds">Choice ID</Th>
            <Th id="thds">Choice Name</Th>
            <Th id="thds">Choice Options</Th>
            <Th id="thds">No of Items</Th>
            <Th id="thds">Created on</Th>
            <Th id="thds">Created by</Th>
           
            <Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} color='white'/></Th>
          </Tr>
        </Thead>
        <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

          
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice ID</Th><Td id="thd"><InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td><Td id="thd">AB1234</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice Name</Th><Td id="thd"><InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td><Td id="thd">Category1</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice Option</Th><Td id="thd"><InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td><Td id="thd">9</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">No of items</Th><Td id="thd"><InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td><Td id="thd">9</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created on</Th><Td id="thd"><InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td><Td id="thd">12/12/2022</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created by</Th><Td id="thd"><InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td><Td id="thd">Richa</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td></Td><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>

          
          </Box>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

          
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice ID</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">AB1234</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice Name</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">Category1</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice Option</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">9</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">No of items</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">9</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created on</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">12/12/2022</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created by</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">Richa</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td></Td><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>


</Box>
<Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

          
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice ID</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">AB1234</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice Name</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">Category1</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Choice Option</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">9</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">No of items</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">9</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created on</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">12/12/2022</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created by</Th><Td id="thd"><InputGroup >
<form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}>
<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
</form>
<InputRightElement
 children={
   <SearchIcon
   cursor={"pointer"}
    mb={"15px"}
    boxSize={2.5}
     onClick={() => {
       console.log(value);
     }}
   />
 }
/>
</InputGroup></Td><Td id="thd">Richa</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td></Td><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>


</Box>
        
          </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
        <Tr>
                <Td id="thd"> <InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Choice ID"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td>
        <Td id="thd"> <InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Choice Name"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td>
        <Td id="thd"> <InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Choice Options"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td>
        <Td id="thd"> <InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="No of Items"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td>
        <Td id="thd"> <InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Created on"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td>
        <Td id="thd"> <InputGroup >
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Created By"/>
          </form>
          <InputRightElement
            children={
              <SearchIcon
              cursor={"pointer"}
               mb={"15px"}
               boxSize={2.5}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup></Td>
                <Td></Td>
            </Tr>



          <Tr>
            <Td id="thd">AB1234</Td>
            <Td id="thd">Category1</Td>
            <Td id="thd">9</Td>
            <Td id="thd">9</Td>
            <Td id="thd">12/12/2022</Td>
            <Td id="thd">Richa</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>
          <Tr>
            <Td id="thd">AB1234</Td>
            <Td id="thd">Category1</Td>
            <Td id="thd">9</Td>
            <Td id="thd">9</Td>
            <Td id="thd">12/12/2022</Td>
            <Td id="thd">Richa</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>
          <Tr>
            <Td id="thd">AB1234</Td>
            <Td id="thd">Category1</Td>
            <Td id="thd">9</Td>
            <Td id="thd">9</Td>
            <Td id="thd">12/12/2022</Td>
            <Td id="thd">Richa</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>
          <Tr>
            <Td id="thd">AB1234</Td>
            <Td id="thd">Category1</Td>
            <Td id="thd">9</Td>
            <Td id="thd">9</Td>
            <Td id="thd">12/12/2022</Td>
            <Td id="thd">Richa</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>
          <Tr>
            <Td id="thd">AB1234</Td>
            <Td id="thd">Category1</Td>
            <Td id="thd">9</Td>
            <Td id="thd">9</Td>
            <Td id="thd">12/12/2022</Td>
            <Td id="thd">Richa</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>
         
          
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