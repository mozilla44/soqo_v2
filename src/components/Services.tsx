import React from "react";
import { Box, Flex, Heading, Wrap, WrapItem, Badge } from "@chakra-ui/react";
import { Color } from "styles/theme";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface Service {
  id: string;
  title?: string; 
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <Box bg={Color.KAKI} textAlign="center" p={"2rem 0 2rem 0"}>
      <Flex justifyContent={{ base: "center", md: "flex-start" }} mb={8}>
        <Heading as="h2" ml={{ base: 0, md: "7.2rem" }} fontSize={{md:"5xl", base:"3xl"}} color={Color.BEIGE} fontFamily={"Minion Pro"} fontWeight={'thin'}>
          Nos services
        </Heading>
      </Flex>

      <Box display={{ base: "none", md: "block" }} maxWidth="100vw" margin={"1rem"}>
        <Wrap spacing={4} justify="center">
          {services.map((service) => (
            <WrapItem key={service.id}>
              <Badge
                variant="outline"
                borderRadius="full"
                px={4}
                py={2}
                borderColor={Color.BEIGE}
                color="white"
                fontSize="1.1rem"
                fontWeight={200}
                fontFamily={"Minion Pro"}
                textTransform="none"
              >
                {service.title}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      <Box display={{ base: "block", md: "none" }} maxWidth="100vw" margin={"1rem"}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={900}
          allowTouchMove
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <Badge
                variant="outline"
                borderRadius="full"
                px={4}
                py={2}
                borderColor={Color.BEIGE}
                color="white"
                fontSize="1.1rem"
                fontWeight={200}
                fontFamily={"Minion Pro"}
                textTransform="none"
                display="inline-block"
              >
                {service.title}
              </Badge>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Services;
