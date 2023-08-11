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
    Input, FormControl, FormLabel, Flex, Stack, InputGroup, InputRightAddon, Menu, MenuButton, MenuList, MenuItem, Box, Checkbox,  } from '@chakra-ui/react'
  import "./BrandSetting.css"
import { TriangleDownIcon } from '@chakra-ui/icons'
import TagInput from './TagInput'

export default function Modals() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Button onClick={onOpen} bgColor={"#96D780"} size='md' id='btt'>Add a New Outlet</Button>

  
        <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><h2 id='ModalHdr'>Add Outlet</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack id='Modalbdy' >
              <FormControl id="Location" isRequired>
                <FormLabel >Business Name</FormLabel>
                <Input  size={"sm"} borderRadius={5} placeholder='Business name prefilled' required />
              </FormControl>
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <Box flex={2}><FormControl id="locality" isRequired>
                <FormLabel>Location</FormLabel>
                <Input   size={"sm"} borderRadius={5} placeholder='Andheri west' required />
              </FormControl>  </Box> 
              <Box flex={3}>
              <FormControl id="phone" isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input size={"sm"} borderRadius={5} placeholder='abc@gmail.com' required />
              </FormControl>   
              </Box>
             </Flex> 
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <Box flex={1}><FormControl id="locality" isRequired>
                <FormLabel>Food Type</FormLabel>
                <Stack spacing={5} direction='row'><Checkbox >Veg</Checkbox><Checkbox  defaultChecked>Non Veg  </Checkbox></Stack>              </FormControl>  </Box> 
             <Box flex={1.5}><FormControl id="locality" isRequired>
                <FormLabel>Mob No.</FormLabel>
                <Input   size={"sm"} borderRadius={5} placeholder='0123456789' required />
              </FormControl>  </Box> 
              <Box flex={2.5}>
              <FormControl id="phone" isRequired>
                <FormLabel>Website Link</FormLabel>
                <Input size={"sm"} borderRadius={5} placeholder='abc.com' required />
              </FormControl>   
              </Box>
             </Flex> 
             
             <Flex gap={{base:0,md:5,lg:5}} flexDirection={{base:"column",md:"row"}}>
             <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
                <Box flex={2}>
                <FormControl id="locality" isRequired>
                <FormLabel>Type of Business</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='co-operative' required />
              </FormControl></Box> 
              <Box flex={1}>  
              <FormControl id="phone" isRequired>
                <FormLabel>GSTIN Number</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl> </Box></Flex>
             
              <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
              <Box flex={1}>
              <FormControl id="locality" isRequired>
                <FormLabel>FSSAI Licence No.</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='1234567890' required />
              </FormControl>   </Box>
              <Box flex={1}>
              <FormControl id="phone" isRequired>
                <FormLabel>Reference No.</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl></Box></Flex>  
             </Flex>
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
       <FormControl id="outlet Image" isRequired>
                <FormLabel>Outlet Logo</FormLabel>
                <InputGroup size={"sm"}>
                <TagInput type="file"/>
                <InputRightAddon h={"34px"} bgColor={"#19ABAD"} color={"#FFFFFF"} fontSize={"15px"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={500} children='Choose File' />
                </InputGroup>
              </FormControl>
              <FormControl id="outlet Image" isRequired>
                <FormLabel>Outlet Banner</FormLabel>
                <InputGroup size={"sm"}>
                <TagInput type="file"/>
                <InputRightAddon h={"34px"} bgColor={"#19ABAD"} color={"#FFFFFF"} fontSize={"15px"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={500} children='Choose File' />
                </InputGroup>
              </FormControl>
       </Flex>
             
      </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' >
                Submit
              </Button>
              </ModalFooter>
              
          </ModalContent>
        </Modal>
      </>
    )
}
