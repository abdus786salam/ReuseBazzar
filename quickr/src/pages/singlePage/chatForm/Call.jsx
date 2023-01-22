import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    List,
    ListItem,
    ListIcon,
    useToast,
  } from '@chakra-ui/react';

import { MdCheckCircle, MdOutlineWarningAmber } from "react-icons/md";
  function Call() {
const Toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [auth,setAuth] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [logo,setLogo]=useState("")
    const [phone,setPhone] = useState("");
    
 
   const handleContinue = () => {
    Toast({
      title: "Succesfull",
      description: "Contact Details Sends to Your Email Successfully",
      position: "top",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
     onClose()
      
    }
   
   useState(()=>{
    onOpen()

   },[])
  
    return (
      <>
  
        <Modal  onClose={onClose} isOpen={isOpen}  size={{sm:"sm",md: "md",lg: 'lg',xl:"xl",base : "xs"}} isCentered  >
          <ModalOverlay />
          <ModalContent  >
          <ModalCloseButton m={5} fontSize={"lg"} />
            <ModalHeader my={2} mx={5}   fontWeight="bold" fontSize={"27px"}>{"Call"}</ModalHeader>
           <hr size="lg"/>
            <ModalBody  >
             <Box mt={2}  overflowY="auto" top={1} height={{
              sm: "350px",
              md:'400px',
              lg:"700px",
              xl:"600px",
              base :"500px"
             }} >
              <Text textTransform='camelcase' color='#7e7e7e' fontSize={{
                 sm: "15px",
                 md: "16px",
                 lg: "18px",
                 xl: "18px",
                 base : "14px"
              }}>The ad poster would like to know your details</Text>
             
             
             <Text  fontWeight='bolder' py={2} textTransform='camelcase' fontSize={{ lg: '1.8rem' ,md:'1.8rem',sm:'1.6rem'}} lineHeight="normal" color="rgb(51,51,51)">Contact Details</Text>           
             <List  fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1.2rem'}}   spacing={1}>
             <ListItem>
    <ListIcon as={MdOutlineWarningAmber} color='red.500' />
    Don't Share Your Personals to anyone
  </ListItem>
  <ListItem>
    <ListIcon as={MdOutlineWarningAmber} color='red.500' />
    Third Person may Heal your Information Be carefull
  </ListItem>
  <ListItem>
    <ListIcon as={MdOutlineWarningAmber} color='red.500' />
    Keep Secure Your Username ,PassWords OTP's and Secured Pin Numbers
  </ListItem>
  <ListItem>
    <ListIcon as={MdOutlineWarningAmber} color='red.500' />
    Be careful when paying offline
  </ListItem>
  <ListItem>
    <ListIcon as={MdOutlineWarningAmber} color='red.500' />
    Please Read the following Instructions carefully
  </ListItem>
  </List>
   <Text  fontWeight='bolder' py={5} textTransform='camelcase' fontSize={{ lg: '1.8rem' ,md:'1.8rem',sm:'1.6rem'}} lineHeight="normal" color="rgb(51,51,51)">Buyer Guidelines</Text>

<List  fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1.2rem'}}   spacing={1}>

  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Beware of ads with unrealistic prices, lookalikes or clone products
      </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Chat and ask questions to be clear on product details
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Be careful when paying offline
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Do not deposit/transfer money to bank or any third party payment gateways without verifying the credentials
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
  Be Save And Secure
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Chat and ask questions to be clear on product details
  </ListItem>
</List>
             </Box>
            </ModalBody>
            <ModalFooter isCentered>
            {  <Button onClick={()=>handleContinue()}    textTransform='uppercase'    fontSize={{ lg: '1.4rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"25px 40px",md:"25px 40px",sm:"22px 36px"}}} style={{background:`linear-gradient(90deg,rgba(0,196,203,1) 0%, rgba(0,111,173,1) 100%, rgba(0,212,255,1) 0%)` }} margin="auto" size='lg'   colorScheme='blue'  >Continue</Button> }
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Call

