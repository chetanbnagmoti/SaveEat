import React, { useState } from 'react'
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
    InputGroup,
    InputRightAddon,
  } from '@chakra-ui/react'
import "./Bulk.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bulk_upload } from '../../redux/Menu/Menu.action';
export default function BulkUpload() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedFile, setSelectedFile] = useState(null);
    const params=useParams()
    const navigate=useNavigate()
const dispatch =useDispatch()
const {message}=useSelector(store=>store.menu_order)

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmit = async () => {
      let data=JSON.parse(localStorage.getItem('data'))
        const formData = new FormData();
        formData.append('brandId', data._id);
        formData.append('menuId', params.id);

        const reader = new FileReader();
    reader.readAsArrayBuffer(selectedFile);
    reader.onload = () => {
      const fileBinary = reader.result;
      //console.log(fileBinary)
      formData.append('file', new Blob([new Uint8Array(fileBinary)], { type: selectedFile.type }));

      dispatch(Bulk_upload(formData));
    };
    };

if(message=="Data imported successfully"){
navigate("/menu")
}


    return (
      <>
    <Button  onClick={onOpen} colorScheme='green' size='md' className='btt'>Bulk Upload</Button>
        {/* <Button onClick={onOpen} colorScheme='green' size='md' className='btt'></Button> */}

        <Modal  size={"lg"}  isOpen={isOpen}  onClose={onClose}>
          <ModalOverlay />
          <ModalContent  m={"auto"} borderRadius={"20px"} boxShadow='lg'  >
            <ModalHeader>
            <FormControl id="Menu name" isRequired>
                <FormLabel >Add Bulk Items</FormLabel>
               <p id='bulk'>Please upload your menu excel here for bulk upload</p>
              </FormControl>  
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody padding={"1em 1em"}  >
            <Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
            <FormControl id="excel" isRequired>
                <FormLabel >Uplaod Excel</FormLabel>
                <InputGroup >
    
            <Input type='file' name='file' id='file'
             accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
            onChange={handleFileChange} placeholder='mysite' />
            <InputRightAddon  children='choose' />
               </InputGroup>
              </FormControl>      
                
      </Flex>
            </ModalBody>
  
            <ModalFooter>
            
              <Button bgColor={"#85D8D9"} onClick={handleSubmit}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
