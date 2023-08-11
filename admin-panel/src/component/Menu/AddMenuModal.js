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
  } from '@chakra-ui/react'
import "./AddMenuModal.css"
export default function AddMenuModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Button onClick={onOpen} colorScheme='green' size='md' className='btt'>Add New Menu</Button>

        <Modal w={{base:"90vw"}}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w={"100vw"} m={"auto"} >
            <ModalHeader>
            <FormControl id="Menu name" isRequired>
                <FormLabel>Menu Name</FormLabel>
                <Input type="text" name="MenuName"  placeholder="Menu name"  required />
              </FormControl>  
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl id="Quantity" isRequired>
                <FormLabel>Quantity</FormLabel>
                <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th id='thds'>Select</Th>
        <Th id='thds'>Item</Th>
        <Th id='thds'>Food Price</Th>
      </Tr>
    </Thead>
    <Tbody h={"100px"}boxShadow= {"6px 3px 12px rgba(0, 0, 0, 0.06)"}>
      {/* <Box w={"100%"} h={"200px"} > */}
        <Tr>
        <Td id='thd'> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td id='thd'>Lorem ipsum dolor</Td>
        <Td id='thd'>200</Td>
      </Tr>
      <Tr>
        <Td id='thd'> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td id='thd'>Lorem ipsum dolor</Td>
        <Td id='thd'>200</Td>
      </Tr>
      <Tr>
        <Td id='thd'> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td id='thd'>Lorem ipsum dolor</Td>
        <Td id='thd'>200</Td>
      </Tr>
      <Tr>
        <Td id='thd'> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td id='thd'>Lorem ipsum dolor</Td>
        <Td id='thd'>200</Td>
      </Tr>
      <Tr>
        <Td id='thd'> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td id='thd'>Lorem ipsum dolor</Td>
        <Td id='thd'>200</Td>
      </Tr>
      <Tr>
        <Td id='thd'> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td id='thd'>Lorem ipsum dolor</Td>
        <Td id='thd'>200</Td>
      </Tr>
      {/* </Box> */}
      </Tbody>
  </Table>
</TableContainer>
              </FormControl>  
            </ModalBody>
  
            <ModalFooter>
            <Flex flexDirection={{base:"column"}} mr={"120px"}> <h5  className='Number'>Number of Items :</h5>
                <h3 className='items'> 30</h3></Flex>
              <Button colorScheme='green'>Create Menu</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
