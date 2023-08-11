import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormLabel,
    FormControl,
    Table,
    Thead,
    Tr,
    Td,
    Th,
    Tbody,
    TableContainer,
    Checkbox,
    Box,
    Flex,
    MenuItem,
  } from '@chakra-ui/react'
import "./deleteModal.css"
import { DeleteIcon } from '@chakra-ui/icons'
export default function DeleteModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        {/* <span onClick={onOpen} >Delete Item</span> */}
        <MenuItem onClick={onOpen} icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
        <Modal w={{base:"90vw"}}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w={"100vw"} m={"auto"} >
           
            <ModalCloseButton />
            <ModalBody>
            <Box padding={"40px"} m={"auto"} >

            <h2 id='hd'>Are you sure you want to Delete?</h2>

            <Flex w={"200px"} m={"auto"}paddingTop={5} justifyContent={"center"} gap={20} alignItems={"center"} >
                <Button padding={"0 40px 0 40px"}>Yes</Button>
                <Button padding={"0 40px 0 40px"} bgColor={"#19ABAD"} borderRadius={"5px"} color={"white"}>No</Button>
            </Flex>
            </Box>
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
}
