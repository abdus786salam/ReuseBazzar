import React from "react";
import {
  Box,
  HStack,
  Image,
  Spacer,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Button,
  Divider,
  VStack,
  Heading,
  Text,
  Center,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import bikeIcon from "./icons/bike.png";
import smartPhone from "./icons/smartphones.png";
import desktop from "./icons/desktop.png";
import { useDispatch, useSelector } from 'react-redux'

const PostAds = () => {
  const dispatch = useDispatch()
  const show =useSelector(store =>store.Post_Ad_Reducer)
  console.log(show);
  // const [isShown, setIsShown] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <Box bg="#fafafa" w="100%" px={{ lg: 200 }} pt="5" pb="10">
      <HStack>
        <Box>
          <Link as={ReactLink} to='/'>
          <Image
            src="https://user-images.githubusercontent.com/101567617/213376453-2316aeb0-5717-44a8-899e-f51ec9bf8adc.png"
            w="200px"
          ></Image>
        </Link>
        </Box>
        <Spacer />
        <HStack>
          <Link
            _hover={{ color: "blue", textDecoration: "underline" }}
            as={ReactLink}
            to="/login"
          >
            Sign in/Register
          </Link>
        </HStack>
        <span>|</span>
        <HStack>
          <Link
            _hover={{ color: "blue", textDecoration: "underline" }}
            as={ReactLink}
            to="/help"
          >
            Help
          </Link>
        </HStack>
        <span>|</span>
        <HStack>
          <Menu>
            <MenuButton
              _hover={{ color: "blue", textDecoration: "underline" }}
              as={Link}
              rightIcon={<ChevronDownIcon />}
            >
              Language
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>हिंदी</MenuItem>
              <MenuItem>اردو</MenuItem>
              <MenuItem>മലയാളം</MenuItem>
              <MenuItem>मराठी</MenuItem>
              <MenuItem>ગુજરાતી</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
      <Flex border="1px solid gray">
        <VStack flex="0.3" spacing="0">
          <Center
            boxSize="100%"
            textAlign="center"
            border="1px solid red"
            h={{ base: "10", lg: "20" }}
          >
            <Text as="b">Select a category</Text>
          </Center>
          {/*------------ categories button ----------*/}
          <HStack
            onMouseEnter={() => dispatch({type:"bikesAndCars"})}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            border="1px solid red"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center border="1px solid red" w="30%">
              <Image src={bikeIcon} boxSize={12} />
            </Center>
            <Text>Cars & bikes</Text>
          </HStack>
          <HStack
            onMouseEnter={() => dispatch({type:"mobileAndTablets"})}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            border="1px solid red"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center border="1px solid red" w="30%">
              <Image src={smartPhone} boxSize={12} />
            </Center>
            <Text>Mobiles & tablets</Text>
          </HStack>
          <HStack
            onMouseEnter={() => dispatch({type:"eletronicsAndHome"})}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            border="1px solid red"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center border="1px solid red" w="30%">
              <Image src={desktop} boxSize={12} />
            </Center>
            <Text>Electronics & Appliances</Text>
          </HStack>
        </VStack>
        {/*------------ categories list forms ----------*/}
        <VStack flex="0.7" bg="white" p={7} alignItems="left">
          <Text fontSize={"3xl"}>Post Free Ad</Text>
           {/*------------ sub categories list for bike and cars ----------*/}
          <Box
            
            // onMouseLeave={() => dispatch({type:"bikesAndCars"})}
            display={show.isCatAndBike? "block" : "none"}
          >
            <Text as="b">Select sub category</Text>
           
            <Box mt={5}>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Bikes & Scooters
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Cars
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Commercial Vehicles
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Spare Parts - Accessories
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Other Vehicles
              </Link>
            </Box>
            
          </Box>
             {/*------------ sub categories list for mobiles and tablets ----------*/}
             <Box
            
            // onMouseLeave={() => dispatch({type:"mobileAndTablets"})}
            display={show.isMobile ? "block" : "none"}
          >
            <Text as="b">Select sub category</Text>
             <Box mt={5}>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Mobile Phones
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Accessories
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Tablets
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Wearables
              </Link>
            </Box>
            </Box>
            {/*------------ sub categories list for Electronics & Appliances ----------*/}
            <Box
            
            // onMouseLeave={() => dispatch({type:"eletronicsAndHome"})}
            display={show.isElectronics ? "block" : "none"}
          >
            <Text as="b">Select sub category</Text>
             <Box mt={5}>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
               Refrigerators / Fridge
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Washing Machines
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
               Laptops
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Air Conditioners / AC
              </Link>
            </Box>
            </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default PostAds;
