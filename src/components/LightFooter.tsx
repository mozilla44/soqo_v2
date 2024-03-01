import { Box, Link } from "@chakra-ui/react"
import { Color } from "styles/theme"

const LightFooter = () => {
    return (
        <Box
        height="14rem"
        backgroundRepeat="repeat-x"
        backgroundImage="url(/assets/footer.svg)"
      >
        <Box pt={1} textAlign="right" maxWidth="container.xl" marginX="auto">
          <Link
            px={1}
            py={1}
            color="beige.500"
            backgroundColor={Color.KAKI}
            href="/mentions-legales"
          >
            Mention légales
          </Link>
        </Box>
      </Box>
    )
}

export default LightFooter