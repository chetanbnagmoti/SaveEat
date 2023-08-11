import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Category.css"
import CreateModal from './categoryModal/CreateModal';
export default function Category() {
  const navigate=useNavigate()
  return (
    <>
    <Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>

    <Box  display={"flex"} gap={"5"} >
    {/* <Button bgColor={"#96D780"} color={"black"} size='md' id='btt'>Update Menu Category</Button> */}
    <CreateModal name={"Update"}/>
     <CreateModal name={"Create"}/>
    
    </Box>
    
    </Box>
    <TableContainer borderTop={"none"} w={{base:"90vw",lg:"80vw"}} m={"auto"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"} border={"4px solid #19ABAD"} bgColor={"#19ABAD"}  display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category ID</Th>
            <Th color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category Name</Th>
            <Th color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category Order</Th>
            <Th color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>No of Items</Th>
            <Th color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Created On</Th>
            <Th color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Created By</Th>
            <Th color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category Window</Th>
            </Tr>
        </Thead>
        <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th bgColor={"#19ABAD"} color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Menu Category ID</Th><Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>AB1234</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th bgColor={"#19ABAD"} color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Menu Category Name</Th><Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category 1</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th bgColor={"#19ABAD"} color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Menu Category Order</Th><Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th bgColor={"#19ABAD"} color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>No of Items</Th><Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th bgColor={"#19ABAD"} color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Created On</Th><Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>12/12/22</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th bgColor={"#19ABAD"} color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Created By</Th><Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Richa</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th bgColor={"#19ABAD"} color={"white"} textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Menu Category Window</Th><Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9 AM to 11 AM</Td></Tr></Flex>

          
          </Box>
            </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
          <Tr>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>AB1234</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category 1</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>12/12/22</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Richa</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9 AM to 11 AM</Td>
          </Tr>

          <Tr>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>AB1234</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category 1</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>12/12/22</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Richa</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9 AM to 11 AM</Td>
          </Tr>

          <Tr>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>AB1234</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category 1</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>12/12/22</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Richa</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9 AM to 11 AM</Td>
          </Tr>

          <Tr>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>AB1234</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Category 1</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>12/12/22</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Richa</Td>
            <Td id="thd" textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>9 AM to 11 AM</Td>
          </Tr>

      

        </Tbody>
      </Table>
    </TableContainer>
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