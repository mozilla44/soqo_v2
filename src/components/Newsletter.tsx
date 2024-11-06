import { Box, Flex, Input, Button, transform } from "@chakra-ui/react";
import React, { useState } from "react";
import { Color } from "styles/theme";

interface NewsletterProps {
  inputBorderColor: string;
  inputColor: string;
  btnBgColor: string;
  btnBorderColor: string;
  placeholderColor: string;
}

function emailIsValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Newsletter: React.FC<NewsletterProps> = ({
  inputBorderColor,
  inputColor,
  btnBgColor,
  btnBorderColor,
  placeholderColor,
}) => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<string>();

  const signUp = async () => {
    if (emailIsValid(email)) {
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      }).then((res) => res.json());
      setFeedback("Email enregistré ! Merci :)");
      setEmail("");
    } else {
      setFeedback("Email invalide");
    }
  };

  return (
    <Box width="100%" fontFamily={"Minion Pro"}>
      <Flex
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          signUp();
        }}
      >
        <Input
          borderColor={inputBorderColor}
          _focus={{ border: "none" }}
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          borderRadius="0"
          maxWidth="20rem"
          width="100%"
          _placeholder={{ color: placeholderColor }}
          placeholder="Votre adresse email"
          fontSize="xl"
          color={inputColor}
          backgroundColor="transparent"
        />
        <Button
          type="submit"
          fontFamily={"Minion Pro"}
          fontWeight={"400"}
          backgroundColor={btnBgColor}
          aria-label="Subscribe"
          border={`1px solid ${btnBorderColor}`}
          _hover={{
            backgroundColor: btnBgColor,
            transform: "scale(1.02)",
          }}
          borderRadius="0"
        >
          S&apos;abonner
        </Button>
      </Flex>
      {feedback && (
        <Box mt={2} ml={1} fontSize="lg" color="beige.500">
          {feedback}
        </Box>
      )}
    </Box>
  );
};

export default Newsletter;
