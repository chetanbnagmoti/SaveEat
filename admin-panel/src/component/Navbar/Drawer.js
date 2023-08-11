import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Icon,
    Input,
    useDisclosure,
    Stack,
  } from '@chakra-ui/react'
  import { GiHamburgerMenu } from 'react-icons/gi';
  import { FaUserAlt } from 'react-icons/fa';

export default function HamDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
    <Box ref={btnRef}  onClick={onOpen}>
    <Icon w={8} h={8} color={"#ffff"} mt={"14px"} mr={"25px"} as={GiHamburgerMenu} />
    </Box>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>

        <DrawerBody paddingTop={"50px"}>
<Stack gap={5} >
        <a style={{width:"100%",textAlign:"center"}} href='#'>Home</a>
        <a style={{width:"100%",textAlign:"center"}} href='#'>Menu</a>
        <a style={{width:"100%",textAlign:"center"}} href='#'>Reports</a>
        <a style={{width:"100%",textAlign:"center"}} href='#'>Settings</a>
        <a style={{width:"100%",textAlign:"center"}} href='#'>Help</a>
        <a style={{width:"100%",textAlign:"center"}} href='#' ><FaUserAlt style={{marginLeft:"125px"}}  /></a>

</Stack>
        </DrawerBody>

    
      </DrawerContent>
    </Drawer>
  </>
  )
}
