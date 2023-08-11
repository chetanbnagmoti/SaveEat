import React, { useState } from 'react'
import "./DayRoutine.css"
import { Box, Flex, Input, Menu, MenuButton, MenuItem, MenuList, Stack, Switch } from '@chakra-ui/react'
import { FaEllipsisV, FaPlusCircle,FaMinusCircle } from 'react-icons/fa';
export default function DayRoutine({id,day,count,getId,forDec}) {
  const [flag,setFlag]=useState(false)

  let arr2=[]
  for(let i=0;i<count;i++){
    arr2.push(i)
  }
  // console.log(count)
  return (
    <>
    
    <Flex justifyContent={"space-between"} w={"100%"} >
        <h2 id='day'>{day}</h2>
        <Flex justifyContent={"center"} gap={10} alignItems={"center"}>
        <Stack  direction='row'> <Switch colorScheme='green' m={"auto"} size='md' paddingTop={"1.5px"} /> <h2 id='swtch'>Open</h2></Stack>
        <Flex gap={3}><Input  size="md" border={"1px solid #D4D4D4"} w={"10vw"} type="time"/><h2 id='swtch'>To</h2><Input border={"1px solid #D4D4D4"} w={"10vw"}  size="md" type="time"/></Flex>
        {flag?<FaMinusCircle onClick={()=>forDec(id)}  color={"red"} size={25}/>:<FaPlusCircle size={25} onClick={()=>getId(id)}  />}
       {/* <Box onClick={()=>console.log("hii")}> <FaEllipsisV /></Box> */}
       <Menu>
   <MenuButton>
   <FaEllipsisV />
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=>setFlag(true)}>Remove</MenuItem>
      </MenuList>
</Menu>
        </Flex>
       
    </Flex>
    {
         arr2.map((el)=>(
            <Flex justifyContent={"center"} gap={10} alignItems={"center"} >
        <Flex gap={3}><Input  size="md" border={"1px solid #D4D4D4"} w={"10vw"} type="time"/><h2 id='swtch'>To</h2><Input border={"1px solid #D4D4D4"} w={"10vw"}  size="md" type="time"/></Flex>
        {flag&&<FaMinusCircle onClick={()=>forDec(id)}  color={"red"} size={25}/>}
       
        </Flex>
          ))
        }
    </>
  )
}
