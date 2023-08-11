import React, { useState } from 'react'
import "./UserSetting.css"
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
import AddUser from './AddUser_Modal';


export default function User() {
    const [value,setValue]=useState("")
  const navigate=useNavigate()
  return (
    <>
    <Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>

    {/* <Box  display={"flex"} gap={"5"} >
    <Button bgColor={"#96D780"} size='md' className='btt'>Add New User</Button>  */}
    {/* <Button bgColor={"#96D780"} size='md' className='btt'>Add New User</Button>     */}
    <AddUser/>
   
    {/* </Box> */}
    
    </Box>
    <Box className="table-container" w={{base:"90vw",lg:"80vw"}} m={"auto"}>
    <TableContainer borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"} className="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thds">Role name</Th>
            <Th id="thds">Created on</Th>
            <Th id="thds">Created by</Th>       
           
            <Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} color='white'/></Th>
          </Tr>
        </Thead>
        <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

          
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Role Name</Th> <Td id="thd"><form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}><InputGroup >
       
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          
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
        </InputGroup></form></Td><Td id="thd">Admin</Td></Tr></Flex>
        <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created on</Th> <Td id="thd"><form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}><InputGroup >
       
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          
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
        </InputGroup></form></Td><Td id="thd">12/12/23 8:00 PM</Td></Tr></Flex>
        <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created by</Th> <Td id="thd"><form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}><InputGroup >
       
          <Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>
          
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
        </InputGroup></form></Td><Td id="thd">Vivek date</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} /></Th><Td></Td><Td id="thd"> <Menu>
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
</Menu></Td></Tr></Flex>

          
          </Box>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

          
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Role Name</Th> <Td id="thd"><form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}><InputGroup >

<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>

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
</InputGroup></form></Td><Td id="thd">Admin</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created on</Th> <Td id="thd"><form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}><InputGroup >

<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>

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
</InputGroup></form></Td><Td id="thd">12/12/23 8:00 PM</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Created by</Th> <Td id="thd"><form onSubmit={(e)=>{e.preventDefault();
console.log(value)}}><InputGroup >

<Input size={"xs"} value={value} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Add items"/>

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
</InputGroup></form></Td><Td id="thd">Vivek date</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} /></Th><Td></Td><Td id="thd"> <Menu>
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
</Menu></Td></Tr></Flex>


</Box>
        
          </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
        <Tr>
        <Td id="thd"><form onSubmit={(e)=>{e.preventDefault(); console.log(value)}}> <InputGroup>
          <Input size={"xs"} value={value} width={"100%"} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Ex- Admin"/>
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
          />        </InputGroup> </form></Td>
         <Td id="thd"><form onSubmit={(e)=>{e.preventDefault(); console.log(value)}}> <InputGroup>
          <Input size={"xs"} value={value} width={"100%"} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Ex- 12/12/2012 8:00"/>
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
          />        </InputGroup> </form></Td>
            <Td id="thd"><form onSubmit={(e)=>{e.preventDefault(); console.log(value)}}> <InputGroup>
          <Input size={"xs"} value={value} width={"100%"} onChange={(e)=>setValue(e.target.value)} bgColor={"white"} placeholder="Ex- Richa"/>
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
          />        </InputGroup> </form></Td>
       <Td></Td>
            </Tr>



          <Tr>
            <Td id="thd">Admin</Td>
            <Td id="thd">22/12/22 8:00 PM</Td>
            <Td id="thd">Vivek Date</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/addRole/edit">
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