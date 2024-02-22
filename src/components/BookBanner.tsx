import { Box, Container, IconButton, Stack, Text ,Link} from '@chakra-ui/react'
import { FiX } from 'react-icons/fi'

const BookBanner = () => {
    return(
        <Box as="section"  /* position="absolute" */ top="0" position="sticky" zIndex="10">
          <Box borderBottomWidth="1px" bg="#FFE32C" /* h="2.5rem" */ w="100vw" display="flex" p="0.3rem" alignItems="center" justifyContent="center">
                  <Text color="black" fontSize="1.2rem"  fontFamily="Minion Pro">
                  Notre Livre Blanc sur les relations associations-entreprises est disponible,&nbsp;<Link href="/livre-blanc" style={{textDecoration :"underline",fontWeight: "bold",cursor: "pointer"}}>cliquez-ci</Link>&nbsp;pour le télécharger !
                  </Text>
          </Box>
        </Box>
      )
}

export default BookBanner