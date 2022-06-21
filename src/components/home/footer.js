import React from 'react'
import {
    Box,
    Text,
    Heading,
    Container,
    Link,
    Button,
    useColorModeValue,
    Image,
  } from "@chakra-ui/react";

function Footer() {
  const bgColor = useColorModeValue('lavender', 'gray.900')
  const shadowColor = useColorModeValue("#E6E6FA", "#171923");
  return (
    <Box bg={bgColor} boxShadow={`0 0 5px 1px ${shadowColor}`}>
        <Container maxW='container.md' h='200px' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
          <Text fontWeight='300'>Made with love by The Cell Dev</Text>
          <Text fontWeight='200' fontSize='12px' mt='10px'>Copyright @ 2022</Text>
        </Container>
    </Box>
  )
}

export default Footer