import { Box, Radio, Text, Image, Select, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import CartCarousel from "../component/ImageSliders/CartCarousel";
// import Navbar from "../component/Navbar";
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";
// import { useDispatch, useSelector } from "react-redux";
// import { cartData, takeMeToCart } from "../Redux/action";
import { wrapHandler } from "framer-motion";
import axios from "axios";
import RazorPay from "../../pages/payment/RazorPay";
import { Navbar } from "../Navbar/navbar";


const Cartdata = () => {
//   const cart_Data = useSelector((state) => state.isAuth.cart);
//   console.log(cart_Data, "cartData");
  const [cart_Data,setCart_Data]=useState([])
  const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

   const getcartdata=()=>{
        fetch("https://vercel-unit-6-project.vercel.app/cart")
        .then(res=>res.json())
        .then(res=>setCart_Data(res))
   }
  var bag = 0;
  for (var i = 0; i < cart_Data.length; i++) {
    console.log(cart_Data[i].price);
    bag = bag + cart_Data[i].price * 1;
    //  count++ ;
    console.log(bag, "bag");
  }

  if (bag > 500) {
    var discountedPrice = bag - 2500;
    localStorage.setItem("Price", JSON.stringify(bag));
    localStorage.setItem("DiscountPrice", JSON.stringify(discountedPrice));
  } else {
    discountedPrice = bag;
  }
  const handleDelete = (id) => {
    axios
      .delete(`https://vercel-unit-6-project.vercel.app/cart/${id}`)
      .then((res) => {
        alert("Product is deleted")
        getcartdata()
        // console.log(res);
        // dispatch(cartData());
      })
      .catch((e) => {
        console.log(e);
        getcartdata()
      });
  };
  useEffect(() => {
    getcartdata()
  }, []);

  const handleSelect = (quantity) => {
    setQty(quantity);
  };

//   const handleChange = (id) => {
//     console.log(id);

//     var increase = {
//       qty: qty,
//     };
//     axios
//       .patch(
//         `https://netmeds-server-data.herokuapp.com/api/cart/${id}`,
//         increase
//       )
//       .then((res) => {
//         console.log(res.data);
//         dispatch(cartData());
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

  
  return (
    <>
      <Navbar />
      <Box height={"auto"} bg={"#F3F7FB"}>
        <Box flexWrap="wrap" p={5} width={"80%"} m={"auto"} height={"auto"}>
          <Text>Order Summary</Text>

          <Box display={"flex"} gap="30px"mt="30px">
          <Box bg={"white"} p={0} rounded={5} height={"auto"} width={"100%"}>
            <Text p={5} pb={0} fontSize={"sm"} color={"grey"} mb={0}>
              PRODUCTS
            </Text>
            {console.log(cart_Data, "vvv")}
            {cart_Data.map((el) => (
              <Box 
                key={el._id}
                fontSize={"sm"}
                display={"flex"}
                height={190}
                lineHeight={6}
                borderBottom={"1px solid grey"}
                p={3}
              >
                <Box w="30%">
                  <Image height="80%" mr={10} src={el.image} alt="" />
                </Box>
                <Box>
                  <Text fontSize={"md"} fontWeight={500}>
                    {el.ad_title}
                  </Text>
                  
                  <Box display={"flex"} gap={80}>
                    <Text
                      fontSize={"md"}
                      color={"#EF4290"}
                      fontWeight={500}
                      pt={2}
                    >
                      RS.{el.price}
                    </Text>
                    
                  </Box>
                  <Box display={"flex"}>
                    <Box pr={2} borderRight={"1px solid grey"}>
                      <Text> Delivery between Feb 11 6PM-Feb 18 10PM </Text>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => handleDelete(el.id)}
                        bg={"#F6F6F7"}
                        mr={0}
                        ml={3}
                        size={"sm"}
                      >
                        REMOVE
                      </Button>
                     
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

            <Box
              color={"teal"}
              justifyContent={"space-between"}
              display={"flex"}
              p={4}
            >
              {/* <Text fontSize={"small"} fontWeight={500}>
                ADD MORE ITEMS
              </Text> */}
              {/* <Link to="/wellness/covidEssentials"> */}
                {" "}
                {/* <AddIcon /> */}
              {/* </Link> */}
            </Box>
          </Box>
          <Box>
          <Box  p={5} rounded={"md"} bg={"white"} width={325}>
              <Text color={"#7096C0"} fontSize={"sm"}>
                APPLY PROMOCODE / NMS SUPERCASH
              </Text>
              <Box p={2} display={"flex"} justifyContent={"space-around"}>
                <Radio mr={5} mt={-10} />
                <br></br>
                <Text color={"#7096C0"} fontSize={"sm"}>
                  Apply Promo Code <br></br>
                  <Text>
                    Get flat discount! Vouchers applicable in payment options.
                  </Text>{" "}
                </Text>
                <ChevronDownIcon />
              </Box>
            </Box>
            <Box
            bg={"white"}
            rounded={"md"}
            mt={8}
            p={5}
            pr={8}
            width={470}
            height={300}
          >
            <Text mb={1} color={"grey"} fontSize={"sm"}>
              PAYMENT DETAILS
            </Text>
            <Box
              fontSize={"sm"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text> MRP Total</Text>
              <Text>Rs,{bag}</Text>
            </Box>
            <Box
              fontSize={"sm"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text> ReuseBazaar Discount</Text>
              <Text>-Rs,2500.00</Text>
            </Box>
            <Box
              fontSize={"sm"}
              fontWeight={500}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text>Total Amount*</Text>
              <Text>Rs,{discountedPrice}</Text>
            </Box>
            <Box
              bg={"#F3F8EC"}
              p={2}
              fontWeight={500}
              fontSize={"smaller"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text pl={4} color={"green"}>
                TOTAL SAVINGS Rs.2500
              </Text>
            </Box>

            <Box
              p={2}
              fontWeight={500}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Box>
                <Text fontSize={"xs"}>TOTAL AMOUNT</Text>
                <Text fontSize={"larger"}>Rs,{discountedPrice}</Text>
              </Box>
              <Box>
                  <RazorPay totalprice={discountedPrice}/>
              </Box>
            </Box>
          </Box>
          </Box>
            
          </Box>
        </Box>

        <Box
          display={"flex"}
          gap={8}
          mt={5}
          width={"76%"}
          ml={125}
          height={"auto"}
        >
          

          
        </Box>
      </Box>
    </>
  );
};

export default Cartdata;