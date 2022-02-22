import { IconButton, Image, useBreakpointValue } from "@chakra-ui/react"
import Carousel, { CarouselSlideRenderControlProps } from "nuka-carousel"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { IEcosystemFields } from "types/generated/contentful"

const EcosystemSlider = ({
  assets,
}: {
  assets: IEcosystemFields["images"]
}) => {
  const slidesToShow = useBreakpointValue({ base: 2, sm: 3, lg: 4 }, "lg")

  return (
    <Carousel
      wrapAround
      slidesToShow={slidesToShow}
      withoutControls={slidesToShow === 2}
      renderBottomCenterControls={null}
      renderCenterLeftControls={null}
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
        <Image
          key={asset.sys.id}
          src={asset.fields.file.url}
          alt={asset.fields.file.fileName}
          width="150px"
        />
      ))}
    </Carousel>
  )
}

export default EcosystemSlider
