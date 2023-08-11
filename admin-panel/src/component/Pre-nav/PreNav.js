import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";

function PreNav() {
  const [value,setValue]=useState("")
  return (
    <Flex
      bgColor={"#96D780"}
      w={"100vw"}
      h={"40px"}
      justifyContent={{ base: "center", md: "center", lg: "space-between" }}
    >
      <Box padding={"6px 60px"}>
        <h2
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          Items on DISCOUNT : 0
        </h2>
      </Box>
      <Box
        padding={"6px 60px"}
        display={{ base: "none", md: "block", lg: "block" }}
      >
        <InputGroup>
        <form onSubmit={(e)=>{e.preventDefault();
        console.log(value)}}>
          <Input
            h={"27px"}
            w={"35vw"}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            bgColor={"white"}
            placeholder="Add items on discount"
          />
          </form>
          <InputRightElement
            children={
              <Search2Icon
              cursor={"pointer"}
                marginBottom={"10px"}
                onClick={() => {
                  console.log(value);
                }}
              />
            }
          />
        </InputGroup>
      </Box>
    </Flex>
  );
}

export default PreNav;
