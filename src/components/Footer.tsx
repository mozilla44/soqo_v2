// components/Footer.tsx
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Link,
  SimpleGrid,
  IconButton,
  Divider,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import EcoIndexBadge from "./EcoIndexBadge";

type FooterProps = {
  bgColor: string;
  textColor: string;
  imageSrc: string;
  dividerColor: string;
  iconColor: string;
  iconBgColor: string;
};

interface Article {
  title: string;
  url: string;
}

const Footer: React.FC<FooterProps> = ({
  bgColor,
  textColor,
  imageSrc,
  dividerColor,
  iconColor,
  iconBgColor,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles'); // Fetching from the proxy API
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();

        // Extract and format the articles
        const items = Object.values(data.items)
          .slice(0, 5)
          .map((item: any) => ({
            title: item.titre,
            url: item.url,
          }));
          console.log('Formatted articles:', items);
        setArticles(items);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Box as="footer" bg={bgColor} color={textColor} py={0} fontFamily={"Minion Pro"} >
      <Box position="relative">
        <Flex align="center" justify="center" position="relative" >
          <Divider borderColor={dividerColor} flex="1" />
          <Box
          
            position="relative"
            p={2}
            mx={4}
            bg={iconBgColor}
            borderRadius="full"
            zIndex={1}
          >
            {imageSrc && (
              <Image
                src={imageSrc}
                alt="Logo"
                boxSize="6rem"
                objectFit="contain"
              />
            )}
          </Box>
          <Divider borderColor={dividerColor} flex="1" />
        </Flex>
      </Box>

      <Container maxW="6xl" mt={"0"}>
        <SimpleGrid columns={[1, 2, 4]} spacing={0}>
        <Stack align="flex-start">
            <Text fontWeight="bold" mb={2} mt={"2rem"} fontSize={"2xl"}>
              Nous suivre
            </Text>
            <HStack spacing={4} >
              <IconButton
                as="a"
                href="https://www.instagram.com/soqo.fr/"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme={iconColor}
                bg={iconBgColor}
                boxSize="50px"
                fontSize="2.5rem"
              />
              <IconButton
                as="a"
                href="https://fr.linkedin.com/company/soqo-fr"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                colorScheme={iconColor}
                bg={iconBgColor}
                boxSize="50px"
                fontSize="2.5rem"
              />
            </HStack>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold" fontSize={"2xl"} mb={2} marginTop={{base:"2rem"}}>
              Société à mission
            </Text>
            <Link fontSize={"xl"} href="/projets">Projets à impact</Link>
            <Link fontSize={"xl"} href="/projets_evenements">Événements responsables</Link>
            <Link fontSize={"xl"} href="/le-qlub">Le Qlub</Link>
            <Link fontSize={"xl"} href="/adn#team">Nous rejoindre</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" mb={2} fontSize={"2xl"} marginTop={{base:"2rem"}}>
              Ressources
            </Text>
            <Link fontSize={"xl"} href="/livre-blanc">Livre Blanc</Link>
            <Link fontSize={"xl"} href="/blog">Blog</Link>
            <Link fontSize={"xl"} href="/parlons_nous">Contact</Link>
            <Link fontSize={"xl"} href="/faq">FAQ</Link>
          </Stack>

          <Stack align="flex-start"  maxWidth={{md:"25rem",base:"85%"}}>
            <Text fontWeight="bold"  mb={2} fontSize={"2xl"} marginTop={{base:"2rem"}}>
              Nos derniers articles
            </Text>
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <Link key={index} fontSize={"xl"}  textDecoration={"underline"}noOfLines={1} href={article.url} isExternal>
                  {article.title}
                </Link>
              ))
            ) : (
              <Text fontSize={"xl"}>Loading...</Text>
            )}
          </Stack>

         
        </SimpleGrid>
      </Container>

      <Divider my={8} borderColor={dividerColor} />

      <Container maxW="6xl" pb={"1rem"}>
        <Stack direction="row" justify="center" spacing={8}>
          <Link href="/mentions-legales" fontSize="md">
            Mentions légales
          </Link>
          <Link href="/confidentialite" fontSize="md">
            Politique de confidentialité
          </Link>
        </Stack>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center" pb={"2rem"}>
        <EcoIndexBadge />
      </Box>
    </Box>
  );
};

export default Footer;
