import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import FormHeaders from "../../Components/formComponents/FormHeaders";
import FormSidebar from "../../Components/formComponents/FormSidebar";
import ImageInputBox from "../../Components/formComponents/ImageInputBox";
import PostAdPlans from "../../Components/formComponents/PostAdPlans";

const FormBikeAndScooter = () => {
  const [data,setData] = useState([])
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    condition: "",
    ad_title: "",
    price: "",
    mobile: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value,files } = e.target;
   let newVal=name==="image"?files[0]:value
   console.log("newVal",newVal)
    setFormData({ ...formData, [name]: newVal });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    setData([...data,formData])
  }

  console.log(formData,data);
  return (
    <Box bg="#fafafa" w="100%" px={{ lg: 100 }} pt="5" pb="10">
      <FormHeaders />
      <Flex border="1px solid gray">
        <FormSidebar />
        <VStack flex="1" bg="white" p={7} alignItems="left">
          <Text fontSize={"3xl"}>Post Free Ad</Text>
          <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={10}>
              <Box flex={2} pt={5}>
                <HStack>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Brand Name</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Brand Name"
                      name="brand"
                      onChange={handleChange}
                      value={formData.brand}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Model</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Model"
                      name="model"
                      onChange={handleChange}
                      value={formData.model}
                    />
                  </FormControl>
                </HStack>
                <HStack pt={10}>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Year of Purchase</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Year of Purchase"
                      name="year"
                      onChange={handleChange}
                      value={formData.year}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Physical Condition</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Physical Condition"
                      name="condition"
                      onChange={handleChange}
                      value={formData.condition}
                    />
                  </FormControl>
                </HStack>
                <FormControl pt={10} isRequired>
                  <FormLabel fontSize="sm">Ad Title</FormLabel>
                  <Input
                    size="sm"
                    placeholder="Ad Title"
                    name="ad_title"
                    onChange={handleChange}
                    value={formData.ad_title}
                  />
                </FormControl>
                <HStack pt={10}>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Price</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Price"
                      name="price"
                      onChange={handleChange}
                      value={formData.price}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Mobile Number</FormLabel>
                    <Input
                      size="sm"
                      type="tel"
                      placeholder="Mobile Number"
                      name="mobile"
                      onChange={handleChange}
                      value={formData.mobile}
                    />
                  </FormControl>
                </HStack>
              </Box>
              {/* left box for image and post button */}
              <Box flex={1}>
                <HStack>
                  <ImageInputBox
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
                  />
                </HStack>
                <Box mt="5" border="1px solid lightgray">
                  <Box bg="#d8f0ff" mt="2" py="3" px="5">
                    <h2 fontSize="sm">Type of Ads</h2>
                    <Text fontSize="xs">Please choose the below</Text>
                  </Box>
                  <PostAdPlans />
                </Box>
                <Input
                  cursor="pointer"
                  type="submit"
                  value="Post Ad"
                  bg="#fbeb42"
                  mt="5"
                  h={10}
                />
              </Box>
            </Stack>
          </form>
        </VStack>
      </Flex>
    </Box>
  );
};

export default FormBikeAndScooter;
