import {
  Box,
  Flex,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react"
import Carousel, { CarouselSlideRenderControlProps } from "nuka-carousel"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { IEcosystemFields } from "types/generated/contentful"

const EcosystemSlider = ({
  assets,
}: {
  assets: IEcosystemFields["images"]
}) => {
  const slidesToShow = useBreakpointValue({ base: 2, sm: 3, lg: 5 }, "lg")

  return (
    <Carousel
      wrapAround
      heightMode="max"
      slidesToShow={slidesToShow}
      withoutControls={slidesToShow === 2}
      renderBottomCenterControls={null}
      renderCenterLeftControls={null}
      initialSlideHeight={200}
      renderCenterRightControls={(props: CarouselSlideRenderControlProps) => (
        <IconButton
          color="kaki.500"
          variant="link"
          fontSize="4xl"
          aria-label="Suivant"
          onClick={() => props.nextSlide()}
          icon={<BsArrowRight />}
        />
      )}
    >
      {assets?.map((asset) => (
        <Flex alignItems="center" key={asset.sys.id}>
          <Box>
            <Image
              height="140px"
              width="140px"
              objectFit="contain"
              src={asset.fields.file.url}
              alt={asset.fields.file.fileName}
            />
          </Box>
        </Flex>
      ))}
    </Carousel>
  )
}

export default EcosystemSlider
