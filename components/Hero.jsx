import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Dubai from "../public/dubai.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <Box
    className="hero-image-container"
      mb={20}
      color="white"

    >
      <Image
        layout="fill"
        placeholder="blur"
        objectFit="cover"
        src={Dubai}
        alt="Dubai"
      />
      <Text className="hero-text">RENT / BUY HOUSES, FLATS, & MORE ...</Text>
      <Heading className="hero-title">
        Welcome
        <br />
        To Dubai
      </Heading>
    </Box>
  );
};

export default Hero;
