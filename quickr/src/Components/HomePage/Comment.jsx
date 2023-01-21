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
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
export const Comment = () => {
  return (
    <Box
      width={"60%"}
      marginLeft={"10%"}
      //   border={"1px solid red"}
      marginBottom={20}
      backgroundColor={"white"}
    >
      <SimpleGrid
        columns={2}
        justifyContent={"space-arround"}
        // border={"1px solid red"}
      >
        <Text fontWeight={"bold"}>
          User Reviews{" "}
          <span style={{ fontWeight: "normal" }}>From our happy customer</span>
        </Text>
        <Button
          _hover={{
            border: "1px solid #008BCF",
            color: "#008BCF",
            backgroundColor: "white",
          }}
          marginLeft={250}
          borderRadius={0}
          color={"white"}
          width={100}
          backgroundColor={"#008BCF"}
        >
          See more
        </Button>
      </SimpleGrid>

      <Box>
        <SimpleGrid columns={2}>
          <Box 
        //   border={"1px solid red"} 
          width={"100%"} padding={5}>
            <Text fontWeight={"bold"}>
              {" "}
              <FaQuoteLeft style={{ color: "Yellow" }} /> Sunil Wada
            </Text>
            <SimpleGrid
              columns={2}
              borderBottom={"1px solid gray"}
              marginBottom={5}
            >
              <Text>Pune</Text>
              <Text>19:40 Sep 19,2016</Text>
            </SimpleGrid>
            <Text>
              This is very best srvices.Intially i always use OLX but when i
              came to know about door step service of quikr i start using it.it
              is very good.Keep up the great work Quikr.{" "}
              <FaQuoteRight style={{ color: "Yellow" }} />
            </Text>
          </Box>
          <Box
        //    border={"1px solid red"} 
           width={"100%"} padding={5}>
            <Text fontWeight={"bold"}>
              {" "}
              <FaQuoteLeft style={{ color: "Yellow" }} /> Sunil Wada
            </Text>
            <SimpleGrid
              columns={2}
              borderBottom={"1px solid gray"}
              marginBottom={5}
            >
              <Text>Pune</Text>
              <Text>19:40 Sep 19,2016</Text>
            </SimpleGrid>
            <Text>
              This is very best srvices.Intially i always use OLX but when i
              came to know about door step service of quikr i start using it.it
              is very good.Keep up the great work Quikr.{" "}
              <FaQuoteRight style={{ color: "Yellow" }} />
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
