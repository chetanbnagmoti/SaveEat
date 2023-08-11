import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,Box, useDisclosure, Flex, Input, FormLabel, FormControl, Stack, Switch
  } from '@chakra-ui/react'
  import "./HolidayModal.css"
import { FaEllipsisV, FaPlusCircle } from 'react-icons/fa'
export default function HolidayModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
         <Box onClick={onOpen}><FaEllipsisV /></Box>

        <Modal size={"2xl"}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent m={"auto"}>
            <ModalHeader id="mod_header">Add Exception</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <Flex justifyContent={"space-between"} w={"90%"}><h2 id="mod_body_Header">Date</h2><h2 id="mod_body_Header">Outlet Status</h2></Flex>
             <Flex justifyContent={"space-between"} w={"90%"}>
            <Flex gap={2}>
            <FormControl id="Item name" isRequired>
                <FormLabel>Item Name</FormLabel>
                <Input  type="datetime-local" required />
              </FormControl>    
              <FormControl id="Item name" isRequired>
                <FormLabel>Item Name</FormLabel>
                <Input  type="datetime-local" required />
              </FormControl>    
              
            </Flex>
            <Stack  direction='row' mt={8}> <Switch colorScheme='green' m={"auto"} size='lg' paddingTop={"1.5px"} /> <h2 id='swtch'>Close</h2></Stack>

             </Flex>
             <Flex justifyContent={"flex-start"} w={"90%"} mt={8} pb={1}><h2 id="mod_body_Header">Time</h2></Flex>
             <Box boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.1)"} borderRadius={10} p={3}><Flex justifyContent={"space-between"} w={"90%"}>
            <Flex gap={2} width={"70%"}>
            <FormControl id="Item name" isRequired>
                <FormLabel>Item Name</FormLabel>
                <Input  type="time" required />
              </FormControl>    
              <FormControl id="Item name" isRequired>
                <FormLabel>Item Name</FormLabel>
                <Input  type="time" required />
              </FormControl>    
              
            </Flex>
            <Stack  direction='row' mt={8} pr={20}><FaPlusCircle size={25}/></Stack>


             </Flex>
</Box>

             
            </ModalBody>
  
            <ModalFooter>
           <Flex justifyContent={"flex-end"} gap={5}>
           <Button bgColor={"#EAEAEA"} size='md' id='btt'>Cancel</Button>

<Button bgColor={"#96D780"} size='md' id='btt'>Save</Button>
           </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
