import react from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  Grid,
  GridItem,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faGooglePlus,
  faTwitter,
  faYoutube,
  faApple,
  faGooglePlay,
  faWindows,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import MediaQuery from "react-responsive";
export const Footer = () => {
  return (
    <Box
      backgroundColor={"white"}
      maxW={"80%"}
      margin={"auto"}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box display={"flex"}>
        <MediaQuery minWidth={1200} maxWidth={2000}>
          <Container fontSize={"13px"} maxW={"6xl"}>
            <Box>
              <Grid templateColumns="repeat(7, 1fr)" gap={"-10"}>
                <GridItem w="80%" textAlign={"left"} h="10">
                  About us
                </GridItem>
                <GridItem w="80%" textAlign={"left"} h="10">
                  Contact us
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Careers
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Quikr Videos
                </GridItem>
                <GridItem w="150%" textAlign={"left"} h="10">
                  Advertise With Us
                </GridItem>
                <GridItem w="100%" textAlign={"center"} h="10">
                  Blog
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Help
                </GridItem>
              </Grid>
              <Text fontSize={"12px"} textAlign={"left"}>
                Widely known as India’s no. 1 online classifieds platform, Quikr
                is all about you. Our aim is to empower every person in the
                country to independently connect with buyers and sellers online.
                We care about you — and the transactions that bring you closer
                to your dreams. Want to buy your first car? We’re here for you.
                Want to sell commercial property to buy your dream home? We’re
                here for you. Whatever job you’ve got, we promise to get it
                done.
              </Text>
              <Box
                bg={useColorModeValue("gray.50", "gray.900")}
                marginTop={"2em"}
                marginBottom={"2em"}
                textAlign={"left"}
              >
                <Text>
                  At Quikr, you can buy, sell or rent anything you can think of.{" "}
                  <Button backgroundColor={"yellow"}>Post Free Add</Button>
                </Text>
              </Box>
              <Grid templateColumns="repeat(7, 1fr)" gap={"-10"}>
                <GridItem w="140%" textAlign={"left"} h="10">
                  Listing Policy
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Terms of Use
                </GridItem>
                <GridItem g={"1"} w="100%" textAlign={"left"} h="10">
                  Privacy Policy
                </GridItem>
                <GridItem marginLeft={"0"} w="150%" textAlign={"left"} h="10">
                  Quikr Mobiles Policy
                </GridItem>
                <GridItem marginLeft={"10"} w="150%" textAlign={"left"} h="10">
                  Quikr Brand Guidelines
                </GridItem>

                <GridItem></GridItem>
                <GridItem marginLeft={"-1"} w="60%" textAlign={"left"} h="10">
                  News
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(7, 1fr)" gap={"2"}>
                <Text textAlign={"left"} width={"90px"}>
                  {" "}
                  Other Brands:{" "}
                </Text>

                <GridItem w="100%" textAlign={"left"} h="10">
                  Commonfloor
                </GridItem>
                <GridItem w="80%" textAlign={"left"} h="10">
                  Hiree
                </GridItem>
                <GridItem ml={"-10"} w="80%" textAlign={"left"} h="10">
                  Dazzlr
                </GridItem>
                <GridItem ml={"-20"} w="130%" textAlign={"center"} h="10">
                  Realty Compass
                </GridItem>
                <GridItem marginLeft={"-10"} w="60%" textAlign={"left"} h="10">
                  Zefo
                </GridItem>
              </Grid>
            </Box>
          </Container>
        </MediaQuery>

        <MediaQuery minWidth={800} maxWidth={1200}>
          <Container fontSize={"13px"} maxW={"6xl"}>
            <Box>
              <Grid templateColumns="repeat(4, 1fr)" gap={"-10"}>
                <GridItem w="80%" textAlign={"left"} h="10">
                  About us
                </GridItem>
                <GridItem w="80%" textAlign={"left"} h="10">
                  Contact us
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Careers
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Quikr Videos
                </GridItem>
                <GridItem w="150%" textAlign={"left"} h="10">
                  Advertise With Us
                </GridItem>
                <GridItem w="100%" textAlign={"center"} h="10">
                  Blog
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Help
                </GridItem>
              </Grid>
              <Text fontSize={"12px"} textAlign={"left"}>
                Widely known as India’s no. 1 online classifieds platform, Quikr
                is all about you. Our aim is to empower every person in the
                country to independently connect with buyers and sellers online.
                We care about you — and the transactions that bring you closer
                to your dreams. Want to buy your first car? We’re here for you.
                Want to sell commercial property to buy your dream home? We’re
                here for you. Whatever job you’ve got, we promise to get it
                done.
              </Text>
              <Box
                bg={useColorModeValue("gray.50", "gray.900")}
                marginTop={"2em"}
                marginBottom={"2em"}
                textAlign={"left"}
              >
                <Text>
                  At Quikr, you can buy, sell or rent anything you can think of.{" "}
                  <Button backgroundColor={"yellow"}>Post Free Add</Button>
                </Text>
              </Box>
              <Grid templateColumns="repeat(3, 1fr)" gap={"-10"}>
                <GridItem w="140%" textAlign={"left"} h="10">
                  Listing Policy
                </GridItem>
                <GridItem w="100%" textAlign={"left"} h="10">
                  Terms of Use
                </GridItem>
                <GridItem g={"1"} w="100%" textAlign={"left"} h="10">
                  Privacy Policy
                </GridItem>
                <GridItem marginLeft={"0"} w="150%" textAlign={"left"} h="10">
                  Quikr Mobiles Policy
                </GridItem>
                <GridItem marginLeft={"10"} w="150%" textAlign={"left"} h="10">
                  Quikr Brand Guidelines
                </GridItem>

                <GridItem></GridItem>
                <GridItem marginLeft={"-1"} w="60%" textAlign={"left"} h="10">
                  News
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(3, 1fr)" gap={"1"}>
                <Text textAlign={"left"} width={"90px"}>
                  {" "}
                  Other Brands:{" "}
                </Text>

                <GridItem w="100%" textAlign={"left"} h="10">
                  Commonfloor
                </GridItem>
                <GridItem w="80%" textAlign={"left"} h="10">
                  Hiree
                </GridItem>
                <GridItem ml={"-0"} w="80%" textAlign={"left"} h="10">
                  Dazzlr
                </GridItem>
                <GridItem ml={"-20"} w="130%" textAlign={"center"} h="10">
                  Realty Compass
                </GridItem>
                <GridItem marginLeft={"-10"} w="60%" textAlign={"left"} h="10">
                  Zefo
                </GridItem>
              </Grid>
            </Box>
          </Container>
        </MediaQuery>

        <Container borderLeft={"1px solid grey"} fontSize={"13px"} as={Stack}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            // border={"1px solid green"}
            spacing={0}
          >
            <Stack align={"flex-start"}>
              <Link href={"#"}>Ahmedabad</Link>
              <Link href={"#"}>Bangalore</Link>
              <Link href={"#"}>Chandigarh</Link>
              <Link href={"#"}>Chennai</Link>
              <Link href={"#"}>Coimbatore</Link>
              <Link href={"#"}>All Cities</Link>
            </Stack>
            <Stack align={"flex-start"}>
              {/* <ListHeader>Company</ListHeader> */}
              <Link href={"#"}>Delhi</Link>
              <Link href={"#"}>Gurgaon</Link>
              <Link href={"#"}>Hyderabad</Link>
              <Link href={"#"}>Jaipur</Link>
              <Link href={"#"}>Kochi</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}>Kolkata</Link>
              <Link href={"#"}>Lucknow</Link>
              <Link href={"#"}>Mumbai</Link>
              <Link href={"#"}>Pune</Link>
              <Link href={"#"}>Trivandrum</Link>
            </Stack>
          </SimpleGrid>
          <SimpleGrid>
            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="100%" textAlign={"left"} h="10">
                Follow Us
              </GridItem>
              <GridItem w="50%" ml={"2em"} textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faFacebookF} />
              </GridItem>
              <GridItem w="50%" textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faLinkedin} />
              </GridItem>
              <GridItem ml={"-2em"} w="50%" textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faGooglePlus} />
              </GridItem>
              <GridItem ml={"-4em"} w="50%" textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faTelegram} />
              </GridItem>
              <GridItem ml={"-6em"} w="50%" textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faYoutube} />
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(7, 1fr)" gap={"-10"}>
              <GridItem w="200%" textAlign={"left"} h="10">
                Download The App
              </GridItem>
              <GridItem ml={"5em"} w="200%" textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faApple} />
              </GridItem>
              <GridItem ml={"2em"} w="100%" textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faGooglePlay} />
              </GridItem>
              <GridItem w="100%" ml={"1em"} textAlign={"left"} h="10">
                <FontAwesomeIcon icon={faWindows} />
              </GridItem>
            </Grid>
          </SimpleGrid>
        </Container>
      </Box>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        ></Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Chakra Templates. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};
