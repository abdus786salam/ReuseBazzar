import  "./navbar.css"
import {Box,Flex, Heading, Image, Input,Icon, Text, Button, InputGroup, InputRightElement, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, VStack} from "@chakra-ui/react"
import { GoLocation } from "react-icons/go"
import { FiSearch } from "react-icons/fi"
import { FaUserAlt } from "react-icons/fa"
import { BiUserCircle } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"
import { Autocomplete } from "chakra-ui-simple-autocomplete";
import {ChevronDownIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons"
import logo from "../../Assets/finallogo.jpeg"
import { Subnavbar } from "./subnavbar"
import { LoginModal } from "./loginmodal"
import { result } from "lodash"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
function Navbar(){
    const [result,setResult]=useState([])
    const [tokenvalue,setTokenvalue]=useState(false)
    const [searchText, setSearchText] = useState("");
    const city=["Ahmedabad","Bangalore","Chandigarh","Chennai","Coimbatore","Delhi","Hydrabad","Kochi","Kolkata","Mumbai","Pune"]
    const options = [
        { value: "iphone", label: "iphone" },
        { value: "honda", label: "Honda" },
        { value: "Mahindra", label: "Mahindra" },
        { value: "television", label: "Television" },
        { value: "frame", label: "Frame" },
        { value: "appliances", label: "Appliances" },
        { value: "Fitness", label: "Fitness" },
      ];

    useEffect(()=>{
        // console.log(localStorage.getItem("token").length)
        if(localStorage.getItem("token")){
            setTokenvalue(true)
        }
    },[])
    // const changehandler=(e)=>{
    //     setResult(e.target.value)
    //     console.log(e.target.value)
    // }
    const changeHandler = (e, options) => {
        let val = e.target.value;
        setSearchText(val);
        let answer = options.filter((el) => {
          return el.value.toLowerCase().includes(val.toLowerCase());
        });
        console.log(answer, val);
        if (val !== "" && answer.length > 0) {
          setResult(answer);
        } else {
          setResult([]);
        }
      };
      const searchBarNavigation = (value) => {
        setResult([]);
    
        // navigate(`/${city}/${value}`);
      };
    


return(
    <>
    <Flex   h="70px" alignItems="center"justifyContent="center" pl="7%" pr="7%" position="sticky" top="0px" display={{ base: "none", md: "flex", lg: "flex" }} zIndex="3"bg="white">
        {/* <Link to="/"> */}
        <Box  mr="5%" w="40%">
            <Link to="/">
            <Image h="70px" w="100%" src={logo}></Image>
            </Link>
        </Box>
        {/* </Link> */}
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

        <Box mr="8%" w="800px">
          <VStack className="inputBox">
            <InputGroup>
              {/* <Input value={searchText} className='searchBox' placeholder='Search for Products' onChange={(e) => changeHandler(e)} />
                            <InputRightElement children={<SearchIcon color='black.500' />} /> */}
              <Autocomplete
                className="searchBox"
                options={options}
                result={[]}
                placeholder="Search for Product"
                onChange={(e) => changeHandler(e, options)}
                pl="10px"
                h="40px"
                w="300px"
                outline="1px solid grey"
                borderRadius="10px"
              />
              <InputRightElement
                  pointerEvents='none'
                  bg="#008BCF"
                  borderRightRadius="20%"
                  children={<Search2Icon color='white'  />}
              />
            {/* //   <InputRightElement children={<SearchIcon color="black.500" bg="blue" />} /> */}
            </InputGroup>
          </VStack>
          <div className="overFlowDiv">
            {result.map((ele) => {
              return (
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => searchBarNavigation(ele.value)}
                >
                  {ele.label}
                </p>
              );
            })}
          </div>
        </Box>


          
        <Link to="/cart">
          <Flex alignItems="center" mr="4%" gap="7px">  
           <BsCart2 size="1.5rem"/>
           <Text fontSize="lg">Cart</Text>
          </Flex>
         </Link>
        
            
        {tokenvalue? <Flex alignItems="center" mr="3%" gap="7px">
        <Button onClick={()=>{
            setTokenvalue(false) ;localStorage.removeItem("token")}}>Logout</Button> 
        </Flex>
        // <FaUserAlt size="100px" mr="10px"/>
        :<Flex alignItems="center" mr="3%" gap="7px">
            <LoginModal/>
            {/* <Text fontSize="lg">Login/Register</Text> */}
        </Flex>}
        
       
        <Box>
            <Link to="/postads">
            <Button bg="yellow">Post Free Ad</Button>
            </Link>
        </Box>
    </Flex>
    <Flex display={{ base: "flex", md: "none", lg: "none" }} justifyContent="space-between" mr="60px" alignItems="center" position="sticky" top="0px">
        <Box>
            <Menu>
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} >
                <GiHamburgerMenu size="40px"/>
            </MenuButton>
            <MenuList>
                <MenuItem>
                  {tokenvalue? <Flex alignItems="center" mr="3%" gap="7px">
                     <Button onClick={()=>{
                      setTokenvalue(false) ;localStorage.removeItem("token")}}>Logout</Button> 
                       </Flex>
                   // <FaUserAlt size="100px" mr="10px"/>
                   :<Flex alignItems="center" mr="3%" gap="7px">
                    <BiUserCircle size="1.5rem"/>
                    <LoginModal/>
                     {/* <Text fontSize="lg">Login/Register</Text> */}
                     </Flex>}
                </MenuItem>
                <MenuItem>
                     Mobile
                </MenuItem>
                <MenuItem>
                     Electronics
                </MenuItem>
                <MenuItem>
                     Furniture & Decor
                </MenuItem>
                <MenuItem>
                     Home Appliances
                </MenuItem>
          
            </MenuList>
            </Menu>
        </Box>
        <Box  bg="red" mr="5%" w="40%">
            <Image h="70px" w="100%" src={logo}></Image>
        </Box>
        <Button bg="yellow" >Post Free Ad</Button>
        
    </Flex>
    <Subnavbar/>
    </>
    
)

}
export {Navbar}


{/* <Flex mr="8%" w="800px">
{/* <Input type="text" placeholder="Search" /> */}
{/* <InputGroup >
    {/* <Input type='text'  placeholder='Search'onChange={(e)=>changehandler(e)} border="1px solid #008BCF" /> */}
    // <Box>
    // {result.map((el)=>(
    //     <Text>
          
    //     </Text>
    // ))}   
    // </Box>            

    // <InputRightElement
    //     pointerEvents='none'
    //     bg="#008BCF"
    //     borderRightRadius="20%"
    //     children={<Search2Icon color='white'  />}
    // />
//   </InputGroup> */}
// </Flex>  */}