import React, { useState } from 'react'
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
import { TriangleDownIcon } from '@chakra-ui/icons'
import { FaPlusCircle } from 'react-icons/fa'
import Select from "react-select";

const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];
export default function AddChoice() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count,setCount]=useState(4)
    const [selectedOptions, setSelectedOptions] = useState();
    function handleSelect(data) {
        setSelectedOptions(data);
      }
    return (
      <>
    <Button bgColor={"#96D780"} onClick={onOpen} size='md' className='btt'>Add Item to a Choice</Button>
        {/* <Button onClick={onOpen} bgColor={"#96D780"} size='md' id='btt'>Add a New Outlet</Button> */}

  
        <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent padding={5}>
            <ModalHeader><h2 id='ModalHdr'>Add an Item to a Choice</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack >
            <FormControl id="cuisine" isRequired>
                <FormLabel>Choice Name</FormLabel>
                <InputGroup mb={5}>
                  <Input placeholder='Enter amount' />
                 <InputRightElement>
                  <TriangleDownIcon />
                 </InputRightElement>
                </InputGroup>         
                        <Stack>
                            {[...Array(count)]?.map((_, index)=>(
                // <Input  key={index} placeholder='onion' required />
<Select
key={index}
  options={optionList}
  value={selectedOptions}
  onChange={handleSelect}
/>
                            ))}
              
             <Flex gap={1} ><Input   placeholder='potato' required /> <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"7%"}><FaPlusCircle size={25} onClick={()=>setCount(count+1)} /></Box>
</Flex>

                </Stack></FormControl>
              
             
             
             
               
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
