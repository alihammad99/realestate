import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollBar from "../../components/ImageScrollBar";

const propertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
    externalID,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollBar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size="sm" src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms}
        <FaBed /> | {baths}
        <FaBath /> | {millify(area)} sqft
        <BsGridFill />
      </Flex>
      <Box marginTop="2" marginBottom="2" fontWeight="bold">
        <Text fontSize="xl" marginTop="35">{title}</Text>
        <Text marginTop="15" lineHeight="2" color="gray.500" fontWeight="400" fontSize="sm" >{description}</Text>
      </Box>
      <Flex marginTop="3" color="blue.400" flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
        <Flex paddingBottom="2" borderColor="gray.100" borderBottom="1px" w="300px" justifyContent="flex-start">
            <Text marginRight="1">Type:</Text>
            <Text fontWeight="bold"> {type}</Text>
        </Flex>
        <Flex paddingBottom="2" borderColor="gray.100" borderBottom="1px" w="300px" justifyContent="flex-start">
            <Text marginRight="1">Purpose:</Text>
            <Text fontWeight="bold"> {purpose}</Text>
        </Flex>
        {furnishingStatus && (
            <Flex paddingBottom="2" borderColor="gray.100" borderBottom="1px" w="300px" justifyContent="flex-start">
                <Text marginRight="1">Furnishing:</Text>
                <Text fontWeight="bold"> {furnishingStatus}</Text>
            </Flex>
        )}
      </Flex>
      <Box>
      {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
        <Flex flexWrap='wrap'>
          {amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default propertyDetails;

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
};
