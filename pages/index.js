import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";
import Hero from "../components/Hero";
import Flat from "../public/flat.jpg";

const Banner = ({
  puropse,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m={20}>
    <Image src={imageUrl} width={500} height={300} alt="Banner" />
    <Box p="5">
      <Text color="gray-500" fontSize="sm" fontWeight="medium">
        {puropse}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray-700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <Box>
      <Hero />
      <Banner
        puropse="RENT A HOME"
        title1="Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl={Flat}
      />

      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.title} />
        ))}
      </Flex>
      <Banner
        puropse="BUY A HOME"
        title1="Find, Buy, & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.title} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
      propertiesForSale: propertyForSale?.hits,
    },
  };
}
