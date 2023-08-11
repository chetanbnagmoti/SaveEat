import { Box, Button, Flex, Input, Stack, Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Setting.css"
import DayRoutine from './DayRoutine'
import { FaEllipsisV, FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import HolidayModal from './HolidayModal'
import Navbar from '../../component/Navbar/Navbar'
import PreNav from '../../component/Pre-nav/PreNav'

let data=[{id:1,day:"Monday",count:0},{id:2,day:"Tuesday",count:0},{id:3,day:"Wednesday",count:0},{id:4,day:"Thursday",count:0},{id:5,day:"Friday",count:0},
{id:6,day:"Saturday",count:0},{id:7,day:"Sunday",count:0}]



export default function Setting() {
  const [arr,setArr]=useState(data)

  const handleInc=(id)=>{
    setArr(arr.map((el)=>el.id===id?{...el,count:el.count+1}:el))
// console.log(arr)
  }
  const handleDec=(id)=>{
    setArr(arr.map((el)=>el.id===id?{...el,count:el.count-1}:el))
// console.log(arr)
  }

  return (
    <>
     <PreNav/>
      <Navbar/>
    <Box w={{base:"90vw",lg:"70vw"}}  m={"auto"}  display={"flex"} justifyContent={"space-between"} alignItems={"center"}  h={"70px"}>
    
    <Box><h2 id='heading'>Standard Opening Hours</h2></Box>

    <Box  display={"flex"} gap={"5"} >
    <Button bgColor={"#96D780"} size='md' id='btt'>Bulk Upload</Button>
   
   <Button bgColor={"#96D780"} size='md'  id='btt'>Add Individual Product</Button>
    
    </Box>
    
    </Box>
    


    <Box w={{base:"90vw",md:"80vw",lg:"65vw"}}  m={"auto"} borderRadius={"10px"} boxShadow={" 0px 0px 14px rgba(0, 0, 0, 0.1)"} >
<Stack gap={5} pt={5} pb={5} w={"75%"} m={"auto"} >
  {
    arr?.map((el)=>(
      <DayRoutine key={el.id} forDec={id=>handleDec(id)} getId={id=>handleInc(id)} {...el} />
    ))
  }
</Stack>
    </Box>


    <Box w={{base:"90vw",lg:"70vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-start"} alignItems={"center"}  h={"70px"}>
    
    <Box><h2 id='heading'>Exceptions/ Holiday</h2></Box>

    </Box>

<Box w={{base:"90vw",md:"80vw",lg:"65vw"}} pb={5} pt={5} m={"auto"} borderRadius={"10px"} boxShadow={" 0px 0px 14px rgba(0, 0, 0, 0.1)"}>
<Flex justifyContent={"space-between"} w={"75%"} m={"auto"}>
        <h2 id='day'>Saturday<br/>12/12/2022</h2>
        <Flex justifyContent={"center"} gap={10} alignItems={"center"}>
        <Stack  direction='row'> <Switch colorScheme='green' m={"auto"} size='md' paddingTop={"1.5px"} /> <h2 id='swtch'>Open</h2></Stack>
        <Flex gap={3}><Input  size="md" border={"1px solid #D4D4D4"} w={"10vw"} type="time"/><h2 id='swtch'>To</h2><Input border={"1px solid #D4D4D4"} w={"10vw"}  size="md" type="time"/></Flex>
         <HolidayModal/>
        </Flex>
       
    </Flex>
</Box>

    </>
  )
}
