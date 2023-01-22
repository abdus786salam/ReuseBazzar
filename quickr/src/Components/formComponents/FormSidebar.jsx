import React from "react";
import { Box, Image, VStack, Text } from "@chakra-ui/react";
import bikeIcon from "../../pages/postProducts/icons/car1.png";
import smartPhone from "../../pages/postProducts/icons/smartphones.png";
import desktop from "../../pages/postProducts/icons/desktop.png";
import realEstate from "../../pages/postProducts/icons/real-estate.png";
import homeAndLife from "../../pages/postProducts/icons/home-a.png";
import suitcase from "../../pages/postProducts/icons/suitcase.png";
import { useNavigate } from "react-router-dom";

const FormSidebar = () => {
  const navigate = useNavigate();
  return (
    <VStack borderRight="1px solid lightgray" flex="0.12" spacing="0">
      <Box p={12}></Box>
      {/*------------ categories button ----------*/}
      <VStack
        onClick={() => navigate("/postads")}
        boxSize="100%"
        cursor="pointer"
        textAlign="center"
        borderTop="1px solid lightgray"
        p={4}
        _hover={{ bg: "#3ab64a", color: "white" }}
      >
          <Image src={bikeIcon} boxSize={{ base: 8, lg: 12 }} />
        <Text fontSize='xs'>Cars & bikes</Text>
      </VStack>
      <VStack
        onClick={() => navigate("/postads")}
        boxSize="100%"
        cursor="pointer"
        textAlign="center"
        borderTop="1px solid lightgray"
        p={4}
        _hover={{ bg: "#3ab64a", color: "white" }}
      >
       
          <Image src={smartPhone} boxSize={{ base: 8, lg: 12 }} />
        <Text fontSize='xs'>Mobiles & tablets</Text>
      </VStack>
      <VStack
        onClick={() => navigate("/postads")}
        boxSize="100%"
        cursor="pointer"
        textAlign="center"
        borderTop="1px solid lightgray"
        p={4}
        _hover={{ bg: "#3ab64a", color: "white" }}
      >
        
          <Image src={desktop} boxSize={{ base: 8, lg: 10 }} />
        <Text fontSize={'xs'}>Electronics & Appliances</Text>
      </VStack>
      <VStack
        onClick={() => navigate("/postads")}
        boxSize="100%"
        cursor="pointer"
        textAlign="center"
        borderTop="1px solid lightgray"
        p={4}
        _hover={{ bg: "#3ab64a", color: "white" }}
      >
   
          <Image src={realEstate} boxSize={{ base: 8, lg: 12 }} />
        <Text fontSize={'xs'}>Real Estate</Text>
      </VStack>
      <VStack
        onClick={() => navigate("/postads")}
        boxSize="100%"
        cursor="pointer"
        textAlign="center"
        borderTop="1px solid lightgray"
        p={4}
        _hover={{ bg: "#3ab64a", color: "white" }}
      >
      
          <Image src={homeAndLife} boxSize={{ base: 8, lg: 12 }} />
        <Text fontSize={'xs'} >Home & Lifestyle</Text>
      </VStack>
      <VStack
        onClick={() => navigate("/postads")}
        boxSize="100%"
        cursor="pointer"
        textAlign="center"
        borderTop="1px solid lightgray"
        p={4}
        _hover={{ bg: "#3ab64a", color: "white" }}
      >
   
          <Image src={suitcase} boxSize={{ base: 8, lg: 12 }} />
        <Text fontSize={'xs'} >Job</Text>
      </VStack>
    </VStack>
  );
};

export default FormSidebar;
