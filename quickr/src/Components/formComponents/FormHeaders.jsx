import React from 'react'
import {
    Box,
    HStack,
    Image,
    Spacer,
    Link,
    MenuButton,
    MenuList,
    MenuItem,
    Menu,
    
  } from "@chakra-ui/react";
  import { Link as ReactLink } from "react-router-dom";
  import { ChevronDownIcon } from "@chakra-ui/icons";

const FormHeaders = () => {
  return (
   
    <HStack>
        <Box>
          <Link as={ReactLink} to="/">
            <Image
              src="https://user-images.githubusercontent.com/101567617/213376453-2316aeb0-5717-44a8-899e-f51ec9bf8adc.png"
              w="200px"
            ></Image>
          </Link>
        </Box>
        <Spacer />
        <HStack>
          <Link
            _hover={{ color: "blue", textDecoration: "underline" }}
            as={ReactLink}
            to="/login"
          >
            Sign in/Register
          </Link>
        </HStack>
        <span>|</span>
        <HStack>
          <Link
            _hover={{ color: "blue", textDecoration: "underline" }}
            as={ReactLink}
            to="/help"
          >
            Help
          </Link>
        </HStack>
        <span>|</span>
        <HStack>
          <Menu>
            <MenuButton
              _hover={{ color: "blue", textDecoration: "underline" }}
              as={Link}
              rightIcon={<ChevronDownIcon />}
            >
              Language
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem>हिंदी</MenuItem>
              <MenuItem>اردو</MenuItem>
              <MenuItem>മലയാളം</MenuItem>
              <MenuItem>मराठी</MenuItem>
              <MenuItem>ગુજરાતી</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
  )
}

export default FormHeaders