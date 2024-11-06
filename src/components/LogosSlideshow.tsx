import React, { useState, useEffect } from "react";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { Color } from "../styles/theme";

interface LogosSlideshowProps {
  items: { name: string; imageUrl: string }[];
  paddingTop?: string;
  paddingBottom?: string;

  bgColor: string;
  borderBottom?: string;
}

const LogosSlideshow: React.FC<LogosSlideshowProps> = ({
  items,
  paddingTop,
  paddingBottom,
  bgColor,
  borderBottom,
}) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const calculatedSlidesToShow = useBreakpointValue({ base: 2, md: 5 });

  useEffect(() => {
    if (calculatedSlidesToShow) {
      setSlidesToShow(calculatedSlidesToShow);
    }
  }, [calculatedSlidesToShow]);

  if (!items.length) return <div>No logos available</div>;

  const carouselHeight = "150px";

  return (
    <Box
      id="carousel_container"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={bgColor}
      width="100%"
      paddingBottom={paddingBottom}
      paddingTop={paddingTop || "1rem"}
      height={carouselHeight}
      borderBottom={borderBottom}
    >
      <Carousel
        autoplay
        autoplayInterval={2000}
        slidesToScroll={4}
        speed={1300}
        dragging={true}
        withoutControls
        wrapAround={true}
        pauseOnHover={false}
        slidesToShow={slidesToShow}
        disableEdgeSwiping
        enableKeyboardControls={true}
        style={{ height: carouselHeight, width: "100%" }} 
      >
        {items.map((item, index) => (
          <Box
            key={index}
            margin={"auto"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={carouselHeight} 
            width={`auto`}
            boxSizing="border-box"
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              height="200%" 
              objectFit="contain"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default LogosSlideshow;
