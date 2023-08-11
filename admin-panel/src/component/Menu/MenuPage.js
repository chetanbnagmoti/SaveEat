import React, { useEffect } from 'react'
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
    Button
  } from '@chakra-ui/react'
import "./MenuPage.css"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { FaEllipsisV } from 'react-icons/fa';
import MenuTables from './MenuPageTable';
import AddMenuModal from './AddMenuModal';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PreNav from '../Pre-nav/PreNav';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MENU_DATA } from '../../redux/Menu/Menu.action';
export default function MenuPage() {
  const {data,message}=useSelector(store=>store.menu_order)
const dispatch=useDispatch()
console.log(data)

useEffect(()=>{
dispatch(GET_MENU_DATA())
},[])

  return (
   <>
    <PreNav/>
      <Navbar/>

<Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>

<Box  display={"flex"} gap={"5"} >
<Button colorScheme='green' size='md' className='btt'>Add to Discount</Button>
{/* <Button colorScheme='green' size='md' className='btt'>Add New Menu</Button> */}
<AddMenuModal/>
</Box>

</Box>
{
  data?.map((el)=>(
<Accordion paddingBottom={5} key={el._id} w={{base:"90vw",lg:"80vw"}} m={"auto"} allowToggle>

<AccordionItem bgColor={"#19ABAD"} borderRadius={7}>
  <h2>
    <AccordionButton>
    <Stack w={"100%"}>
    <Box w={"99%"} margin={"auto"} textAlign={"start"}>
      <h2 className='order_No'>{el.menuName} : {el.totalItems} Items</h2>
      </Box>
    <Flex  w={"99%"} margin={"auto"}  justifyContent={"space-between"}  >
      <Box w={"auto"} h={"23px"}  marginLeft={"7px"} display={"flex"} justifyContent={"space-between"} gap={"10px"}>
             
          <Box w={"auto"} h={"100%"} >
              <Flex justifyContent={"space-between"} gap={1} >
                <h5  className='order_date'>Created On :</h5>
                <h3 className='order_time'> {new Date(el.createdAt).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}</h3>
              </Flex>
          </Box>
          <Box w={"auto"} h={"100%"} display={{base:"none",md:"block",lg:"block"}}><Flex justifyContent={"space-around"}>
                <h5 className='order_date'>Craeted By : </h5>
                <h3 className='order_time'>Sneh Binny</h3>
              </Flex></Box>       
      </Box>
      </Flex>  
    </Stack>
    <Box  display={"flex"} gap={{base:10,md:10,lg:3}} w={{base:"auto",md:"auto",lg:"auto"}}>
    <Stack w={"7vw"} direction='row'>
        <h2 className='swch'>OFF</h2>
        {el.status=="Inactive"?  
        <Switch colorScheme='green' isReadOnly paddingTop={"1.5px"} />
           :<Switch colorScheme='green' isChecked paddingTop={"1.5px"} />}
         <h2 className='swch'>ON</h2>

</Stack>
    <AccordionIcon display={{base:"none",md:"block",lg:"block"}} color={"white"} />
    <Menu>
  <MenuButton id='mBtn' >
<FaEllipsisV color='white'/>
    </MenuButton>
  <MenuList className='mnu' >
  <Link to={`/editmenu/${el._id}`}>
    <MenuItem icon={<EditIcon />} >
      Edit Menu
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Menu
    </MenuItem>
    
  </MenuList>
</Menu>
    </Box>
    </AccordionButton>
  </h2>




  <AccordionPanel padding={"10px"} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} borderRadius={"0 0 20px 20px"} bgColor={"white"}>
 <MenuTables data={el}/>
  </AccordionPanel>
</AccordionItem>



</Accordion>
  ))
}
    
   
   
   </>
  )
}
