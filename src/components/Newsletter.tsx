import { CheckIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, Input } from "@chakra-ui/react"
import React, { useState } from "react"

function emailIsValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState<string>()

  const signUp = async () => {
    if (emailIsValid(email)) {
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      }).then((res) => res.json())
      setFeedback("Email enregistré ! Merci :)")
    } else {
      setFeedback("Email invalide")
    }
  }

  return (
    <Box width="100%">
      <Flex
        as="form"
        onSubmit={(e) => {
          e.preventDefault()
          signUp()
        }}
      >
        <Input
          _focus={{ border: "none" }}
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          borderRightRadius="none"
          maxWidth="20rem"
          width="100%"
          _placeholder={{ color: "kaki.500" }}
          placeholder="S'inscrire à la newsletter"
          fontSize="xl"
          color="kaki.500"
          backgroundColor="beige.500"
        />
        <IconButton
          type="submit"
          _hover={{
            color: "kaki.500",
            backgroundColor: "beige.500",
            borderColor: "beige.500",
          }}
          border="2px solid"
          backgroundColor="kaki.500"
          aria-label="S'inscrire"
          borderLeftRadius="none"
          icon={<CheckIcon />}
        />
      </Flex>
      {feedback && (
        <Box mt={2} ml={1} fontSize="lg" color="beige.500">
          {feedback}
        </Box>
      )}
    </Box>
  )
}

export default Newsletter
