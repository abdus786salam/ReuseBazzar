import React from "react";
import {
  Box,
  HStack,
  Image,
  Link,
  VStack,
  Text,
  Center,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import bikeIcon from "./icons/car1.png";
import smartPhone from "./icons/smartphones.png";
import desktop from "./icons/desktop.png";
import realEstate from "./icons/real-estate.png";
import homeAndLife from "./icons/home-a.png";
import suitcase from "./icons/suitcase.png";
import fullTimeJob from "./icons/full-time-job.png";
import internship from "./icons/internship.png";
import homeWork from "./icons/work-from-home.png";
import partTime from "./icons/part-time-job.png";
import workAbroad from "./icons/work-abroad.png";
import { useDispatch, useSelector } from "react-redux";
import FormHeaders from "../../components/formComponents/FormHeaders";

const PostAds = () => {
  const dispatch = useDispatch();
  const show = useSelector((store) => store.Post_Ad_Reducer);

  return (
    <Box bg="#fafafa" w="100%" px={{ lg: 200 }} pt="5" pb="10">
      <FormHeaders />
      <Flex border="1px solid gray">
        <VStack borderRight="1px solid gray" flex="0.3" spacing="0">
          <Center
            boxSize="100%"
            textAlign="center"
            h={{ base: "10", lg: "20" }}
          >
            <Text as="b">Select a category</Text>
          </Center>
          {/*------------ categories button ----------*/}
          <HStack
            onMouseEnter={() => dispatch({ type: "bikesAndCars" })}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            borderTop="1px solid gray"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center w="30%">
              <Image src={bikeIcon} boxSize={{base:8,lg:12}} />
            </Center>
            <Text>Cars & bikes</Text>
          </HStack>
          <HStack
            onMouseEnter={() => dispatch({ type: "mobileAndTablets" })}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            borderTop="1px solid gray"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center w="30%">
              <Image src={smartPhone} boxSize={{base:8,lg:12}} />
            </Center>
            <Text>Mobiles & tablets</Text>
          </HStack>
          <HStack
            onMouseEnter={() => dispatch({ type: "eletronicsAndHome" })}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            borderTop="1px solid gray"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center w="30%">
              <Image src={desktop} boxSize={{base:8,lg:12}} />
            </Center>
            <Text>Electronics & Appliances</Text>
          </HStack>
          <HStack
            onMouseEnter={() => dispatch({ type: "realEstate" })}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            borderTop="1px solid gray"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center w="30%">
              <Image src={realEstate} boxSize={{base:8,lg:12}} />
            </Center>
            <Text>Real Estate</Text>
          </HStack>
          <HStack
            onMouseEnter={() => dispatch({ type: "homeAndLifestyle" })}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            borderTop="1px solid gray"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center w="30%">
              <Image src={homeAndLife} boxSize={{base:8,lg:12}} />
            </Center>
            <Text>Home & Lifestyle</Text>
          </HStack>
          <HStack
            onMouseEnter={() => dispatch({ type: "jobs" })}
            boxSize="100%"
            cursor="pointer"
            textAlign="center"
            borderTop="1px solid gray"
            h={{ base: "10", lg: "20" }}
            _hover={{ bg: "#3ab64a", color: "white" }}
          >
            <Center w="30%">
              <Image src={suitcase} boxSize={{base:8,lg:12}} />
            </Center>
            <Text>Job</Text>
          </HStack>
        </VStack>
        {/*------------ categories list forms ----------*/}
        <VStack flex="0.7" bg="white" p={7} alignItems="left">
          <Text fontSize={"3xl"}>Post Free Ad</Text>
          {/*------------ sub categories list for bike and cars ----------*/}
          <Box display={show.isCatAndBike ? "block" : "none"}>
            <Text as="b">Select sub category</Text>

            <Box mt={5}>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="/postads/bike"
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
          <Box display={show.isMobile ? "block" : "none"}>
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
          <Box display={show.isElectronics ? "block" : "none"}>
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
          {/*------------ sub categories list for Electronics & Appliances ----------*/}
          <Box display={show.isRealEstate ? "block" : "none"}>
            <Text as="b">Select sub category</Text>
            <Box mt={5}>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Commercial Property for Lease
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Commercial Property for Rent
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Commercial Property for Sale
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Coworking Spaces
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Flatmates
              </Link>
            </Box>
          </Box>
          {/*------------ sub categories list for Furniture for Home & Office ----------*/}
          <Box display={show.isHomeLife ? "block" : "none"}>
            <Text as="b">Select sub category</Text>
            <Box mt={5}>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Furniture for Home & Office
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Home Decor - Furnishings
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Household
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Kitchenware
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Antiques - Handicrafts Paintings
              </Link>
            </Box>
            <Box>
              <Link
                color="blue"
                _hover={{ textDecoration: "underline" }}
                as={ReactLink}
                to="#"
              >
                Paintings
              </Link>
            </Box>
          </Box>
          {/*------------ sub categories list for job ----------*/}
          <Box display={show.isJob ? "block" : "none"}>
          <Text as="b">Select sub category</Text>
          <SimpleGrid
            mt={5}
            spacingY={10}
            columns={3}
          >
            <Center h='150' >
                <VStack>
              <Link as={ReactLink} to="#">
                  <Image src={fullTimeJob} boxSize={12} />
                  <Text>Full Time Jobs</Text>
              </Link>
                </VStack>
            </Center>
            <Center borderX="1px solid gray" h='150' >
                <VStack>
              <Link as={ReactLink} to="#">
                  <Image src={homeWork} boxSize={12} />
                  <Text>Work From Home</Text>
              </Link>
                </VStack>
            </Center>
            <Center h='150' >
                <VStack>
              <Link as={ReactLink} to="#">
                  <Image src={partTime} boxSize={12} />
                  <Text>Part Time Jobs</Text>
              </Link>
                </VStack>
            </Center>
            <Center h='150' >
                <VStack>
              <Link as={ReactLink} to="#">
                  <Image src={internship} boxSize={12} />
                  <Text>Internships</Text>
              </Link>
                </VStack>
            </Center>
            <Center borderLeft='1px solid gray' h='150' >
                <VStack>
              <Link as={ReactLink} to="#">
                  <Image src={workAbroad} boxSize={12} />
                  <Text>Work Abroad</Text>
              </Link>
                </VStack>
            </Center>
          </SimpleGrid>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default PostAds;
