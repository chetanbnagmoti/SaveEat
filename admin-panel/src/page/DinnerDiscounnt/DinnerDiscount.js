import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Stack,
    Flex,
    Switch,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
import "./DinnerDiscount.css"
import { CopyIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { FaEllipsisV } from 'react-icons/fa';
import DinnerTable from './DinnerTable';
import DltModal from './DltModal';
import DuplModal from './DuplModal';
export default function DinnerDiscount() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [flag,setFlag]=useState(false)

  return (
    <>
    
    <Accordion defaultIndex={[0]} w={{base:"90vw",lg:"80vw"}} m={"auto"} allowToggle>

<AccordionItem bgColor={"#19ABAD"} borderRadius={7}>
  <h2>
    <AccordionButton>
    <Stack w={"100%"}>
    <Box w={"99%"} margin={"auto"} textAlign={"start"}>
      <h2 className='order_No'>Dinner Discount Menu : 30 Items</h2>
      </Box>
    <Flex  w={"99%"} margin={"auto"}  justifyContent={"space-between"}  >
      <Box w={"auto"} h={"23px"}  marginLeft={"7px"} display={"flex"} justifyContent={"space-between"} gap={"10px"}>
             
          <Box w={"auto"} h={"100%"} >
              <Flex justifyContent={"space-between"}  >
                <h5  className='order_date'>Timer  :</h5>
                <h3 className='order_time'>2d 23h 40m 60s</h3>
              </Flex>
          </Box>
          {/* <Box w={"auto"} h={"100%"} display={{base:"none",md:"block",lg:"block"}}><Flex justifyContent={"space-around"}>
                <h5 className='order_date'>Craeted By : </h5>
                <h3 className='order_time'>Sneh Binny</h3>
              </Flex></Box>        */}
      </Box>
      </Flex>  
    </Stack>
    <Box  display={"flex"} gap={{base:2,md:5,lg:5}} w={{base:"33vw",md:"auto",lg:"auto"}}>
    <Stack direction='row'>
        <h2 className='swtch'>20% OFF</h2>
    </Stack>
    <AccordionIcon display={{base:"none",md:"block",lg:"block"}} color={"white"} />
    <Menu isOpen={isOpen} >
  <MenuButton id='mBtn' onMouseEnter={onOpen}
            onMouseLeave={()=>setTimeout(onClose,1000)}>
<FaEllipsisV color='white'/>
    </MenuButton>
  <MenuList className='mnu' onMouseEnter={onOpen} onMouseLeave={onClose}>
    <MenuItem icon={<EditIcon />} onClick={()=>setFlag(true)}>
      Edit Menu
    </MenuItem>
    {/* <MenuItem icon={<DeleteIcon />} >
      Delete Menu
    </MenuItem> */}
    <DltModal/>
    <DuplModal/>
  </MenuList>
</Menu>
    </Box>
    </AccordionButton>
  </h2>




  <AccordionPanel padding={"10px"} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} borderRadius={"0 0 20px 20px"} bgColor={"white"}>
       <DinnerTable flag={flag}/>
  </AccordionPanel>
</AccordionItem>



</Accordion>
   
    
    </>
  )
}
