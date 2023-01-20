import react from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Hide,
  Show,
  SimpleGrid,UnorderedList,ListItem
} from "@chakra-ui/react";
export const BuySell = () => {
  return (
    <>
      <Box width={"80%"} margin={"auto"} >
        <SimpleGrid minChildWidth="150px" spacing="40px">
          <Box height="370px">
            <Image
              width={"100%"}
              height={"25%"}
              src="data:image/jpeg;base64,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"
            />
            <Text
              position={"absolute"}
              top={"63%"}
              left={"20%"}
              color={"white"}
              transform={"translate(-50%, -50%)"}
            >
              Mobile & Tablet
            </Text>
             <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Used Mobile</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"} paddingTop={"10px"} >
                <Box >Tablets</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Accessories</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Wearables</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >View All</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
             
             
          </Box> 
          <Box  height="370px">
            <Image
              width={"100%"}
              height={"25%"}
              src="data:image/jpeg;base64,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"
            />
            <Text
              position={"absolute"}
              top={"63%"}
              left={"50%"}
              color={"white"}
              transform={"translate(-50%, -50%)"}
            >
              Home & LifeStyle
            </Text>
            <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Furniture & Decore</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Spots Hobbies & Fashion</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Luggages</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >FootWear</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >HouseHold Items</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >View All</Box>
                <Box>&gt;</Box>
            </SimpleGrid>

          </Box>
          <Box height="370px">
            <Image
              width={"100%"}
              height={"25%"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoqohWZvP0eBN_l7yi6HyVZ6mHH9fC5h2VQ&usqp=CAU"
            />
            <Text
              position={"absolute"}
              top={"63%"}
              left={"80%"}
              color={"white"}
              transform={"translate(-50%, -50%)"}
            >
              Electronics & Applicance
            </Text>
            <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Laptop & Accessories</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >TV-DVD -multimedia</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Camera Accessories</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Home Applicance</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Kitchen Applicance</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >View All</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
