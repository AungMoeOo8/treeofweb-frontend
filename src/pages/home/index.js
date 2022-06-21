import React from "react";
import { Container } from "@chakra-ui/react";
import MainText from "../../components/home/mainText";
import Services from "../../components/home/services";
import Footer from "../../components/home/footer";

function HomePage() {
  return (
    <>
      <Container maxW="container.xl">
        <MainText />
        <Services />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
