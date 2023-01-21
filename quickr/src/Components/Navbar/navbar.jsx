
import {Box,Flex, Heading, Image, Input,Icon, Text, Button, InputGroup, InputRightElement, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider} from "@chakra-ui/react"
import { GoLocation } from "react-icons/go"
import { FiSearch } from "react-icons/fi"
import { BiUserCircle } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import {ChevronDownIcon, Search2Icon} from "@chakra-ui/icons"
import logo from "../../Assets/finallogo.jpeg"
import { Subnavbar } from "./subnavbar"
import { LoginModal } from "./loginmodal"
import { result } from "lodash"
import { useState } from "react"
function Navbar(){
    const [result,setResult]=useState([])
    const city=["Ahmedabad","Bangalore","Chandigarh","Chennai","Coimbatore","Delhi","Hydrabad","Kochi","Kolkata","Mumbai","Pune"]

    const changehandler=(e)=>{
        setResult(e.target.value)
        console.log(e.target.value)
    }
return(
    <>
    <Flex  w="85%" m="auto" h="70px" alignItems="center">
        <Box  bg="red" mr="5%" w="40%">
            <Image h="70px" w="100%" src={logo}></Image>
        </Box>
        <Flex alignItems="center"  mr="1%" gap="2px">
            <GoLocation size="1.2rem"/>
            {/* <Text fontSize="lg">Location</Text> */}
            <Menu>
               <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                Location
               </MenuButton>
              <MenuList h="200px">
                 {/* <MenuGroup> */}
                    <Input placeholder="Search" borderRadius="none"/>
                 {/* </MenuGroup> */}
                 {/* <MenuDivider /> */}
                 <MenuItem bg="silver.400">All India</MenuItem>
                 <MenuDivider />
                 <MenuGroup overflowY="auto">
                 {city.map((ele)=>(
                    <MenuItem minH="20px">
                     <span>{ele}</span>
                    </MenuItem>
                 )

                 )}
                 </MenuGroup>
              </MenuList>
             </Menu>
        </Flex>
        <Flex mr="8%" w="800px">
            {/* <Input type="text" placeholder="Search" /> */}
            <InputGroup >
                <Input type='text'  placeholder='Search'onChange={(e)=>changehandler(e)} border="1px solid #008BCF" />
                <Box>
                {result.map((el)=>(
                    <Text>
                      
                    </Text>
                ))}   
                </Box>            

                <InputRightElement
                    pointerEvents='none'
                    bg="#008BCF"
                    borderRightRadius="20%"
                    children={<Search2Icon color='white'  />}
                />
              </InputGroup>
        </Flex>
        <Flex alignItems="center" mr="4%" gap="7px">
            <BsCart2 size="1.5rem"/>
            <Text fontSize="lg">Cart</Text>
        </Flex>
        <Flex alignItems="center" mr="3%" gap="7px">
            <BiUserCircle size="1.5rem"/>
            <LoginModal/>
            {/* <Text fontSize="lg">Login/Register</Text> */}
        </Flex>
       
        <Box>
            <Button bg="yellow">Post Free Ad</Button>
        </Box>
    </Flex>
    <Subnavbar/>
    <Box h="2500px" bg="red">

    </Box>
    </>
    
)

}
export {Navbar}