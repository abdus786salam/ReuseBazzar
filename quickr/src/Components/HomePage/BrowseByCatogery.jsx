import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Hide,
  Show,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaFonticons, FaMobileAlt } from "react-icons/fa";
import { MdSmartToy } from "react-icons/md";
import { TbSofa } from "react-icons/tb";
import { GiWashingMachine, GiHomeGarage, GiBlackBook } from "react-icons/gi";
import {AiOutlineSmile} from "react-icons/ai"
export const Browsebycategory = () => {
  return (
    <>
    <Text marginTop={10} fontSize={"20px"} ml={"10%"}>Browse By Category</Text>
      <Box width={"80%"} height={"140px"}fontSize={"15px"} margin={"auto"}   backgroundColor={"white"}>
        <SimpleGrid columns={{base: 2, md: 3, lg: 6}} spacing={10}>
          
          <Box _hover={{background:"#008BCF",color:"white"}}   marginBottom={"5"}marginTop={"5"}height="100px">
            <FaMobileAlt style={{margin:"auto"}} size={"50"}/>
            <Text textAlign={"center"}>Mobiles & tablet</Text>
          </Box>
          <Box  _hover={{background:"#008BCF",color:"white"}} marginBottom={"5"} marginTop={"5"}height="100px">
            <TbSofa style={{margin:"auto"}} size={"50"}/>
            <Text textAlign={"center"}>Furniture & Decor</Text>
          </Box>
          
          <Box  _hover={{background:"#008BCF",color:"white"}} marginBottom={"5"} marginTop={"5"}height="100px">
            <GiWashingMachine style={{margin:"auto"}} size={"50"} />
            <Text textAlign={"center"}>Electronics & Appliances</Text>
          </Box>
          <Box _hover={{background:"#008BCF",color:"white"}} marginBottom={"5"} marginTop={"5"}height="100px">
            <GiBlackBook style={{margin:"auto"}}  size={"50"}/>
            <Text textAlign={"center"}>Sports Hobbies & Fashion</Text>
          </Box>
          <Box  _hover={{background:"#008BCF",color:"white"}} marginBottom={"5"} marginTop={"5"}height="100px">
            <GiHomeGarage style={{margin:"auto"}} margin={"auto"} size={"50"}/>
            <Text textAlign={"center"}>Home & Lifestyle</Text>
          </Box>
          <Box _hover={{background:"#008BCF",color:"white"}}  marginBottom={"5"} marginTop={"5"}height="100px">
            <MdSmartToy style={{margin:"auto"}} size={"50"} />
            {/* <AiOutlineSmile/> */}
            <Text textAlign={"center"}>Kids & Toys</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
