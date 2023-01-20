import { Box, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react"

import {FaFacebookSquare} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"

function LoginModal(){
    const { isOpen, onOpen, onClose } = useDisclosure()


return(
    
      
       
          <>
            <Button onClick={onOpen}>Login/Register</Button>
      
            <Modal size="xl"  closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
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
                  <Input mt="15px" placeholder="Enter Mobile number/Email" />
                  <Button mt="15px" w="100%" bg="#007EBE" color="white">Continue</Button>
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