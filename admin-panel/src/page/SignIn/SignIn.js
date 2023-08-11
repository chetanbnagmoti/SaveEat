import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';


export const SignIn = () => {
    const [loginData,setLoginData]=useState({})
    const navigate=useNavigate()
const {isAuth}=useSelector(store=>store.auth)
    const dispatch = useDispatch()
 
    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({...loginData,[name]:value})
        }

    const handleSubmit=(e)=>{
        e.preventDefault()
// console.log(loginData)
      dispatch(login(loginData))
  
    };
   useEffect(()=>{
    if(isAuth){
      console.log(isAuth)
        navigate("/home")
    }
   },[isAuth])


  return (
    <Box>
    <Flex h={"100vh"}  flexDirection={"column"} gap={3} align={'center'} justify={'center'} bg={useColorModeValue("#85d8d9")}>
    <Stack align={'center'} >
      <Heading fontSize={'4xl'}>LogIn</Heading>
    </Stack>
  <Stack spacing={4} rounded={'lg'} w={"45vw"} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={{base:5,md:10,lg:20}}>
    
    <Heading fontSize={'4xl'}>SaveEat For Business</Heading>

      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" name='email'  onChange={handleChange}/>
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" name='password' onChange={handleChange} />
        </FormControl>
        <Stack spacing={10}> 
          <Button onClick={handleSubmit}  bg={'#19ABAD'}  color={'white'}  _hover={{    bg: "#85d8d9" }}>
            Login
          </Button>
        </Stack>
        <Box d="flex" ><span>Don't have account ? </span><Link to="">SignUp</Link></Box>
      </Stack>
  </Stack>
</Flex>
</Box>
  )
}