import { Box, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {FaFacebookSquare} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import { BiUserCircle } from "react-icons/bi"

// import { Signupform } from "./Signupform"

const signupdata={
  "name":"",
  "email":"",
  "mobile":"",
  "password":""
}
const finallogindata={
  "email":"",
  "password":""
}

function LoginModal({tokenvalue}){
  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const navigate=useNavigate()
  
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const { isOpen2, onOpen2, onClose2 } = useDisclosure()
     const [logindetail,setLogindetail]=useState("")
     const [logindata,setLogindata]=useState([])
     const [signupdetail,setSignupdetail]=useState(signupdata)
     const [finallogindetail,setFinallogindetail]=useState(finallogindata)

    //  console.log(tokenvalue)
    const getlogindata=()=>{
      fetch("https://calm-pink-python-suit.cyclic.app/users")
      .then(res=>res.json())
      .then(res=>setLogindata(res))
    }
    const registeruser=()=>{
      fetch("https://calm-pink-python-suit.cyclic.app/users/register",{
        method:"POST",
        body:JSON.stringify(signupdetail),
        headers:{
            "Content-type":"application/json"
        }
      })
      .then(res=>res.json())
      .then(res=>{
        alert("User is successfully registered please login")
          modal3.onOpen()
          modal1.onClose()

      })
    }
     const checklogindata=()=>{
      fetch("https://calm-pink-python-suit.cyclic.app/users/login",{
        method:"POST",
        body:JSON.stringify(finallogindetail),
        headers:{
            "Content-type":"application/json",
        }
    })
    .then(res=>res.json())
    .then(res=>{
        alert("user is login")
        localStorage.setItem("token",res.token)
        tokenvalue=true
        navigate("/")

        modal3.onClose()
        modal1.onClose()
    })
    .catch(err=>console.log(err))
     }

    const loginhandler=()=>{
      getlogindata()
      logindata.map((ele)=>{
        console.log(ele.email)
        if(logindetail==ele.email){
          alert("User is already registered please login")
          modal1.onClose()
          modal3.onOpen()
          // console.log("find one")?
        }
        else{
          modal2.onOpen()
          modal1.onClose()
        }
      })
      
      // console.log(logindetail)
    }
    const inputhandler=(e)=>{
      setLogindetail(e.target.value)
       // console.log(e.target.value)
      console.log("input")
    }
    const signuphandler=(e)=>{
      const {name,value}=e.target
      setSignupdetail({...signupdetail,[name]:value})
      console.log(signupdetail)
    }
    const RegisterHandle=()=>{
      
      registeruser()
      console.log("jkfansfj")
    }
    const passcheckhandler=(e)=>{
      console.log("check",logindetail)
      const {name,value}=e.target
      setFinallogindetail({...finallogindetail,[name]:value})
      console.log(finallogindetail)
    }
    const finallogin=()=>{
         checklogindata()
    }

return(
          <>
            
            <Button onClick={modal1.onOpen} bg="none">
                 <BiUserCircle size="1.5rem"/>  
              Login/Register
            </Button>
             {/* modal1 */}
            <Modal size="xl"  closeOnOverlayClick={false} isOpen={modal1.isOpen} onClose={modal1.onClose}>
              <ModalOverlay />
              {/* <Flex> */}
              <ModalContent >

                {/* <ModalHeader>Login/Sign Up On Quikr</ModalHeader> */}
                <ModalCloseButton />
                <Flex >
                  <VStack p="5%" pt="15%" w="40%" bg="#f5fcff">
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Manage your orders</Text>
                            <Text>Track your orders,delivery and returns</Text>
                        </Box>
                     </Flex>
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Transact online with buyers and sellers</Text>
                            <Text>Check and respond to chats,replies,offers and more</Text>
                        </Box>
                     </Flex>
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Personalized notifications and alerts</Text>
                            <Text>Get matching alerts for the products/services you are looking for</Text>
                        </Box>
                     </Flex>
                  </VStack>
               <ModalBody pb={6}>
                <Heading fontSize="xl" mt="4%">Login/Sign Up On Quikr</Heading>
                <Text mt="10px" fontSize="xs">Please provide your Mobile Number or Email to Login/Sign Up on Quikr</Text>
                <Input mt="15px" value={logindetail} onChange={inputhandler} placeholder="Enter Mobile number/Email" />
                
                <Button mt="15px" w="100%" bg="#007EBE" color="white" onClick={()=>{
                  // modal2.onOpen()
                  // modal1.onClose()
                  loginhandler()
                    }}>Continue</Button>
                <Text mt="10px" fontSize="xs">By Submitting in you agree to T&C and Privacy Policy</Text>
                
                <Text mt="80px">LOGIN USING</Text>
                <Flex mt="10px">
                  <Flex h="40px" border="1px solid black" w="50%" alignItems="center" justifyContent="center"  >
                    <FaFacebookSquare  bg="red"/>
                    <Text fontSize="lg">Facebook</Text>
                  </Flex>
                  <Flex h="40px" border="1px solid black" w="50%" alignItems="center" justifyContent="center" >
                    <FcGoogle/>
                    <Text fontSize="lg">Google</Text>
                  </Flex>
                </Flex>
              </ModalBody>
               
                
                </Flex>
   
      
                
              </ModalContent>
              
              {/* </Flex> */}

              
            </Modal>

            {/* modal2 */}
            <Modal size="xl"  closeOnOverlayClick={false} isOpen={modal2.isOpen} onClose={modal2.onClose}>
              <ModalOverlay />
              {/* <Flex> */}
              <ModalContent >

                {/* <ModalHeader>Login/Sign Up On Quikr</ModalHeader> */}
                <ModalCloseButton />
                <Flex >
                  <VStack p="5%" pt="15%" w="40%" bg="#f5fcff">
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Manage your orders</Text>
                            <Text> Track your orders,delivery and returns</Text>
                        </Box>
                     </Flex>
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Transact online with buyers and sellers</Text>
                            <Text>Check and respond to chats,replies,offers and more</Text>
                        </Box>
                     </Flex>
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Personalized notifications and alerts</Text>
                            <Text>Get matching alerts for the products/services you are looking for</Text>
                        </Box>
                     </Flex>
                  </VStack>
               <ModalBody pb={6}>
                <Heading fontSize="xl" mt="4%">Sign Up On Quikr</Heading>
                <Text mt="10px" fontSize="xs">Create an account on Quikr</Text>
                <Input mt="15px" value={logindetail} name="email"  onChange={signuphandler} placeholder="Enter Email Address" />
                <Input mt="15px"  value={signupdetail.name} name="name" onChange={signuphandler} placeholder="Name" />
                <Input mt="15px" value={signupdetail.mobile} name="mobile" onChange={signuphandler} placeholder="Mobile Number" />
                <Input mt="15px"  value={signupdetail.password} name="password" onChange={signuphandler} placeholder="Password" />
                
                <Button mt="15px" w="100%" bg="#007EBE" color="white" onClick={RegisterHandle}>Continue</Button>
                <Text mt="10px" fontSize="xs">By Submitting in you agree to T&C and Privacy Policy</Text>
                
                <Text mt="80px">LOGIN USING</Text>
                <Flex mt="10px">
                  <Flex h="40px" border="1px solid black" w="50%" alignItems="center" justifyContent="center"  >
                    <FaFacebookSquare  bg="red"/>
                    <Text fontSize="lg">Facebook</Text>
                  </Flex>
                  <Flex h="40px" border="1px solid black" w="50%" alignItems="center" justifyContent="center" >
                    <FcGoogle/>
                    <Text fontSize="lg">Google</Text>
                  </Flex>
                </Flex>
              </ModalBody>
               
                
                </Flex>
   
      
                
              </ModalContent>
              
              {/* </Flex> */}

              
            </Modal>

            {/* modal3 */}
            <Modal size="xl"  closeOnOverlayClick={false} isOpen={modal3.isOpen} onClose={modal3.onClose}>
              <ModalOverlay />
              {/* <Flex> */}
              <ModalContent >

                {/* <ModalHeader>Login/Sign Up On Quikr</ModalHeader> */}
                <ModalCloseButton />
                <Flex >
                  <VStack p="5%" pt="15%" w="40%" bg="#f5fcff">
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Manage your orders</Text>
                            <Text> Track your orders,delivery and returns</Text>
                        </Box>
                     </Flex>
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Transact online with buyers and sellers</Text>
                            <Text>Check and respond to chats,replies,offers and more</Text>
                        </Box>
                     </Flex>
                     <Flex>
                        <Image src=""></Image>
                        <Box>
                            <Text>Personalized notifications and alerts</Text>
                            <Text>Get matching alerts for the products/services you are looking for</Text>
                        </Box>
                     </Flex>
                  </VStack>
               <ModalBody pb={6}>
                <Heading fontSize="xl" mt="4%">Login On Quikr</Heading>
                <Text mt="10px" fontSize="xs">Welcome Back</Text>
                <Input mt="15px"   name="email" value={logindetail} onChange={passcheckhandler} placeholder="Enter Email Address" />
                {/* <Input mt="15px"  onChange={inputhandler} placeholder="Name" /> */}
                {/* <Input mt="15px" onChange={inputhandler} placeholder="Mobile Number" /> */}
                <Input mt="15px" name="password" value={finallogindetail.password} onChange={passcheckhandler} placeholder="Password" />
                
                <Button mt="15px" w="100%" bg="#007EBE" color="white" onClick={finallogin}>Continue</Button>
                <Text mt="10px" fontSize="xs">By Submitting in you agree to T&C and Privacy Policy</Text>
                
                <Text mt="80px">LOGIN USING</Text>
                <Flex mt="10px">
                  <Flex h="40px" border="1px solid black" w="50%" alignItems="center" justifyContent="center"  >
                    <FaFacebookSquare  bg="red"/>
                    <Text fontSize="lg">Facebook</Text>
                  </Flex>
                  <Flex h="40px" border="1px solid black" w="50%" alignItems="center" justifyContent="center" >
                    <FcGoogle/>
                    <Text fontSize="lg">Google</Text>
                  </Flex>
                </Flex>
              </ModalBody>
               
                
                </Flex>
   
      
                
              </ModalContent>
              
              {/* </Flex> */}

              
            </Modal>
          </>
        
      
)


}
export {LoginModal}