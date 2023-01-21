import React from 'react'
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    List,
    ListItem,
    ListIcon,
  } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const PostAdPlans = () => {
  return (
    <Accordion>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Free Ad
          </Box>
          ₹ 0 / Month
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Visible below Premium Ads & Gold Ads
          </ListItem>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Valid for 5 Weeks
          </ListItem>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            50 Ad views
          </ListItem>
        </List>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
          Premium Ad
          </Box>
          ₹ 199 / Month 
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            3x Responses (Approx 10-30)
          </ListItem>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Visible above all Regular Ads
          </ListItem>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Premium' Tag
          </ListItem>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Priority in search results
          </ListItem>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Priority in alerts
          </ListItem>
          <ListItem fontSize="xs">
            <ListIcon as={MdCheckCircle} color="green.500" />4
            Weeks validity as Premium
          </ListItem>
        </List>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  )
}

export default PostAdPlans