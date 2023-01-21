import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import FormHeaders from '../../components/formComponents/FormHeaders'
import FormSidebar from '../../components/formComponents/FormSidebar'

const FormBikeAndScooter = () => {
  return (
    <Box bg="#fafafa" w="100%" px={{ lg: 100 }} pt="5" pb="10">
        <FormHeaders />
        <Flex border="1px solid gray">
            <FormSidebar />
            <VStack flex="1" bg="white" p={7} alignItems="left">
            <Text fontSize={"3xl"}>Post Free Ad</Text>
            
          </VStack>
        </Flex>
    </Box>
  )
}

export default FormBikeAndScooter