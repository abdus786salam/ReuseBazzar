
import { ChevronDownIcon } from "@chakra-ui/icons"
import {Box,Flex, Heading, Image, Input,Icon, Text, Button, InputGroup, InputRightElement, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider} from "@chakra-ui/react"

function Subnavbar(){


 return (
    <>
     <Flex h="40px" bg="skyblue">
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                MOBILES
            </MenuButton>
            <MenuList gap="10%" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup title="Mobile Phones" textAlign="left">
                    <MenuItem>Used Mobile</MenuItem>
                    
                    <MenuGroup title="Top Mobile(used)" textAlign="left">
                      <MenuItem>Used iphone 7</MenuItem>
                      <MenuItem>Used iphone 6</MenuItem>
                      <MenuItem>Used Redmi Note 4</MenuItem>

                    </MenuGroup>
                    
                </MenuGroup>
                <MenuGroup title="Top Brands(Used/New)">
                    <MenuItem>Samsung Mobiles</MenuItem>
                    <MenuItem>Iphones</MenuItem>
                    <MenuItem>Mi Mobiles</MenuItem>
                    <MenuItem>Motorola mobiles</MenuItem>
                    <MenuItem>LG Phones</MenuItem>
                 <MenuGroup title="Shop By choice">
                      <MenuItem>4G Ready</MenuItem>
                      <MenuItem>Selfie Phones</MenuItem>
                      <MenuItem>Great Battery Life</MenuItem>
                      <MenuItem>High RAM</MenuItem>
                    </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Tablets">
                    <MenuItem>Android Tablets</MenuItem>
                    <MenuItem>4G Tablets</MenuItem>
                    <MenuGroup title="Wearable Devices">
                        <MenuItem>Smart Bands</MenuItem>
                        <MenuItem>Smart Watches</MenuItem>
                    </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Mobile Accessories">
                    <MenuItem>Headsets</MenuItem>
                    <MenuItem>Earphones</MenuItem>
                    <MenuItem>Memory Cards</MenuItem>
                   <MenuGroup title="Shop By Budget">
                     <MenuItem>Below 6000</MenuItem>
                     <MenuItem>6000-10,000</MenuItem>
                   </MenuGroup>
                </MenuGroup>

            </MenuList>
          
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                FURNITURE & DECOR
            </MenuButton>
            <MenuList bg="red" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 3</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 4</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                ELECTRONICS
            </MenuButton>
            <MenuList bg="red" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 3</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 4</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                HOME APPLIANCES
            </MenuButton>
            <MenuList bg="red" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 3</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 4</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                KIDS & TOYS
            </MenuButton>
            <MenuList bg="red" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 3</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 4</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                SPORTS,HOBBIES & FASHION
            </MenuButton>
            <MenuList bg="red" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 3</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 2</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem>Space 4</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                    <MenuItem>Space 1</MenuItem>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>

        

     </Flex>
    </>
 )


}
export {Subnavbar}