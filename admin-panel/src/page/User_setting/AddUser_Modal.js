import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input, FormControl, FormLabel, Flex, Stack, InputGroup,  Box, Switch, Divider, InputRightElement,  } from '@chakra-ui/react'
    import "./UserSetting.css"
import { TriangleDownIcon } from '@chakra-ui/icons'
import Addrole from './AddRole_modal'
import { Link } from 'react-router-dom'
export default function AddUser() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
    <Button bgColor={"#96D780"} onClick={onOpen} size='md' className='btt'>Add New User</Button>
        {/* <Button onClick={onOpen} bgColor={"#96D780"} size='md' id='btt'>Add a New Outlet</Button> */}

  
        <Modal size={"xl"}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent padding={5} m={"auto"}>
            <ModalHeader><h2 id='ModalHdr'>Add an User</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack >
              <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
              <FormControl id="Choice" isRequired>
                <FormLabel >User Name</FormLabel>
                <Input  placeholder='user name ' required />
              </FormControl>
              </Flex>
              
           
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <Box flex={2}><FormControl id="Food_type" isRequired>
                <FormLabel>User Role</FormLabel>
                <InputGroup>
                  <Input placeholder='role' />
                 <InputRightElement>
                  <TriangleDownIcon />
                 </InputRightElement>
                </InputGroup>       
             </FormControl></Box> 
             <Box flex={3}> 
              <FormControl id="phone" isRequired>
                <FormLabel>User Email</FormLabel>
                <Input  placeholder='@gmail.com' required />
              </FormControl> </Box>   
             </Flex> 
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="Food_type" isRequired>
                <FormLabel>User Password</FormLabel>
                <Input type='password'  placeholder='*********' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password'  placeholder='*********' required />
              </FormControl>   
             </Flex>  
               
      </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>console.log("hii2")} bgColor={"#96D780"}>
                Add User
              </Button>
              </ModalFooter>
              
             <Link to="/addRole/create"><Button  position={"absolute"} top={"100%"} left={{base:"80%",md:"100%",lg:"120%"}} bgColor={"teal"} onClick={()=>console.log("hii")}>
                Add Items
              </Button>
              </Link> 
          </ModalContent>
          
        </Modal>
        
      </>
    )
}
