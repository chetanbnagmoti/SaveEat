import React, { useState } from 'react'
import "./DinnerTable.css"
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

export default function DinnerTable({flag}) {
    console.log(flag)
  return (
    <Box className="table-container" w={{base:"90vw",lg:"80vw"}} m={"auto"}>
   {flag?<Flex position={"relative"}><TableContainer w={"40vw"} borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"}  display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thdh">Item Name</Th>
            <Th id="thdh">Quantity</Th>
            {/* {flag&& <Th><Box id='editdate'></Box></Th>} */}
            
            

          </Tr>
        </Thead>
      
        
        {/* <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Item Name</Th><Td id="thd"></Td><Td id="thd">Biryani Rice</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Quantity</Th><Td id="thd"></Td><Td id="thd"><ButtonGroup size='sm' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  ><span>5</span></IconButton> <IconButton aria-label='Add to friends' ><span>5</span></IconButton></ButtonGroup></Td></Tr></Flex>
         <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Full Price</Th><Td id="thd"></Td><Td id="thd">450</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Discounted Price</Th><Td id="thd"></Td><Td id="thd">412</Td></Tr></Flex>
         

          
          </Box>
         


          
        
          </Box>

       </Tbody> */}
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
            
          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><ButtonGroup size='lg' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"}   ><span style={{marginBottom:"10px"}}>5</span></IconButton> <IconButton aria-label='Add to friends'  borderLeftColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}>5</span></IconButton></ButtonGroup></Td>
           
            
          </Tr>
          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><ButtonGroup size='lg' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"}   ><span style={{marginBottom:"10px"}}>5</span></IconButton> <IconButton aria-label='Add to friends'  borderLeftColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}>5</span></IconButton></ButtonGroup></Td>
           
            
          </Tr>
          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><ButtonGroup size='lg' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"}   ><span style={{marginBottom:"10px"}}>5</span></IconButton> <IconButton aria-label='Add to friends'  borderLeftColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}>5</span></IconButton></ButtonGroup></Td>
           
            
          </Tr>
          
          

         
          
        </Tbody>
      </Table>
    </TableContainer>
    <Box id='edit'>
        <Box id="editdate"><h6 id='exdt'>Expiry Date</h6><h1 id='extm'>12/11/22</h1></Box>
        <Box id="editdate"><h6 id='exdt'>Expiry Time</h6><ButtonGroup size='sm' isAttached variant='outline'><IconButton aria-label='Add to friends' bgColor='#19ABAD' icon={<MinusIcon />} /><IconButton aria-label='Add to friends'  ><span>5</span></IconButton> <IconButton aria-label='Add to friends' bgColor='#19ABAD' icon={<AddIcon />} /></ButtonGroup></Box>
    </Box>
    </Flex>: <TableContainer borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"}  display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thdh">Item Name</Th>
            <Th id="thdh">Quantity</Th>
            {/* {flag&& <Th><Box id='editdate'></Box></Th>} */}
            <Th id="thdh">Full Price</Th>
            <Th id="thdh">Discounted Price</Th>
            

          </Tr>
        </Thead>
      
        
        <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Item Name</Th><Td id="thd"></Td><Td id="thd">Biryani Rice</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Quantity</Th><Td id="thd"></Td><Td id="thd"><ButtonGroup size='sm' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  ><span>5</span></IconButton> <IconButton aria-label='Add to friends' ><span>5</span></IconButton></ButtonGroup></Td></Tr></Flex>
         <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Full Price</Th><Td id="thd"></Td><Td id="thd">450</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Discounted Price</Th><Td id="thd"></Td><Td id="thd">412</Td></Tr></Flex>
         

          
          </Box>
         


          
        
          </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
            
          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><ButtonGroup size='lg' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"}   ><span style={{marginBottom:"10px"}}>5</span></IconButton> <IconButton aria-label='Add to friends'  borderLeftColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}>5</span></IconButton></ButtonGroup></Td>
            <Td id="thd">60</Td>
            <Td id="thd">60</Td>
            
          </Tr>


          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><ButtonGroup size='lg' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"}   ><span style={{marginBottom:"10px"}}>5</span></IconButton> <IconButton aria-label='Add to friends'  borderLeftColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}>5</span></IconButton></ButtonGroup></Td>
            <Td id="thd">60</Td>
            <Td id="thd">60</Td>
            
          </Tr>


          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><ButtonGroup size='lg' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"}   ><span style={{marginBottom:"10px"}}>5</span></IconButton> <IconButton aria-label='Add to friends'  borderLeftColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}>5</span></IconButton></ButtonGroup></Td>
            <Td id="thd">60</Td>
            <Td id="thd">60</Td>
            
          </Tr>


          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><ButtonGroup size='lg' isAttached variant='outline' id="btnparent"><Box id="btncaption"><h2 id="cap">On <br/> Discount</h2><h2 id="cap">Left</h2></Box><IconButton aria-label='Add to friends'  borderRightColor={"#19ABAD"}   ><span style={{marginBottom:"10px"}}>5</span></IconButton> <IconButton aria-label='Add to friends'  borderLeftColor={"#19ABAD"} ><span style={{marginBottom:"10px"}}>5</span></IconButton></ButtonGroup></Td>
            <Td id="thd">60</Td>
            <Td id="thd">60</Td>
            
          </Tr>


          

         
          
        </Tbody>
      </Table>
    </TableContainer>}
    </Box>
  )
}
