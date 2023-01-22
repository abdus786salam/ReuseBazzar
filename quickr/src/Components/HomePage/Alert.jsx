import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Hide,
  Show,
  SimpleGrid,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
export const Alert = () => {
  return (
    <Box
      width={"80%"}
      margin={"auto"}
      marginBottom={10}
      backgroundColor={"white"}
      marginTop={10}
      // border={"1px solid red"}
    >
      <Text marginBottom={5}>I want to Receive Alert</Text>
      <SimpleGrid columns={4}>
        <Box>
          <Select borderBottom={"1px solid gray"} placeholder="Category">
            <option>Home & LifeStyle</option>
            <option>Electronics & Applicance</option>
            <option>Mobile & Tablets</option>
          </Select>
        </Box>
        <Box>
          <Select borderBottom={"1px solid gray"} placeholder="Sub Category">
            <option>Laptops- computer</option>
            <option>Tv-Dvd media</option>
            <option>Home Kitchen</option>
            <option>Music</option>
            <option>Toys</option>
            <option>Laptop</option>
            <option>Painting</option>
            <option>Watches</option>
            <option>Video Game</option>
            <option>Washing Machine</option>
          </Select>
        </Box>
        <Box>
          <Input placeholder="Email" type="text" borderBottom={"1px solid gray"} />
        </Box>
        <Box>
          <Input placeholder="Mobile" type="text" borderBottom={"1px solid gray"} />
        </Box>
        <Box>
          <Button _hover={{backgroundColor:"#008BCF"}} marginTop={"8"} backgroundColor={"#008BCF"} color={"white"} width={"200px"} borderRadius={"0"}>Create Alert</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
