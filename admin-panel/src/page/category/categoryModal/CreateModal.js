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
    Stack,
  } from '@chakra-ui/react'
import "./CreateModal.css"
export default function CreateModal({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Button  onClick={onOpen} size='md' bgColor={"#96D780"} color={"black"}  id='btt'>{name} Menu Category </Button>

        <Modal size={{lg:"6xl"}}  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w={"80vw"} padding={10}>
          <ModalHeader>{name} Category</ModalHeader>

            <ModalCloseButton padding={"70px"} _hover={"disabledStyles"}/>
            <ModalBody>
           <Stack gap={"5px"}>
           <FormControl id="Menu name" isRequired>
                <FormLabel>Menu Category Name</FormLabel>
                <Input   name="MenuName"  placeholder="Menu name"  required />
              </FormControl> 
              <Flex flexDirection={{base:"column",md:"row",lg:"row"}} gap={10}>
              <FormControl id="Menu name" isRequired>
                <FormLabel>Choose Menu</FormLabel>
                <Input type="number" name="MenuName"  placeholder="Select"  required />
              </FormControl> 
              <FormControl id="Menu name" isRequired>
                <FormLabel>Menu Category order</FormLabel>
                <Input type="number" name="MenuName"  placeholder="order"  required />
              </FormControl> 
              </Flex>
            <FormControl id="Quantity" isRequired>
                <FormLabel>Quantity</FormLabel>
                <TableContainer>
  <Table  size='sm'>
    <Thead>
      <Tr>
        <Th textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={600} fontSize={12}>Select</Th>
        <Th textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={600} fontSize={12}>Item Name</Th>
        <Th textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={600} fontSize={12}>Food Price</Th>
      </Tr>
    </Thead>
    <Tbody h={"200px"} boxShadow= {"6px 3px 12px rgba(0, 0, 0, 0.06)"}>
      {/* <Box w={"100%"} h={"200px"} > */}
        <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      <Tr>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}> <Checkbox size='sm' colorScheme='teal'></Checkbox></Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>Lorem ipsum dolor</Td>
        <Td textAlign={"center"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} fontSize={12}>200</Td>
      </Tr>
      {/* </Box> */}
      </Tbody>
  </Table>
</TableContainer>
              </FormControl> 
            </Stack> 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='teal'>Add Items</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
