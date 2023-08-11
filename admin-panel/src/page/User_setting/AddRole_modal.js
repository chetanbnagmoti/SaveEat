import React from 'react'
import {
   
    Button,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Checkbox,
    Input, FormControl, FormLabel, Flex, Stack,  Box,  } from '@chakra-ui/react'
    import "./UserSetting.css"
import { CloseIcon} from '@chakra-ui/icons'
import { Link, useParams } from 'react-router-dom'
export default function Addrole() {
  const params=useParams()
    return (
      <>
   
<Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"space-between"} alignItems={"center"}  h={"70px"}>

<h2  id='hd'>{params.text=="create"?"Create Role":"Edit Role"}</h2>
<Link to="/user_setting"> <CloseIcon marginLeft={{base:0,lg:"150px"}}/></Link>

</Box>

<Box w={{base:"90vw",lg:"80vw"}} m={"auto"} border={"0.5px solid rgba(133, 216, 217, 0.2)"} borderRadius={"10px"} boxShadow={"0px 1px 10px rgba(0, 0, 0, 0.1)"}>
<Stack gap={5} w={{base:"90vw",md:"80vw",lg:"70vw"}} m={"auto"}>
              <FormControl id="Choice" mt={5} isRequired>
                <FormLabel >Role Name</FormLabel>
                <Input  placeholder='Role name ' required />
              </FormControl>
              
              <Box className="table-container"  m={"auto"}>
    <TableContainer borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"} className="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thds">Section</Th>
            <Th id="thds">View </Th>
            <Th id="thds">Add </Th>       
            <Th id="thds">Edit </Th>       
            <Th id="thds">Delete </Th>       
          </Tr>
        </Thead>
        <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

          
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Section</Th> <Td id="thd">OnGoing Orders</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Add</Th>             <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">View</Th>            <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Edit</Th>             <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Delete</Th>            <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>


          
          </Box>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

          
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Section</Th> <Td id="thd">Discounted items</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Add</Th>             <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">View</Th>            <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Edit</Th>             <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">Delete</Th>            <Td id="thd"><Checkbox colorScheme='teal'/></Td></Tr></Flex>



</Box>
        
          </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
      

          <Tr>
            <Td id="thd">OnGoing Order Section</Td>
            <Td id="thd"><Checkbox colorScheme='teal' defaultChecked/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
          </Tr>
          <Tr>
            <Td id="thd">Discounted Items</Td>
            <Td id="thd"><Checkbox colorScheme='teal' defaultChecked/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
          </Tr>
          <Tr>
            <Td id="thd">Items</Td>
            <Td id="thd"><Checkbox colorScheme='teal' defaultChecked/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
          </Tr>
          <Tr>
            <Td id="thd">Menu</Td>
            <Td id="thd"><Checkbox colorScheme='teal' defaultChecked/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
          </Tr>
          <Tr>
            <Td id="thd">Menu Categories</Td>
            <Td id="thd"><Checkbox colorScheme='teal' defaultChecked/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
            <Td id="thd"><Checkbox colorScheme='teal'/></Td>
          </Tr>
       
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
           
         
               
      </Stack>
    <Box padding={5} display={"flex"} justifyContent={"flex-end"}>
      <Button onClick={()=>console.log("hii2")} bgColor={"#96D780"}>
      {params.text=="create"?"Create Role":"Update Role"}
              </Button></Box>

</Box>
  

        
      </>
    )
}
