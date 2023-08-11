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
    import "./Choice.css"
import TagInput from "../BrandSetting/TagInput"
import { TriangleDownIcon } from '@chakra-ui/icons'
export default function CreateChoice() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
    <Button bgColor={"#96D780"} onClick={onOpen} size='md' className='btt'>Create a Choice</Button>
        {/* <Button onClick={onOpen} bgColor={"#96D780"} size='md' id='btt'>Add a New Outlet</Button> */}

  
        <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent padding={5}>
            <ModalHeader><h2 id='ModalHdr'>Create a Choice</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack >
              <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
              <FormControl id="Choice" isRequired>
                <FormLabel >Choice Name</FormLabel>
                <Input  placeholder='Choice name ' required />
              </FormControl>
              <Box w={"30%"} mt={6}>
              <FormControl display='flex' alignItems='center'>
               <FormLabel>Status<Divider />Closed </FormLabel>
                  <Switch colorScheme='green'/>
               </FormControl>
              </Box>
              </Flex>
              
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="Choice" isRequired>
                <FormLabel >Choice Options</FormLabel>
                    <TagInput type="text" />          
                    
                </FormControl>
             </Flex> 
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="Food_type" isRequired>
                <FormLabel>Food Type</FormLabel>
                <InputGroup>
                  <Input placeholder='Veg/Non-veg' />
                 <InputRightElement>
                  <TriangleDownIcon />
                 </InputRightElement>
                </InputGroup>       
             </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Price</FormLabel>
                <Input  placeholder='89' required />
              </FormControl>   
             </Flex> 
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="Food_type" isRequired>
                <FormLabel>Min Qty</FormLabel>
                <Input  placeholder='9' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Max Qty</FormLabel>
                <Input  placeholder='9' required />
              </FormControl>   
             </Flex>  
               
      </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button bgColor={"#96D780"}>
                Save Choice
              </Button>
              </ModalFooter>
              
          </ModalContent>
        </Modal>
      </>
    )
}
