

import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "./single.css"
const SinglePage = () => {

  return(
    <Box p={4} display={{ lg: 'flex' }}  sx={{width:{xs:"100%",sm:"358px",md:'320px'},boxShadow:"none",borderRadius:0}} >
  <Box width={{ lg:'flex' ,lg:"1200px",md:'800px'}} >
<div className='sml-cont sin-prod'>
<div className='row'>
  <div className='col-2 '>
    <div className='imgdisplay'> <img src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
      width='50%' id = 'prod-img'/>
       <img src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
      width='50%' id = 'prod-img'/>
      </div>
   
    <div className='sml-img-row'>
    <div className='sml-img-col'>
    <img src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
      width='100%' className= 'sml-img'/>
    </div>

    <div className='sml-img-col'>
    <img src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
      width='100%' className= 'sml-img'/>
    </div>

    <div className='sml-img-col'>
    <img src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
      width='100%' className= 'sml-img'/>
    </div>
    </div>
  </div>
</div>
  </div>
  </Box>



{/* Left side Box */}


  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
   <Box>
    <Text
      fontWeight='bold'
      textTransform='uppercase'
      fontSize='lg'
      letterSpacing='wide'
      color='orange.400'
    >
      Marketing 
    </Text>
    </Box>
   
    <Text mt={3}
    fontWeight='bolder'
    textTransform='camelcase'
    fontSize={{ lg: '2.5rem' ,md:'2.2rem',sm:'1.8rem'}}  
    // letterSpacing='wide'
    lineHeight="normal">
    Queen size but slightly wider solid teakwood bed
    </Text>

    <Text mt={2} fontSize={{ lg: '1.3rem' ,md:'1.2rem',sm:'1.1rem'}}     fontWeight='500' color='gray.500'>
    Kottayam  | Posted 16 Days Ago
    </Text>

    <Text mt={2} fontSize={{ lg: '2.5rem' ,md:'2.3rem',sm:'2.1rem'}}   fontWeight='bolder' color='blue.500'>
    ₹6,000
    
    </Text>
    <Stack mt={4} spacing={'8%'} direction='row'>
    <Button  textTransform='uppercase' fontSize={{ lg: '1.5rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"35px 110px",md:"31px 90px",sm:"28px 80px"}}} style={{background:`linear-gradient(90deg,rgba(0,196,203,1) 0%, rgba(0,111,173,1) 100%, rgba(0,212,255,1) 0%)` }} size='lg'  colorScheme='blue'>Call</Button>

    <Button  variant='outline' textTransform='uppercase' fontSize={{ lg: '1.5rem' ,md:'1.3rem',sm:'1rem'}} sx={{padding:{lg:"35px 110px",sm:"27px 80px",md:"30px 90px"}}}   size='lg'  colorScheme='blue'>chat</Button>
</Stack>
  </Box>
  </Box>
  )
}


export default SinglePage