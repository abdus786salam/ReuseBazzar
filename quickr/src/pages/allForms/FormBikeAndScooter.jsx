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
import axios from 'axios'
import FormHeaders from "../../Components/formComponents/FormHeaders";
import FormSidebar from "../../Components/formComponents/FormSidebar";
import ImageInputBox from "../../Components/formComponents/ImageInputBox";
import PostAdPlans from "../../Components/formComponents/PostAdPlans";
import { useNavigate } from "react-router-dom";


const initiaData={
  brand: "",
  model: "",
  year: "",
  condition: "",
  ad_title: "",
  price: "",
  mobile: "",
}

const FormBikeAndScooter = () => {
  const navigate=useNavigate()
  const [image,setImage] = useState("")
  const [data, setData] = useState(initiaData);

  const handleChange = (e) => {
    const { name, value } = e.target;
   
     setData({ ...data, [name]:value });
   
  };

  const handleChangeImage=(e)=>{
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('brand',data.brand)
    formData.append('model',data.model)
    formData.append('year',data.year)
    formData.append('condition',data.condition)
    formData.append('ad_title',data.ad_title)
    formData.append('price',data.price)
    formData.append('mobile',data.mobile)
    formData.append('image',image)
    axios
    .post("http://localhost:8080/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res) => {
      navigate('/')
      setData(initiaData)
      setImage("")
      alert("your post has been posted")
    });
  }

 
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
                      value={data.brand}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Model</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Model"
                      name="model"
                      onChange={handleChange}
                      value={data.model}
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
                      value={data.year}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="sm">Physical Condition</FormLabel>
                    <Input
                      size="sm"
                      placeholder="Physical Condition"
                      name="condition"
                      onChange={handleChange}
                      value={data.condition}
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
                    value={data.ad_title}
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
                      value={data.price}
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
                      value={data.mobile}
                    />
                  </FormControl>
                </HStack>
              </Box>
              {/* left box for image and post button */}
              <Box flex={1}>
                <HStack>
                  <ImageInputBox
                    name="image"
                    onChange={handleChangeImage}
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
