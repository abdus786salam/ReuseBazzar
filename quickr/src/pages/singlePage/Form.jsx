import React, { useState } from "react";
import Styles from "./single.module.css"
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
    Img,Input,
    Container,
    Text,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    HStack,
    TagLabel
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
  import { PinInput, PinInputField } from '@chakra-ui/react'
  import Call from "./chatForm/Call";

  function Form({value}) {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [auth,setAuth] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [verify,setVerify] = useState(false) ;
    const [otp1,setOtp1] = useState("")
    const [otp2,setOtp2] = useState("")
    const [otp3,setOtp3] = useState("")
    const [otp4,setOtp4] = useState("")
    const [got,setGot] = useState("") ;
    
    let finalOtp = [];
    finalOtp.push(otp1,otp2,otp3,otp4)
    let gotOtp = [];
  //console.log(finalOtp)
    const createOtp = () => {
      var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    setGot(OTP)
    return OTP;
    }

    // alert(createOtp())

    const handleOtp = () => {
         
      if(name.length < 4){
        alert("Please enter Valid Name")
       }
       else if(phone.length < 10) {
        alert('Please Enter 10 Digit Valid phone')
       }
       
       else {
        if(verify===false && phone.length >= 10 && name.length >= 4) {
          toast({
            title: `Your OTP Is : ${createOtp()}`,
            description: "Enter This Otp to Continue",
            position: "top",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          setVerify(!verify)
        }else {
          alert("Enter All Details")
        }
       }
    }

  

   const handleSend = () => {
    if(finalOtp.length < 3 || got !== finalOtp.join("") ){
      alert('Please Enter Valid OTP')
    }
    if(got == finalOtp.join("")){
      setAuth(true)
      toast({
        title: "Succesfull",
        description: "You are Successfull",
        position: "top",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setAuth(true)
      //  onClose()
    }

   }
    

   useState(()=>{
    onOpen()
   
   },[])
  
    return (
      <>
  
        <Modal onClose={onClose} isOpen={isOpen} size={{sm:"sm",md: "md",lg: 'lg',xl:"xl",base : "xs"}} isCentered  >
          <ModalOverlay />
          <ModalContent  >
          <ModalCloseButton m={5} fontSize={"lg"} />
            <ModalHeader my={2} mx={5}   fontWeight="bold" fontSize={"27px"}>{value}</ModalHeader>
           <hr size="lg"/>
            <ModalBody  >
             <Box mt={6} height={{
              sm: "350px",
              md:'400px',
              lg:"500px",
              xl:"500px",
              base :"300px"
             }} >
              <Text my={5} textTransform='camelcase' color='#7e7e7e' fontSize={{
                 sm: "15px",
                 md: "16px",
                 lg: "18px",
                 xl: "18px",
                 base : "14px"
              }}>{value === "Chat"?"Enter the following details to start chatting":"The ad poster would like to know your details"}</Text>
             
             
             
             
             <Box mt={5} className={Styles.form}>
              <input  py={7}  type="text" name="" onChange={(e)=>setName(e.target.value)} placeholder="" className={Styles.textbox}/>
              <label  className={Styles.formlabel} >Name*</label>
             </Box>
             <Box my={8} className={Styles.form}>
              <input type="number" name="" onChange={(e)=>setPhone(e.target.value)} placeholder="" className={Styles.textbox}/>
              <label className={Styles.formlabel}>Mobile Number*</label>
             </Box>
             <Box className={Styles.form}>
              <input type="email" name="" placeholder="" onChange={(e)=>setEmail(e.target.value)} className={Styles.textbox}/>
              <label className={Styles.formlabel}>Email Adress</label>
             </Box>
             
             
             
             
              <Box style={{marginTop:"5%",padding:"1%",borderRadius:"5px"}} >
                {verify ? <Box style={{width:"60%",margin:"auto",marginTop:"5%"}}>
              <Text fontSize={{
                 sm: "13px",
                 md: "14px",
                 lg: "16px",
                 xl: "18px",
                 base : "12px"
              }}>Enter your  OTP</Text> <HStack >
              <PinInput  size={{
                sm: "sm",
                md: "md",
                lg: "lg",
              xl : "lg",
              base: "xs"
              }}>
                <PinInputField onChange={(e)=> setOtp1(e.target.value)} />
                <PinInputField onChange={(e)=> setOtp2(e.target.value)} />
                <PinInputField  onChange={(e)=> setOtp3(e.target.value)} />
                <PinInputField  onChange={(e)=> setOtp4(e.target.value)} />
              </PinInput>
            </HStack></Box> : null}</Box>
              <Box style={{width:"50%",margin:"auto",marginTop:"5%",}}>
              {verify===false ? <Button sx={{padding:{lg:"25px 40px",md:"25px 40px",sm:"22px 35px"}}} fontSize={{
                sm:"15px",
                md:"17px",
                lg:"18px",
                xl:"20px",
                base:"14px"
              }} style={{
                backgroundColor:"#c64b8a",color:"white"
              }} onClick={()=>  handleOtp()}>{verify ? "Verify OTP" : 'Create OTP'}</Button> : null}
              </Box>
             </Box>
            </ModalBody>
            <ModalFooter isCentered>
            { (verify ?    <Button  variant={"outline"}   textTransform='uppercase'   onClick={()=>onClose()} fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"25px 50px",md:"25px 50px",sm:"22px 46px"}}} margin="auto" size='lg'   colorScheme='blue' >Skip</Button> : null)}

           
            { (verify ?    <Button    textTransform='uppercase'   onClick={()=> handleSend()} fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"25px 40px",md:"25px 40px",sm:"22px 36px"}}} style={{background:`linear-gradient(90deg,rgba(0,196,203,1) 0%, rgba(0,111,173,1) 100%, rgba(0,212,255,1) 0%)` }} margin="auto" size='lg'   colorScheme='blue'  >Continue</Button> : null)}

            {!auth?  "": (<Call />)}

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Form

//   <Button   textTransform='uppercase'  onClick={() => (!isAuth ?  setIsAuth(true)  : setIsAuth(false),setVal("Call"))} fontSize={{ lg: '1.5rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"35px 110px",md:"31px 90px",sm:"28px 80px"}}} style={{background:`linear-gradient(90deg,rgba(0,196,203,1) 0%, rgba(0,111,173,1) 100%, rgba(0,212,255,1) 0%)` }} size='lg'   colorScheme='blue'>Call</Button>
//   <Button  variant='outline' textTransform='uppercase' onClick={() => (!isAuth ?  setIsAuth(true)  : setIsAuth(false),setVal("Chat"))} fontSize={{ lg: '1.5rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"35px 110px",sm:"27px 80px",md:"30px 90px"}}}   size='lg' border="2px solid" color='#0485cb'>chat</Button>
//  <Fade Bottom>
  // {!isAuth?  "": (<Call value={val} />)}
//   </Fade>