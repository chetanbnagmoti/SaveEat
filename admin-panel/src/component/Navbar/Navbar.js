import { Box, Flex, Icon, Image,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Button, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import vector from "../../Vector.png"
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import HamDrawer from './Drawer';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const {data}=useSelector(store=>store.auth)
  const navigate=useNavigate()

 

  return (
    <>
    <Flex  w={"100vw"} h={"62px"} bgColor={"#19ABAD"} justifyContent={"space-between"}>
    <Box w={"120px"} ml={"3vw"}><Image p={"22px"} w={"100%"} h={"100%"} src={vector} alt='saveEat' /></Box>
    <Box w={"120px"} display={{ base: "block", md: "block", lg: "none" }}><h2 className='outlet'>{data?data.empNumber:"Rs1019"}</h2></Box>
    <Box w={"55vw"}  display={{ base: "none", md: "none", lg: "block" }}>
        <nav>
        <h1 onClick={()=>navigate("/home")}>Home</h1>
        {/* <h1 onClick={()=>navigate("/menu")}>Menu</h1> */}
        <h1><Menu pl={9} >
  {({ isOpen }) => (
    <>
    {isOpen?
    <MenuButton bgColor={"#19ABAD"}  variant={"unstyled"} display={"flex"} pb={4}  isActive={isOpen} as={Button} rightIcon={<ChevronUpIcon  />}>
        Pick an Option
      </MenuButton>
      :<MenuButton bgColor={"#19ABAD"} isActive={isOpen} display={"flex"} pb={4} pl={9} variant={"unstyled"} as={Button} rightIcon={<ChevronDownIcon  boxSize={5} />}>
        Menu
      </MenuButton>}
      <MenuList minW="0" w={"150px"} >
        <MenuItem _hover={{color:"#805ad5"}} pl={5} color={"black"} onClick={()=>navigate("/menu")}>Menu</MenuItem>
        <Divider/>
         <MenuItem _hover={{color:"#805ad5"}} pl={5} color={"black"} onClick={()=>navigate("/category")}>Category</MenuItem>
         <Divider/>
         <MenuItem _hover={{color:"#805ad5"}} pl={5} color={"black"} onClick={()=>navigate("/choice")}>Choice</MenuItem>
      </MenuList>
    </>
  )}
</Menu></h1>

        <h1 >Reports</h1>
        {/* <a href='#'>Settings</a> */}
        <h1 ><Menu pl={9} >
  {({ isOpen }) => (
    <>
    {isOpen?
    <MenuButton bgColor={"#19ABAD"}  variant={"unstyled"} display={"flex"} pb={4}  isActive={isOpen} as={Button} rightIcon={<ChevronUpIcon  />}>
        Pick an Option
      </MenuButton>
      :<MenuButton bgColor={"#19ABAD"} isActive={isOpen} display={"flex"} pb={4} pl={9} variant={"unstyled"} as={Button} rightIcon={<ChevronDownIcon  boxSize={5} />}>
        Settings
      </MenuButton>}
      <MenuList minW="0" w={"150px"} >
        <MenuItem _hover={{color:"#805ad5"}} pl={5} color={"black"} onClick={()=>navigate("/setting")}>Setting I</MenuItem>
        <Divider/>
         <MenuItem _hover={{color:"#805ad5"}} pl={5} color={"black"} onClick={()=>navigate("/brand_setting")}>Setting II</MenuItem>
      </MenuList>
    </>
  )}
</Menu></h1>

        <h1 onClick={()=>navigate("/discount")}>Discount</h1>
        <h1 href='#' ><FaUserAlt  /></h1>
        </nav>
        
        </Box>
    <Box w={"120px"} mr={"1vw"} display={{ base: "none", md: "none", lg: "block" }}><h2 className='outlet'>{data.empNumber}</h2></Box>
    <Box display={{ base: "block", md: "block", lg: "none" }}><HamDrawer/></Box>
    </Flex>

    <br/>    <br/>

    </>
  )
}

export default Navbar