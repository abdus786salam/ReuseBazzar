import { Box, Button, Checkbox, Flex, Image, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiFilter } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../../redux/category/action";
import { Navbar } from "../Navbar/navbar";


function Subcategory(){
    const {param}=useParams()
    console.log(param)
//   const [sliderValue, setSliderValue] = useState(6);
   
  const cat_data = useSelector((store) => store.category.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    //if i dont have any books in redux,then make the api call
    // if (location || books.length === 0) {
    //   const sortBy = searchParams.get("sort");
    //   const getBookParms = {
    //     params: {
    //       category: searchParams.getAll("category"),
    //       _sort: sortBy && "release_year",
    //       _order: sortBy,
    //     },
    //   };
      dispatch(getProducts(param));
    
  },[cat_data.length, dispatch])


    return (
        <Box>
            <Navbar/>
          {/* <Subnavbar /> */}
          <Flex pr="8%" pl="8%" gap="3%">
            <Box w="30%" h="200px">
              <Flex mt="1rem" mb="1rem" justifyContent="space-between">
                <Flex>
                  <CiFilter size="30px" />
                  <Text size="lg">Filters</Text>
                </Flex>
                <Button border="1px solid #e6e6e6" bg="none">
                  Reset
                </Button>
              </Flex>
    
              <Box border="1px solid #e6e6e6" p="8%">
                <Text>CHOOSE RENTAL TENURE</Text>
                
              </Box>
    
              <Box border="1px solid #e6e6e6" p="8%" mt="2rem">
                <Text fontSize="lg" mb="1rem">
                  PRODUCT TYPE
                </Text>
                   
                   <Box>
                      
                      <Text>8GB RAM i7 processor</Text>
                      <Text>4GB RAM i5 processor</Text>
                      <Text>Office Work</Text>
                      <Text>Student</Text>
                      <Text>Normal use</Text>
                    </Box>
                {/* <Text fontSize="lg" mb="1rem">
                    Sort 
                </Text>
                 <Button >Low to high</Button>
                 <Button>High to low</Button> */}
              </Box>
    
              <Box p="8%" border="1px solid #e6e6e6" mt="2rem">
                <Text fontSize="lg">AVAILABILITY</Text>
    
                <Checkbox mt="1rem" defaultChecked value="Out of Stock">
                  Out of Stock
                </Checkbox>
              </Box>
            </Box>
            <Box w="100%" mb="250px">
              <Box p="0.8%" w="16%" mt="1rem" mb="1rem" bg="#FAFAFA">
                <Flex justifyContent="space-between">
                  {/* <Text fontSize="lg" textTransform="capitalize">
                    {para}
                  </Text> */}
                  <Link to={`/${param}`}>
                    <AiOutlineClose size="25px" />
                  </Link>
                </Flex>
              </Box>
              <SimpleGrid columns={[2, 2, 3]} columnGap="5%" rowGap="1%">
                {cat_data.map((prod) => (
                  <Box
                    bg="white"
                    border="1px solid #e6e6e6"
                    className="hoverproductbox"
                  >
                    <Link to={`/${param}/${prod._id}`}>
                      <Box h="270px">
                        <Image
                          src={prod.image}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        ></Image>
                        
                      </Box>
  


                      <Box p="5%">
                        <Text fontSize="lg" textOverflow="ellipsis">
                          {prod.ad_title}
                        </Text>
                        {/* <Divider
                          mt="3%"
                          mb="3%"
                          orientation="horizontal"
                          bg="red"
                        /> */}
                        <Flex justifyContent="space-between">
                          <Text fontSize="lg">Price:- ₹{prod.price}</Text>
                          {/* <Text>{prod.days} days</Text> */}
                        </Flex>
                      </Box>
                    </Link>
                    <Box className="hoverCartbutton" m="15px">
                      <Button
                        w="100%"
                        borderRadius="15px"
                        // onClick={() => Carthandler(prod)}
                        bg="none"
                        border="1px solid skyblue"
                        color="skyblue"
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      );

}
export {Subcategory}