import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import "./Tables.css";
import Pending from "../../Brand Panel/Pending order.svg"
import Accepted from "../../Brand Panel/Accepted order.svg"
import Assigning from "../../Brand Panel/Assigning  a Rider.svg"
import Assigned from "../../Brand Panel/Rider  Assigned.svg.svg"
import Arrived from "../../Brand Panel/Rider  Arrived.svg"
import Pickup from "../../Brand Panel/Rider  Picked up.svg"
import Delivery from "../../Brand Panel/Delivery in  progress.svg"
import Delivered from "../../Brand Panel/Delivered order.svg"
import { useDispatch, useSelector } from "react-redux";
import { Accept, GETDATA, ReadyFood, Reject } from "../../redux/order/order.action";
export default function Tables({data}) {
const dispatch=useDispatch()


const handleAccept=(id)=>{
console.log(id)
dispatch(Accept(id))
  }
  const handleReject=(id)=>{
    console.log(id)
    dispatch(Reject(id))
      }
  const handleReadyToPickup=(id)=>{
    console.log(id)
dispatch(ReadyFood(id))
  }

  return (
   <Box className="table-container">
    <TableContainer borderTop={"none"}>
      <Table  size="sm" variant="striped" colorScheme={"gray"}>
        <TableCaption>
          <Box w={{base:"80vw",lg:"76vw"}} h={{base:"100px",md:"60px",lg:"60px"}}  display={"flex"} flexDirection={{base:"column",md:"column",lg:"row"}} justifyContent={"space-between"} alignItems={"center"} className="info">
                <Box display={"flex"} paddingLeft={"5"}><h5 className='orderdate'>Rider Name : </h5>
                  <h3 className='ordertime'>Sneh Binny</h3></Box>
                <Box display={"flex"}> <h5 className='orderdate'>Rider Mobile Number : </h5>
                  <h3 className='ordertime'>1234567890</h3></Box>
                <Box  display={{base:"flex",md:"none",lg:"none"}}> <h5 className='orderdate'>Customer Name : </h5>
                  <h3 className='ordertime'>sneh Binny</h3></Box>
                <Box display={"flex"} paddingRight={"5"}> <h5 className='orderdate'>Customer Address : </h5>
                  <h3 className='ordertime'>Noon ka  chauraha, Patna city</h3></Box>
          </Box>
          <Box display={"flex"} paddingTop={"3"} paddingBottom={"2"}> <h5 className='orderdate'>Instruction : </h5>
                  <h3 className='ordertime'> lorem hsdah jewhfien ajsfjsf </h3>
          </Box>
          <Box h={"100px"} w={{base:"80vw",lg:"76vw"}} display={"flex"} gap={3} justifyContent={"space-between"}  >

            <Box h={"100%"} w={{lg:"75%"}} >
            <Flex gap="5" justifyContent={"space-around"} wrap={"wrap"} alignItems={"center"}>
<figure>
<Image 
     boxSize='40px'
  src={Pending}
  alt='Dan Abramov'
/>
<figcaption>Pending  <br/> Order</figcaption>

</figure>
<figure>
<Image
m={"auto"}
     boxSize='40px'
  src={Accepted}
  alt='Dan Abramov'
/>
<figcaption>Accepted  <br/> Order</figcaption>

</figure>
<figure>
<Image
m={"auto"}
     boxSize='40px'
  src={Assigning}
  alt='Dan Abramov'
  bgColor={data.status=="Order Ready for pickup"?"teal.200":""}
/>
<figcaption>Assigning  <br/> a Rider</figcaption>

</figure>
<figure>
<Image m={"auto"}
     boxSize='40px'
  src={Assigned}
  alt='Dan Abramov'
/>
<figcaption>Rider  <br/> Assigned</figcaption>

</figure>
<figure>
<Image m={"auto"}
     boxSize='40px'
  src={Arrived}
  alt='Dan Abramov'
/>
<figcaption>Rider  <br/> Arrived</figcaption>

</figure>
<figure>
<Image
m={"auto"}
     boxSize='40px'
  src={Pickup}
  alt='Dan Abramov'
/>
<figcaption>Rider  <br/> Picked up</figcaption>

</figure>
<figure>
<Image
m={"auto"}
     boxSize='40px'
  src={Delivery}
  alt='Dan Abramov'
/>
<figcaption>Delivery in  <br/> Progress</figcaption>

</figure>
<figure>
<Image
m={"auto"}
     boxSize='40px'
  src={Delivered}
  alt='Dan Abramov'
/>
<figcaption>Delivered  <br/> Order</figcaption>

</figure>
</Flex>
            </Box>
            <Box h={"100%"} w={{lg:"20%"}} display={"flex"} justifyContent={"space-around"} alignItems={"flex-end"}>
              {data.status=="Order Ready for pickup"?"":<Flex flexDirection={{base:"column",md:"row"}} gap={4}>
                <Button border={"1px solid #FF8181"} backgroundColor={"#FFE9E9"} onClick={()=>handleReject(data._id)} borderRadius={"10px"}>Reject</Button>
                {data.status=="Accepted"?<Button backgroundColor={"#96D780"} borderRadius={"10px"} onClick={()=>handleReadyToPickup(data._id)}>Ready For Pickup</Button>:<Button backgroundColor={"#96D780"} borderRadius={"10px"} onClick={()=>handleAccept(data._id)}>Accept</Button>}
              </Flex>}
            </Box>

          </Box>
        </TableCaption>
        <Thead  w={"100%"} color={"white"} id="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr>
            <Th id="thds">Item Name</Th>
            <Th id="thds">Choices</Th>
            <Th id="thds">Full Price</Th>
            <Th id="thds">Discount</Th>
            <Th id="thds">Quantity</Th>
            <Th id="thds">Amount</Th>
            <Th id="thds">Tax</Th>
            <Th id="thds">Total</Th>
            <Th id="thds">Store Proceeds</Th>
          </Tr>
        </Thead>
      
        <Tbody >

          {data.orderData?.map((el)=>(
            <Tr key={el._id} display={{base:"none",md:"none",lg:"table"}}>
            <Td id="thd">{el.productData.foodName}</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">{el.productData.price}</Td>
            <Td id="thd">{Math.floor(((el.productData.price-el.productAmount)/el.productData.price)*100)}%</Td>
            <Td id="thd">{el.quantity}</Td>
            <Td id="thd">{el.productAmount}</Td>
            <Td id="thd">{~~el.tax}</Td>
            <Td id="thd">{el.amountWithQuantuty}</Td>
            <Td id="thd">{~~el.withTax}</Td>
          </Tr>
          ))}
          
          <Box display={{base:"block",md:"block",lg:"none"}} width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          {data.orderData?.map((el)=>(
            <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} key={el._id}>
           <Tr  p={2} > <Th id="thds">Item Name</Th>            <Td id="thd">{el.productData.foodName}</Td></Tr>
           <Tr  p={2} > <Th id="thds">Choices</Th>            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td></Tr>
           <Tr   p={2}> <Th id="thds">Full Price</Th>            <Td id="thd">{el.productData.price}</Td></Tr>
           <Tr   p={2}> <Th id="thds">Discount</Th>            <Td id="thd">{Math.floor(((el.productData.price-el.productAmount)/el.productData.price)*100)}%</Td></Tr>
           <Tr   p={2}> <Th id="thds">Quantity</Th>            <Td id="thd">{el.quantity}</Td></Tr>
           <Tr   p={2}> <Th id="thds">Amount</Th>            <Td id="thd">{el.productAmount}</Td></Tr>
           <Tr   p={2}> <Th id="thds">Tax</Th>            <Td id="thd">{~~el.tax}</Td></Tr>
           <Tr   p={2}> <Th id="thds">Totals</Th>            <Td id="thd">{el.amountWithQuantuty}</Td></Tr>
           <Tr   p={2}> <Th id="thds">Store Proceeds</Th>            <Td id="thd">{~~el.withTax}</Td></Tr>
          </Box>

          ))}
         
          </Box>
        
        
        </Tbody>
      </Table>
    </TableContainer></Box>
  );
}
