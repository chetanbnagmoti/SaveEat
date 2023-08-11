import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Stack,
    Flex
  } from '@chakra-ui/react'
import "./orders.css"
import Tables from './Table'
import PreNav from '../Pre-nav/PreNav'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { GETDATA } from '../../redux/order/order.action'

export default function Orders() {
  const dispatch = useDispatch()
const {data,message}=useSelector(store=>store.order)
console.log(data,message)
  useEffect(()=>{
dispatch(GETDATA())
  },[message])
  return (
    <>
      <PreNav/>
      <Navbar/>

{data.orderList?.map((el)=>(
 <Accordion paddingBottom={5} key={el._id}  w={{base:"90vw",lg:"80vw"}} m={"auto"} allowToggle>

 <AccordionItem bgColor={el.status=="Accepted"?"#95CECF":el.status=="Order Ready for pickup"?"#96D780":"#FF8181"} borderRadius={7}>
   <h2>
     <AccordionButton>
      
     <Stack w={"100%"}>
     <Flex w={"99%"} margin={"auto"} justifyContent={"space-between"}>
       <h2 id='order_No'>{el.orderNumber}</h2>
       <h2 id='order_Price'>Rs {el.total}</h2>
       </Flex>
     <Flex  w={"99%"} margin={"auto"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}}  >
       <Box w={"auto"} h={"23px"} marginLeft={"7px"}>
           <Flex w={"auto"} h={"100%"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}} gap={"10px"} >
              
           <Box w={"auto"} h={"100%"} >
               <Flex justifyContent={"space-between"} gap={1}>
                 <h5 id='order_date'>Order Date & Time :</h5>
                 <h3 id='order_time'> {new Date(el.createdAt).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })} </h3>
               </Flex>
           </Box>
           <Box w={"auto"} h={"100%"} display={{base:"none",md:"block",lg:"block"}}><Flex justifyContent={"space-around"} gap={1}>
                 <h5 id='order_date'>Customer Name : </h5>
                 <h3 id='order_time'> { el.userData.name}</h3>
               </Flex></Box>
           
              
              
              </Flex>
       </Box>
       <Box w={"auto"} h={"23px"} marginRight={"-7px"} display={{base:"none",md:"block",lg:"block"}}><h5 id='orderdate'>Delivery Order</h5></Box>
       </Flex>  
     </Stack>
     </AccordionButton>
   </h2>




   <AccordionPanel padding={"10px"}  borderRadius={"0 0 20px 20px"} bgColor={"#FFFFFF"}>
   <Tables data={el}/>
   </AccordionPanel>
 </AccordionItem>


 
</Accordion>

))}
   



</>

  )
}
