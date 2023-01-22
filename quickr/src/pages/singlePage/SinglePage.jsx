
import Styles from "./single.module.css"
import Styled from "styled-components"
import { Box, Button, Flex,Image, Img, List,  ListIcon,  ListItem,  SimpleGrid,  Stack, Table,  Td, Text, Tr, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import Fade from "react-reveal/Fade";
import { MdCheckCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Form, { ContactForm } from './Form';
import 'react-slideshow-image/dist/styles.css'
const slideImages = ['https://teja9.kuikr.com/i4/20230121/64-GB--battery-health-100--VB201705171774173-ak_LWBP2008207890-1674318470.webp','https://bit.ly/2jYM25F'

,'https://teja9.kuikr.com/i4/20230121/64-GB--battery-health-100--VB201705171774173-ak_LWBP2008207890-1674318470.webp','https://bit.ly/2jYM25F'
];
const SinglePage = () => {
  const [isAuth,setIsAuth]  = useState(false);
  const [val,setVal] = useState("")
  let [url,setUrl] = useState(slideImages[0])

  
 
  return(
    // <Stack >
    // <Box pos="fixed" w="100%" zIndex={2}></Box>
    <Box  mt={14}   display={{ lg: 'flex',md:"flex" }} >
    <Stack  width={{ lg:"55%",md:'70%'}}>
     {/* <Box gap={2} style={{cursor:"pointer"}}> */}
     <Stack p={4}>
     <Box   height={{lg:"350px",md:"350px",sm:"300px"}} gap={2} >
    <Image src={url}
      alt='Sorry, Img crashed'
      width='100%'
      height={"100%"}

      margin={"auto"}/>
     
    </Box>
    <Box display={"flex"}  height={{lg:"200px",md:"350px",sm:"300px"}} overflowY="hidden" overflowX="auto"  gap={2}>
    {/* <SimpleGrid minChildWidth='120px' direction="row" display={"flex"} minChildHeight='120px'  spacing={2}> */}
    <Gal >
          {slideImages.map((item)=>(
             <Img   style={{  width: "100%",  height: "100%", objectFit: "cover"}} onClick={()=>setUrl(item)} src={item}  alt="Image 1"/>
  ))}
  </Gal>
    </Box>
     </Stack>



    <Box  >
     <Stack direction="row" gap={"10%"}  fontWeight='450' textTransform='camelcase' mt={6} fontSize={{ lg: '2rem' ,md:'1.8rem',sm:'1.6rem'}} color="rgb(51,51,51)" borderBottom="1px solid rgb(176,176,176)" aligntems = "center" p={2} >
      <Link to='/' >
      Ad Details
      </Link>
      <Link to='/' style={{display:'flex',alignItems:'center'}}>
      Description
      </Link>
     </Stack>

  
    <Stack>

    <Text  fontWeight='bolder' textTransform='camelcase' mt={6} fontSize={{ lg: '2rem' ,md:'1.8rem',sm:'1.6rem'}} lineHeight="normal" color="rgb(51,51,51)">Ad Details</Text>
            
    <Stack direction={"row"}>
          <Table variant='normal' borderRight="2px solid rgb(176,176,176)" textTransform='camelcase' mt={6} fontSize={{ lg: '1.3rem' ,md:'1.2rem',sm:'1rem'}}>
                <Td  color='#7e7e7e'  >Ad ID</Td>
                <Td fontWeight='500' >363403408</Td>
          
              <Tr>
              <Td  color='#7e7e7e'  >Furniture Type</Td>
                <Td fontWeight='500' >Bed Sets</Td>
              </Tr>

              <Tr>
              <Td  color='#7e7e7e'  >Brand Name</Td>
                <Td fontWeight='500' >Others</Td>
              </Tr>

              <Tr>
              <Td  color='#7e7e7e'  >Furniture Material</Td>
                <Td fontWeight='500' >Solid Wood (Teak)</Td>
              </Tr>

          </Table>

          <Table variant='normal' border={"none"} textTransform='camelcase' mt={6} fontSize={{ lg: '1.3rem' ,md:'1.2rem',sm:'1rem'}}>
                <Td  color='#7e7e7e'  >Condition</Td>
                <Td fontWeight='500' >Heavily Used</Td>
          
              <Tr border={"none"}>
              <Td  color='#7e7e7e'  >Furniture SubType</Td>
                <Td fontWeight='500' >Without Storage</Td>
              </Tr>

              <Tr>
              <Td  color='#7e7e7e'  >Furniture Age</Td>
                <Td fontWeight='500' >More Than 8 Years</Td>
              </Tr>

              <Tr>
              <Td  color='#7e7e7e'  >Seller Type</Td>
                <Td fontWeight='500' >Individual</Td>
              </Tr>
          </Table>
    </Stack>





    <Text  fontWeight='bolder' textTransform='camelcase' mt={6} fontSize={{ lg: '2rem' ,md:'1.8rem',sm:'1.6rem'}} lineHeight="normal" color="rgb(51,51,51)">Description</Text>
    <Text  textTransform='camelcase' py={10} fontSize={{ lg: '1.4rem' ,md:'1.3rem',sm:'1.2rem'}} color='#7e7e7e'>
    2 planks are slightly rotten.Dimensions- 2.0x1.75x0.6 mHeadboard with wooden carvings
    </Text>
    <Box  w="50%" alignSelf={"center"}>
    <Box my={1} alignSelf={"center"} h='150px' borderWidth='1px'/>
   <Text textAlign={"right"} fontSize={{ lg: '1.1rem' ,md:'1rem',sm:'0.8rem'}}  color='rgb(207,207,207)'>Advertisement</Text>
   </Box>


    <Text  fontWeight='bolder'py={10} textTransform='camelcase' fontSize={{ lg: '2rem' ,md:'1.8rem',sm:'1.6rem'}} lineHeight="normal" color="rgb(51,51,51)">Posted By</Text>
    <Flex align="center" mt={0}  width="100%"  background='rgb(250,250,250)'  p="3%"  >
    <Box  alignItems={"center"}  display={"flex"}   >
      <Image  width={{ lg:"5%",md:'5%',sm:"4%"}} src="phone.jpg"/>
    <Text ml={4} textTransform='camelcase' fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1.2rem'}} color='#7e7e7e'>   Mobile Verified </Text>
      </Box>
      <Box  alignItems={"center"}  display={"flex"}   >
      <Image  width={{ lg:"5%",md:'5%',sm:"4%"}} src="phone.jpg"/>
    <Text ml={4} textTransform='camelcase' fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1.2rem'}} color='#7e7e7e'>   Mobile Verified </Text>
      </Box>
      <Box  alignItems={"center"} display={"flex"}   >
      <Image  width={{ lg:"14%",md:'14%',sm:"12%"}}    src="email.jpg"/>
    <Text ml={4}textTransform='camelcase' fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1.2rem'}} color='#7e7e7e'>   Email Verified </Text>
      </Box>
      <Button  variant='outline' textTransform='camelcase'  onClick={() => (!isAuth ?  setIsAuth(true)  : setIsAuth(false),setVal("Chat"))}  fontSize={{ lg: '1.3rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"20px 40px",sm:"20px 40px",md:"18px 37px"}}}   size='lg' border="2px solid" color='#0485cb'>Chat Now</Button>

</Flex>
    

<Text  fontWeight='bolder' py={10} textTransform='camelcase' fontSize={{ lg: '2rem' ,md:'1.8rem',sm:'1.6rem'}} lineHeight="normal" color="rgb(51,51,51)">Buyer Guidelines</Text>
<Stack boxShadow='xs' p='6' rounded='md' bg='white'  fontSize={{ lg: '1.4rem' ,md:'1.2rem',sm:'1rem'}}   mt={0}  width="100%"   justify  ="space-between">
{/* CheckCircleIcon */}
<List  spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Be careful when paying offline
  </ListItem>
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
    Do not deposit/transfer money to bank or any third party payment gateways without verifying the credentials
  </ListItem>
</List>
</Stack>


    </Stack>
    </Box>
    </Stack>




    {/* <Text  fontWeight='bolder' textTransform='camelcase' mt={6} fontSize={{ lg: '2.4rem' ,md:'2rem',sm:'1.8rem'}} lineHeight="normal" color="rgb(51,51,51)"> Queen size but slightly wider solid teakwood bed</Text> */}






















{/* Left side Box */}
  <Box pl={10} position={"fixed"} right={0} width={{ lg:"45%",md:'35%'}}>
   <Stack spacing={'8%'} direction='row' flexWrap={"wrap"} >
    <Text fontWeight='bold' textTransform='uppercase' fontSize='20'color='#feae3c'>HEAVILY USED </Text>
    <UnorderedList>
  <ListItem   fontWeight='bolder' textTransform='uppercase' fontSize='20' color='#798ba8'>BED SETS</ListItem>
  </UnorderedList>
  <UnorderedList>
  <ListItem   fontWeight='bolder' textTransform='uppercase' fontSize='20' color='#798ba8'>SOLID WOOD (TEAK)</ListItem>
  </UnorderedList>
    </Stack>
    <Text  fontWeight='bolder' textTransform='camelcase' mt={6} fontSize={{ lg: '2.4rem' ,md:'2rem',sm:'1.8rem'}} lineHeight="normal" color="rgb(51,51,51)"> Queen size but slightly wider solid teakwood bed</Text>
    <Text my={4} fontSize={{ lg: '1.2rem' ,md:'1.2rem',sm:'1.1rem'}}  color='rgb(136,136,136)'> Kottayam  <span style={{color:"rgb(176,176,176)"}}> | </span> Posted 16 Days Ago </Text>
    <Text my={3} fontSize={{ lg: '2.5rem' ,md:'2.3rem',sm:'2.1rem'}}   fontWeight='bolder' color='rgb(0,131,202)'>₹6,000</Text>
    <Stack mt={8} spacing={'8%'} direction='row'>
    <Button   textTransform='uppercase'  onClick={() => (!isAuth ?  setIsAuth(true)  : setIsAuth(false),setVal("Call"))} fontSize={{ lg: '1.5rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"35px 110px",md:"31px 90px",sm:"28px 80px"}}} style={{background:`linear-gradient(90deg,rgba(0,196,203,1) 0%, rgba(0,111,173,1) 100%, rgba(0,212,255,1) 0%)` }} size='lg'   colorScheme='blue'>Call</Button>
    <Button  variant='outline' textTransform='uppercase' onClick={() => (!isAuth ?  setIsAuth(true)  : setIsAuth(false),setVal("Chat"))} fontSize={{ lg: '1.5rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"35px 110px",sm:"27px 80px",md:"30px 90px"}}}   size='lg' border="2px solid" color='#0485cb'>chat</Button>
   <Fade Bottom>
    {!isAuth?  "": (<Form value={val} />)}
    </Fade>
</Stack>
{/* <Box  width={{  lg:"75%" ,md:"0%",sm:"70%"}} mt={4} style={{background:'rgb(241,252,253)'}}   borderColor='gray.200' > */}

<Flex align="center" mt={5} px="10px" width={{  lg:"80%" ,md:"90%",sm:"65%"}}  background='rgb(241,252,253)'  py="3%" justify  ="space-between">
<Box align="center"    >
    <Image mb={2}  width={{ lg:"60%",md:'55%',sm:"50%"}} src="https://teja9.kuikr.com/core/clsfd/assets/ic-get-all-details-2x.png"/>
    <Text fontSize={{ lg:"1rem",md:'0.9rem',sm:"0.8rem"}} color='rgb(120,197,218)'>   Get all details </Text>
    </Box>
    <Box align="center" >
    <Image mb={2}   width={{ lg:"55%",md:'50%',sm:"45%"}} src="https://teja9.kuikr.com/core/clsfd/assets/ic-schedule-visit-bazaar-2x.png"/>
    <Text fontSize={{ lg:"1rem",md:'0.9rem',sm:"0.8rem"}}  color='rgb(120,197,218)'>   Schedule a visit </Text>
    </Box>
    <Box align="center">
    <Image mb={2}   width={{ lg:"55%",md:'50%',sm:"45%"}} src="https://teja9.kuikr.com/core/clsfd/assets/ic-negotiate-2x.png"/>
    <Text  fontSize={{ lg:"1rem",md:'0.9rem',sm:"0.8rem"}}  color='rgb(120,197,218)'>   Negotiate price </Text>
    </Box>    
</Flex>
  </Box>
  </Box>
  // {/* </Stack> */}
  )
}


export default SinglePage


const Gal = Styled.div`
display: grid;
grid-template-columns: repeat(${slideImages.length}, 1fr);
gap:8px
`