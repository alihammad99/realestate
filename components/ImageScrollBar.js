import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu
    style={{ overflow: "hidden" }}
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
  >
    {data.map((item) => (
      <Box width="920px" height="200px" itemId={item.id} overflow="hidden" p="1" key={item.id}>
        <Image
          sizes="(max-width:500px) 500px, (max-width:1023px) 500px, 1000px"
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width={600}
          layout="fill"
          alt="property"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
