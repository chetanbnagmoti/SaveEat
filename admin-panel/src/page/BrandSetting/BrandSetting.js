import { Box, Button , Accordion, AccordionItem, AccordionButton,  AccordionPanel, AccordionIcon, Input, FormControl, FormLabel, Flex, Stack, InputGroup, InputRightAddon, Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./BrandSetting.css"
import TagInput from './TagInput'
import { TriangleDownIcon } from '@chakra-ui/icons'
import {AiOutlineCaretDown} from 'react-icons/ai'
import Modals from './Modal'
import Navbar from '../../component/Navbar/Navbar'
import PreNav from '../../component/Pre-nav/PreNav'
import axios from 'axios'
import EditModals from './EditModal'

export default function BrandSetting() {
  const [data,setData]=useState({})
  const [flag,setFlag]=useState(false)
const fetch=async()=>{
  let localdata=JSON.parse(localStorage.getItem('data'))

try{
let res=await axios.post("https://support.saveeat.in:3035/api/v1/user/getBrandDetails",{"brandId": localdata._id})
console.log(res.data.data)
setData(res.data.data)
}
catch(e){
  console.log(e,"error while fetching brandDetails")
}
}
useEffect(()=>{
fetch()
},[flag])

return (
<>
<PreNav/>
      <Navbar/>
<Box w={{base:"90vw",lg:"75vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>
    

    <Box  display={"flex"} gap={"5"} >
    {/* <Button bgColor={"#96D780"} size='md' id='btt'>Add a New Outlet</Button> */}
    <Modals/>
   <EditModals check={(val)=>{setFlag(val)}} data={data?{
    "email": data.email,
    "brandId": data._id,
    "businessName": data.businessName,
    "street": data.street,
    "locality": data.locality,
    "gstinNumber": data.gstinNumber,
    "fssaiNumber": data.fssaiNumber,
    "webiteLink": data.webiteLink,
    "mobileNumber": data.mobileNumber,
    "businessType": data.businessType,
    "foodType": data.foodType,
    "address": data.address,
    "latitude": data.latitude,
    "longitude": data.longitude
}:""} />
   {/* <Button bgColor={"#96D780"} size='md'  id='btt'>Edit Outlet</Button> */}
    
    </Box>
    
    </Box>


<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Basic Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >
              <FormControl id="Location" isRequired>
                <FormLabel>Location</FormLabel>
                <Input defaultValue={data&&data.location?`${data.location.coordinates[1]} ${data.location.coordinates[0]}`:""} size={"sm"}  borderRadius={10} placeholder='Exact location as on google maps' required />
              </FormControl>
             <Flex gap={{base:0,md:5,lg:10}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="locality" isRequired>
                <FormLabel>Locality</FormLabel>
                <Input defaultValue={data&&data.locality?data.locality:""} size={"sm"} borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Outlet Phone No.</FormLabel>
                <Input  size={"sm"} defaultValue={data&&data.mobileNumber?data.mobileNumber:""} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
             </Flex> 
             <FormControl id="cuisine" isRequired>
                <FormLabel>Cuisine</FormLabel>
                <TagInput type="text"/>
              </FormControl>
              <FormControl id="outlet Image" isRequired>
                <FormLabel>Outlet Image</FormLabel>
                <InputGroup size={"sm"}>
                {data&&data.image?"":<Input  type="file" placeholder='0123456789' required />}
                <InputRightAddon bgColor={"#19ABAD"} color={"#FFFFFF"} fontSize={"15px"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={500} children={data&&data.image?data.image:'Choose File'} />
               
                  {/* <Input type="file"  required />
        {data && (
          <InputRightAddon>
            {data.image}
          </InputRightAddon>
        )} */}
                </InputGroup>
              </FormControl>
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>

<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Business Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >
              <FormControl id="Location" isRequired>
                <FormLabel >Registered Name</FormLabel>
                <Input defaultValue={data&&data.registerdName?data.registerdName:""} size={"sm"} borderRadius={10} placeholder='Exact location as on google maps' required />
              </FormControl>
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="locality" isRequired>
                <FormLabel>Brand Name</FormLabel>
                <Input  defaultValue={data&&data.businessName?data.businessName:""} size={"sm"} borderRadius={10} placeholder='Rehanam' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Ownership Type</FormLabel>
                <Input size={"sm"} borderRadius={10} placeholder='pvt.ltd' required />
              </FormControl>   
             </Flex> 
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="locality" isRequired>
                <FormLabel>Signing Authority Email ID</FormLabel>
                <Input  defaultValue={data&&data.owner?data.owner:""} size={"sm"} borderRadius={10} placeholder='abc@gmail.com' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input  defaultValue={data&&data.email?data.email:""} size={"sm"} borderRadius={10} placeholder='abc@gmail.com' required />
              </FormControl>   
             </Flex>
             <Flex gap={{base:0,md:5,lg:5}} flexDirection={{base:"column",md:"row"}}>
             <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
              <FormControl id="locality" isRequired>
                <FormLabel>Type of Business</FormLabel>
                <Input defaultValue={data&&data.businessType?data.businessType:""} size={"sm"} borderRadius={10} placeholder='connstruction' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>GSTIN Number</FormLabel>
                <Input  defaultValue={data&&data.gstinNumber?data.gstinNumber:""} size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>  </Flex>
              <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
              <FormControl id="locality" isRequired>
                <FormLabel>FSSAI Licence No.</FormLabel>
                <Input defaultValue={data&&data.fssaiNumber?data.fssaiNumber:""}   size={"sm"} borderRadius={10} placeholder='1234567890' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Reference No.</FormLabel>
                <Input defaultValue={data&&data.hiddenCode?data.hiddenCode:""}  size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl></Flex>  
             </Flex>

             <FormControl id="cuisine" isRequired>
                <FormLabel>Billing Address</FormLabel>
                <Stack>
                <Input defaultValue={data&&data.street?data.street:""} size={"sm"} borderRadius={10} placeholder='Street address' required />
                <Input  size={"sm"} borderRadius={10} placeholder='Address Line 2' required />
                <Flex gap={{base:0,md:5,lg:5}} flexDirection={{base:"column",md:"row"}} > 
                <Input defaultValue={data&&data.street?data.street:""} size={"sm"} borderRadius={10} placeholder='Street address' required />
                <InputGroup size='sm'>
   
    <Input defaultValue={data&&data.state?data.state:""} placeholder='State' />
<Menu>
  <MenuButton  >
     <InputRightAddon children={<TriangleDownIcon/>} />
  </MenuButton>
  <MenuList>
    {/* <MenuItem>Bihar</MenuItem>
    <MenuItem>Jharkhand</MenuItem> */}
   
  </MenuList>
</Menu></InputGroup>
<Input defaultValue={data&&data.zip?data.zip:""} size={"sm"} borderRadius={10} placeholder='zipcode' required />
                </Flex>
                </Stack>
              </FormControl>
             
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>

<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Outlet POC Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >

             
        <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"column",lg:"row"}}>
        <Box flex="2.5">
             <FormControl  id="locality" isRequired>
                <FormLabel>Name</FormLabel>
                <Input   size={"sm"}  borderRadius={10} placeholder='Sanam' required />
              </FormControl>   
              </Box>
              <Box flex="2">
              <FormControl id="phone" isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='abc@gmail.com' required />
              </FormControl> 
              </Box>
              <Box flex="1.5">  
              <FormControl id="phone" isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
              </Box>
             </Flex>
  
             
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>

<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Business Owner Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >
              <FormControl id="Location" isRequired>
                <FormLabel>Name</FormLabel>
                <Input defaultValue={data&&data.originalName?data.originalName:""} size={"sm"} borderRadius={10} placeholder='Name' required />
              </FormControl>
             <FormControl id="locality" isRequired>
                <FormLabel>Email</FormLabel>
                <Input defaultValue={data&&data.originalEmail?data.originalEmail:""} size={"sm"} borderRadius={10} placeholder='abc@gmail.com' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input defaultValue={data&&data.originalMobileNumber?data.originalMobileNumber:""} size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
             
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>


</>  )
}
