import React, { useState } from 'react'
import "./Add_newItem.css"
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, InputGroup, InputRightAddon, Stack,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
 } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'

export default function AddItem({data}) {
  const params=useParams()
  const [form,SetForm]=useState({"menuId":params.id,"selectedItems":data})
  const { isOpen, onOpen, onClose } = useDisclosure()

const handleChange=(e)=>{
  const { name, value, type, checked } = e.target;
  
  if (type === 'checkbox') {
    const checkboxValue = checked ? value : '';
    SetForm({ ...form, [name]: checkboxValue });
  } else {
    SetForm({ ...form, [name]: value });
  }
 
  }
  const handleSubmit=(e)=>{
e.preventDefault()
console.log(form)
  }

  return (
    <>
   
       <Button colorScheme='green' size='md' onClick={onOpen}  className='btt'>Add Individual Product</Button>


<Modal size="8xl" isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Add Item</ModalHeader>
    <ModalCloseButton />
    <ModalBody>

<Box w={{base:"90vw",lg:"80vw"}} m={"auto"} border={"0.5px solid rgba(133, 216, 217, 0.2)"} borderRadius={"10px"} boxShadow={"0px 1px 10px rgba(0, 0, 0, 0.1)"}>

<Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
        <FormControl id="Item name" isRequired>
          <FormLabel>Item Name</FormLabel>
          <Input type="text"  name='foodName'  onChange={handleChange} placeholder="Item name" required />
        </FormControl>    
        
</Flex>

<Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
        <FormControl id="Image" isRequired>
          <FormLabel>Image</FormLabel>
          <InputGroup size='sm'>

      <Input type='file' name='foodImage'  onChange={handleChange} id='file' placeholder='mysite' />
      <InputRightAddon children='Choose' />
         </InputGroup>
        </FormControl>    
</Flex>      

<Flex padding={"15px 15px 0px 15px"} w={"70%"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
        <FormControl id="food type" isRequired>
          <FormLabel>Food Type</FormLabel>
          <Stack spacing={5} direction='row'>
        <Checkbox name='foodType' value="Veg"  onChange={handleChange}  colorScheme='green' >
          Veg
        </Checkbox>
        <Checkbox name='foodType' value="Non-veg" onChange={handleChange} colorScheme='green' >
          Non-veg
        </Checkbox>
         </Stack>    
        </FormControl>    
        <FormControl id="tax type" isRequired>
          <FormLabel>Tax Type</FormLabel>
          <Stack spacing={5} direction='row'>
         <Checkbox name='taxType' value="Taxable"  onChange={handleChange} colorScheme='green'>
           Taxable
         </Checkbox>
       <Checkbox name='taxType' value="MRP"  onChange={handleChange} colorScheme='green' >
            MRP
        </Checkbox>
      </Stack>         
       </FormControl>    
          
</Flex>

<Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
        <FormControl id="taxRate" isRequired>
          <FormLabel>Tax Rate</FormLabel>
          <Input type="text" name="Tax rate" placeholder="Tax Rate"  required />
        </FormControl>    
        <FormControl id="cuisine" isRequired>
          <FormLabel>Cuisine</FormLabel>
          <Input type="text" name="cuisine" placeholder="cuisine" required />
        </FormControl>    
        <FormControl id="sub cuisine" isRequired>
          <FormLabel>Sub Cuisine</FormLabel>
          <Input type="text" name="sub cuisine" placeholder="sub cuisine" required />
        </FormControl>    
</Flex>

<Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
        <FormControl id="weight" isRequired>
          <FormLabel>Weight in (gm)</FormLabel>
          <Input type="text" name="weight" placeholder="weight"  required />
        </FormControl>    
        <FormControl id="food price" isRequired>
          <FormLabel>Food Price</FormLabel>
          <Input type="text" name='price'  onChange={handleChange} placeholder="price" required />
        </FormControl>    
        <FormControl id="variants" isRequired>
          <FormLabel>Variants</FormLabel>
          <Input type="text" name="variants" placeholder="sub" required />
        </FormControl>    
</Flex>

<Box padding={"15px 15px 0px 15px"} w={"70%"}>
<FormLabel >Window</FormLabel>
<Flex padding={"15px 15px 0px 15px"}  gap={"10px"}>   
        <FormControl id="from" isRequired>
          <FormLabel>From</FormLabel>
          <Input type="time" name="from"  required />
        </FormControl>    
        <FormControl id="to" isRequired>
          <FormLabel>To</FormLabel>
          <Input type="time" name="to"   required />
        </FormControl>    
          
</Flex>
<FormControl  pb={4}>
        <Button
             onClick={handleSubmit}
         
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
            marginTop={"30px"}
            w={"200px"}
          >
            Add Item
          </Button>
        </FormControl>
</Box>

</Box>          </ModalBody>

    <ModalFooter>
      <Button backgroundColor={"white"}  _hover={{
              bg: "white",
            }}>
      </Button>
      
    </ModalFooter>
  </ModalContent>
</Modal>




    </>
  )
}
