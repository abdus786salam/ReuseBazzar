
import { ChevronDownIcon } from "@chakra-ui/icons"
import {Box,Flex, Heading, Image, Input,Icon, Text, Button, InputGroup, InputRightElement, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider} from "@chakra-ui/react"

function Subnavbar(){


 return (
    <>
     <Flex h="40px" bg="skyblue" textAlign="center" justifyContent="center">
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                MOBILES
            </MenuButton>
            <MenuList gap="8%" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup  title="Mobile Phones"  fontSize="lg" textAlign="left">
                    <MenuItem>Used Mobile</MenuItem>
                    
                    <MenuGroup title="Top Mobile(used)" mt="50px" fontSize="lg" textAlign="left">
                      <MenuItem>Used iphone 7</MenuItem>
                      <MenuItem>Used iphone 6</MenuItem>
                      <MenuItem>Used Redmi Note 4</MenuItem>

                    </MenuGroup>
                    
                </MenuGroup>
                <MenuGroup title="Top Brands(Used/New)" fontSize="lg" textAlign="left">
                    <MenuItem>Samsung Mobiles</MenuItem>
                    <MenuItem>Iphones</MenuItem>
                    <MenuItem>Mi Mobiles</MenuItem>
                    <MenuItem>Motorola mobiles</MenuItem>
                    <MenuItem>LG Phones</MenuItem>
                 <MenuGroup title="Shop By choice" mt="50px" fontSize="lg" textAlign="left" >
                      <MenuItem>4G Ready</MenuItem>
                      <MenuItem>Selfie Phones</MenuItem>
                      <MenuItem>Great Battery Life</MenuItem>
                      <MenuItem>High RAM</MenuItem>
                    </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Tablets" fontSize="lg" textAlign="left">
                    <MenuItem>Android Tablets</MenuItem>
                    <MenuItem>4G Tablets</MenuItem>
                    <MenuGroup title="Wearable Devices" mt="50px" fontSize="lg" textAlign="left">
                        <MenuItem>Smart Bands</MenuItem>
                        <MenuItem>Smart Watches</MenuItem>
                    </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Mobile Accessories" fontSize="lg" textAlign="left">
                    <MenuItem>Headsets</MenuItem>
                    <MenuItem>Earphones</MenuItem>
                    <MenuItem>Memory Cards</MenuItem>
                   <MenuGroup title="Shop By Budget">
                     <MenuItem>Below 6000</MenuItem>
                     <MenuItem>6000-10,000</MenuItem>
                   </MenuGroup>
                </MenuGroup>

            </MenuList>
          
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                FURNITURE & DECOR
            </MenuButton>
            <MenuList gap="8%" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup title="All Furniture" fontSize="lg" textAlign="left">
                    <MenuItem>Used Furniture</MenuItem>
                    <MenuItem>Refurbished Furniture</MenuItem>
                    <MenuItem>Brand New Furniture</MenuItem>
                    <MenuItem>Unboxed Furniture</MenuItem>
                    <MenuGroup title="Bed Room" fontSize="lg" textAlign="left" mt="40px">
                    <MenuItem>Bed Sets</MenuItem>
                    <MenuItem>Mattresses</MenuItem>
                    <MenuItem>Bedside Tables</MenuItem>
                    <MenuItem>Dressing Tables</MenuItem>
                    <MenuItem>Wardrobes & Showcases</MenuItem>
                    <MenuItem>Almirahs</MenuItem>
                   </MenuGroup>
                </MenuGroup>
              
                <MenuGroup title="Living Room" fontSize="lg" textAlign="left">
                    <MenuItem>sofa Sets</MenuItem>
                    <MenuItem>Diwans</MenuItem>
                    <MenuItem>TV Units</MenuItem>
                    <MenuItem>Sofa Cum Bed</MenuItem>
                    <MenuItem>Recliners</MenuItem>
                    <MenuItem>Shoe Racks</MenuItem>
                    <MenuItem>Center Tables</MenuItem>
                    <MenuItem>Bean Bags</MenuItem>
                    <MenuItem>Folding Chairs</MenuItem>
                    <MenuItem>Benches</MenuItem>
                    <MenuItem>Jhula</MenuItem>
                </MenuGroup>
                <MenuGroup title="Dinning Room" fontSize="lg" textAlign="left">
                    <MenuItem>Dinning Table</MenuItem>
                    <MenuItem>Dinning Chairs</MenuItem>
                    <MenuItem>Cabinets</MenuItem>
                    <MenuGroup title="Office Furniture" fontSize="lg" textAlign="left" mt="30px">
                      <MenuItem>Office Cahirs</MenuItem>
                      <MenuItem>Office Tables</MenuItem>
                      <MenuItem>Conference Tables</MenuItem>
                      <MenuItem>Computer Tables</MenuItem>
                   </MenuGroup>
                   <MenuGroup title="Kids Furniture" fontSize="lg" textAlign="left" mt="30px">
                      <MenuItem>Beds</MenuItem>
                      <MenuItem>Cradle & Cots</MenuItem>
                      <MenuItem>Chairs</MenuItem>
                   </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Bar Furniture" fontSize="lg" textAlign="left">
                    <MenuItem>Bar Units & Cabinets</MenuItem>
                    <MenuItem>Bar Chairs & Stools</MenuItem>
                    
                    <MenuGroup title="Study Room" fontSize="lg" textAlign="left" mt="40px">
                      <MenuItem>Book Shelves</MenuItem>
                      <MenuItem>Study Table</MenuItem>
                   </MenuGroup>
                   
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                ELECTRONICS
            </MenuButton>
            <MenuList gap="5%" aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup title="Television" fontSize="lg" textAlign="left" >
                    <MenuItem>LED Full HD</MenuItem>
                    <MenuItem>HD Ready</MenuItem>
                    <MenuItem>LED Ultra HD</MenuItem>
                    <MenuItem>OMLED</MenuItem>
                    <MenuItem>Curved TV</MenuItem>
                  <MenuGroup title="TVs By Screen Size" fontSize="lg" textAlign="left" mt="40px">
                    <MenuItem>Below 32 inch</MenuItem>
                    <MenuItem>32 inche To 39  inch</MenuItem>
                    <MenuItem>40 inch To 47 inch</MenuItem>
                    <MenuItem>48 inch To 54 inch</MenuItem>
                    <MenuItem>55 inch & Above</MenuItem>
                   </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Laptops &  Desktop" fontSize="lg" textAlign="left">
                    <MenuItem>Laptops</MenuItem>
                    <MenuItem>Desktops</MenuItem>
                    <MenuItem>2 in 1 Laptops</MenuItem>
                    <MenuGroup title="Playstation Consoles" fontSize="lg" textAlign="left" mt="40px">
                     <MenuItem>Sony PS4</MenuItem>
                     <MenuItem>Sony PS3</MenuItem>
                     <MenuItem>XBox</MenuItem>
                     <MenuItem>Sony Playstation</MenuItem>
                   </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Cameras" fontSize="lg" textAlign="left">
                    <MenuItem>DSLR Cameras</MenuItem>
                    <MenuItem>SLR Cameras</MenuItem>
                    <MenuItem>Camera Accessories</MenuItem>
                    <MenuItem>Camera Lenses</MenuItem>
                    <MenuItem>Digital Cameras</MenuItem>
                    <MenuGroup title="Computer Accessories" fontSize="lg" textAlign="left" mt="40px">
                      <MenuItem>Routers</MenuItem>
                      <MenuItem>CPU</MenuItem>
                      <MenuItem>RAM</MenuItem>
                      <MenuItem>Motherboard</MenuItem>
                      <MenuItem>Graphics Card</MenuItem>
                   </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Audio & Video" fontSize="lg" textAlign="left">
                    <MenuItem>Home Theater</MenuItem>
                    <MenuItem>DVD & Blu-Ray Players</MenuItem>
                    <MenuItem>Projector</MenuItem>
                    <MenuGroup title="Storage" mt="40px" fontSize="lg" textAlign="left">
                      <MenuItem>External Heard Drives</MenuItem>
                      <MenuItem>Pen Drives</MenuItem>
                      <MenuItem>Printer</MenuItem>
                   </MenuGroup>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                HOME APPLIANCES
            </MenuButton>
            <MenuList gap="8%"  aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup title="Refrigerators" fontSize="lg" textAlign="left">
                    <MenuItem>Single Door</MenuItem>
                    <MenuItem>Double Door</MenuItem>
                    <MenuItem>Multi Door</MenuItem>
                    <MenuItem>Stabilizers</MenuItem>
                    <MenuItem>Small Fridge</MenuItem>

                    <MenuGroup title="Washing Machines" fontSize="lg" textAlign="left" mt="30px">
                      <MenuItem>Semi Autometic</MenuItem>
                      <MenuItem>Fully Autometic</MenuItem>
                       <MenuItem>Top Load</MenuItem>                    
                  
                </MenuGroup>
                  
                </MenuGroup>
                <MenuGroup title="Air conditioners" fontSize="lg" textAlign="left">
                    <MenuItem>Split ACs</MenuItem>
                    <MenuItem>Window ACs</MenuItem>
                    <MenuItem>Coolers</MenuItem>
                    <MenuItem>Table Fans</MenuItem>
                    <MenuItem>Ceiling Fans</MenuItem>
                </MenuGroup>
                <MenuGroup title="Kitchen Appliances" fontSize="lg" textAlign="left">
                    <MenuItem>Water Purifiers</MenuItem>
                    <MenuItem>Mixer/Grinder/Juicer</MenuItem>
                    <MenuItem>Induction Cook Tops</MenuItem>
                    <MenuItem>Dish Washers</MenuItem>
                    <MenuItem>Electric Cookers</MenuItem>
                    <MenuItem>Coffe Makers</MenuItem>
                </MenuGroup>
                <MenuGroup title="Small Appliances" fontSize="lg" textAlign="left">
                    <MenuItem>Microwaves & OTG</MenuItem>
                    <MenuItem>Air Purifiers</MenuItem>
                    <MenuItem>Irons</MenuItem>
                    <MenuItem>Vacuum Cleaners</MenuItem>
                    <MenuItem>Room Heaters</MenuItem>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                KIDS & TOYS
            </MenuButton>
            <MenuList gap="8%"  aria-orientation="horizontal" display="flex" w="1000px">
                <MenuGroup title="Baby and Infant" fontSize="lg" textAlign="left">
                    <MenuItem>Prams Walkers And Strollers</MenuItem>
                    <MenuItem>Cradle & Cots</MenuItem>
                    <MenuItem>Chairs</MenuItem>
                    <MenuItem>Bedding</MenuItem>
                    <MenuItem>Baby Carriers</MenuItem>
                    <MenuItem>Baby Car Seats</MenuItem>
                </MenuGroup>
                <MenuGroup title="Toys & Games" fontSize="lg" textAlign="left">
                    <MenuItem>Games & Puzzles</MenuItem>
                    <MenuItem>Soft toys</MenuItem>
                    <MenuItem>Toy Vehicles</MenuItem>
                    <MenuItem>Remote Control Toys</MenuItem>
                    <MenuItem>Educational Toys</MenuItem>
                    <MenuItem>Music Toys</MenuItem>
                    <MenuItem>Inflatable Toys</MenuItem>
                </MenuGroup>
                <MenuGroup title="Kids Learning" fontSize="lg" textAlign="left">
                    <MenuItem>Kids Story Books</MenuItem>
                    <MenuItem>Kids Rhymes</MenuItem>
                    <MenuItem>Binoculars</MenuItem>
                    <MenuItem>Telescopes</MenuItem>
                    <MenuItem>microcopes</MenuItem>
                    <MenuItem>Abacus</MenuItem>
                </MenuGroup>
                <MenuGroup title="Kids Bicycles" fontSize="lg" textAlign="left">
                    <MenuItem>Tricycles</MenuItem>
                    <MenuItem>Kids Bicyles</MenuItem>
                    <MenuItem>Kids Battery Car</MenuItem>
                    <MenuGroup title="Baby Products" fontSize="lg" textAlign="left" mt="30px">
                     <MenuItem>Baby Feeding Items</MenuItem>
                     <MenuItem>Breast Pump Sets</MenuItem>
                     <MenuItem>Diaper And Napies</MenuItem>
                   </MenuGroup>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>
        <Menu >
            <MenuButton bg="none" _hover={{bg:"none"}} _expanded={{ bg: 'none' }} as={Button} rightIcon={<ChevronDownIcon />}>
                SPORTS,HOBBIES & FASHION
            </MenuButton>
            <MenuList  aria-orientation="horizontal" display="flex" w="1000px" gap="8%">
                <MenuGroup title="Sports Equipment" fontSize="lg" textAlign="left">
                    <MenuItem>Badminton</MenuItem>
                    <MenuItem>Basketball</MenuItem>
                    <MenuItem>Cricket Bat & Kit</MenuItem>
                    <MenuItem>Camping & Hiking</MenuItem>
                    <MenuItem>Pool snooker</MenuItem>
                    <MenuItem>Skating</MenuItem>
                    <MenuItem>Swimming</MenuItem>
                    <MenuItem>Tennis</MenuItem>
                </MenuGroup>
                <MenuGroup title="Fitness Equipment" fontSize="lg" textAlign="left">
                    <MenuItem>Treadmeal</MenuItem>
                    <MenuItem>Bicycle & Accessories</MenuItem>
                    <MenuItem>Elliptical & Crosstrainers</MenuItem>
                    <MenuItem>Exercise Bikes</MenuItem>
                    <MenuItem>Dumbbells</MenuItem>
                    <MenuItem>Barbells</MenuItem>
                    <MenuGroup title="Books & Hobbies" fontSize="lg" textAlign="left" mt="40px">
                     <MenuItem>Books & Magzines</MenuItem>
                     <MenuItem>Coins & Stamps</MenuItem>
                     <MenuItem>Collections</MenuItem>
                     <MenuItem>Music & Movies</MenuItem>
                    </MenuGroup>
                </MenuGroup>
                <MenuGroup title="Fashion" fontSize="lg" textAlign="left">
                    <MenuItem>Clothing</MenuItem>
                    <MenuItem>Watches</MenuItem>
                    <MenuItem>Jewellery</MenuItem>
                    <MenuItem>Fashion Accessories</MenuItem>
                    <MenuItem>Health & Beauty</MenuItem>
                    <MenuItem>Gifts & Stationary</MenuItem>
                </MenuGroup>
                <MenuGroup title="Musical Instruments" fontSize="lg" textAlign="left">
                    <MenuItem>Drums</MenuItem>
                    <MenuItem>Flute</MenuItem>
                    <MenuItem>Guitar</MenuItem>
                    <MenuItem>Harmonica</MenuItem>
                    <MenuItem>Keyboard & Syntesizers</MenuItem>
                    <MenuItem>Harmonium</MenuItem>
                    <MenuItem>Piano</MenuItem>
                    <MenuItem>Trumphet</MenuItem>
                </MenuGroup>

            </MenuList>
            {/* <MenuList bg="yellow" > */}

            {/* </MenuList> */}
            {/* <MenuList bg="green" > */}

            {/* </MenuList> */}
        </Menu>

        

     </Flex>
    </>
 )


}
export {Subnavbar}