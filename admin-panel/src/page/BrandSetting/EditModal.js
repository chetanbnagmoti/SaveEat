import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function EditModals({data,check}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [creds,setCreds]=useState({})
    const [selectedFood,setSelectedFood]=useState("")
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const { name, value, checked } = e.target;

        if (name === 'foodType') {
          // Update the selected food type
          if (checked) {
            setSelectedFood(value);

          }
          else {
            setSelectedFood("");
          }
        }

setCreds({...creds,[name]:value})
    }
    const update=async()=>{
        try{
            let res=await axios.post('https://support.saveeat.in:3035/api/v1/user/updateBrandProfile',creds)
            console.log(res.data)
            if(res.data.message=='Profile updated successfully'){
                check(true)
                onClose()
            }
        }catch(e){
            console.log(e)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(creds)
        update()

    }
    useEffect(()=>{
        setCreds(data)
setSelectedFood(data.foodType === "Veg" ? "Veg" : "Non_Veg")
    },[data])

    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Button onClick={onOpen} bgColor={"#96D780"} size='md' id='btt'>Edit Outlet</Button>

  
        <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><h2 id='ModalHdr'>Update Outlet</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack id='Modalbdy' >
              <FormControl id="Location" isRequired>
                <FormLabel >Business Name</FormLabel>
                <Input defaultValue={data.businessName} name='businessName' onChange={handleChange} size={"sm"} borderRadius={5} placeholder='Business name prefilled' required />
              </FormControl>
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <Box flex={2}><FormControl id="locality" isRequired>
                <FormLabel>Location</FormLabel>
                <Input  defaultValue={data.street} name='street' onChange={handleChange} size={"sm"} borderRadius={5} placeholder='Andheri west' required />
              </FormControl>  </Box> 
              <Box flex={3}>
              <FormControl id="phone" isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input defaultValue={data.email} name='email' onChange={handleChange} size={"sm"} borderRadius={5} placeholder='abc@gmail.com' required />
              </FormControl>   
              </Box>
             </Flex> 
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <Box flex={1}><FormControl id="locality" isRequired>
                <FormLabel>Food Type</FormLabel>
                <Stack spacing={5} direction='row'><Checkbox 
                 name="foodType"
                 value="Veg"
                 defaultChecked={selectedFood=="Veg" }
                 onChange={handleChange}>Veg</Checkbox><Checkbox  
                 name="foodType"
                 value="Non Veg"
                 defaultChecked={selectedFood=="Non_Veg"}
                 onChange={handleChange}>Non Veg  </Checkbox></Stack>              </FormControl>  </Box> 
             <Box flex={1.5}><FormControl id="locality" isRequired>
                <FormLabel>Mob No.</FormLabel>
                <Input defaultValue={data.mobileNumber}  size={"sm"} borderRadius={5} placeholder='0123456789' required />
              </FormControl>  </Box> 
              <Box flex={2.5}>
              <FormControl id="phone" isRequired>
                <FormLabel>Website Link</FormLabel>
                <Input defaultValue={data.webiteLink} name='webiteLink' onChange={handleChange} size={"sm"} borderRadius={5} placeholder='abc.com' required />
              </FormControl>   
              </Box>
             </Flex> 
             
             <Flex gap={{base:0,md:5,lg:5}} flexDirection={{base:"column",md:"row"}}>
             <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
                <Box flex={2}>
                <FormControl id="locality" isRequired>
                <FormLabel>Type of Business</FormLabel>
                <Input defaultValue={data.businessType} name='businessType' onChange={handleChange} size={"sm"} borderRadius={10} placeholder='co-operative' required />
              </FormControl></Box> 
              <Box flex={1}>  
              <FormControl id="phone" isRequired>
                <FormLabel>GSTIN Number</FormLabel>
                <Input defaultValue={data.gstinNumber} name='gstinNumber' onChange={handleChange} size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl> </Box></Flex>
             
              <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
              <Box flex={1}>
              <FormControl id="locality" isRequired>
                <FormLabel>FSSAI Licence No.</FormLabel>
                <Input  defaultValue={data.fssaiNumber} name='fssaiNumber' onChange={handleChange} size={"sm"} borderRadius={10} placeholder='1234567890' required />
              </FormControl>   </Box>
              <Box flex={1}>
              <FormControl id="phone" isRequired>
                <FormLabel>Reference No.</FormLabel>
                <Input defaultValue={data.hiddenCode} name='hiddenCode' onChange={handleChange} size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl></Box></Flex>  
             </Flex>
             <Flex gap={2} flexDirection={{base:"column",md:"row"}}>
       <FormControl  width={"50%"} id="outlet Image" isRequired>
                <FormLabel>Outlet Logo</FormLabel>
                <InputGroup width={"100%"} size={"sm"}>
                <TagInput   type="file"/>
{              data?"":  <InputRightAddon h={"34px"} bgColor={"#19ABAD"} color={"#FFFFFF"} fontSize={"15px"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={500} children='Choose File' />
}                </InputGroup>
              </FormControl>
              <FormControl width={"50%"} id="outlet Image" isRequired>
                <FormLabel>Outlet Banner</FormLabel>
                <InputGroup width={"100%"} size={"sm"}>
                <TagInput  type="file"/>
{              data?"":  <InputRightAddon h={"34px"} bgColor={"#19ABAD"} color={"#FFFFFF"} fontSize={"15px"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={500} children='Choose File' />
}                </InputGroup>
              </FormControl>
       </Flex>
             
      </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' onClick={handleSubmit} >
                Submit
              </Button>
              </ModalFooter>
              
          </ModalContent>
        </Modal>
      </>
    )
}
