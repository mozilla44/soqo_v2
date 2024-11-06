import { extendTheme } from "@chakra-ui/react"

export const enum Color {
  KAKI = "#163A2C",
  YELLOW = "#FFE32D",
  BEIGE = "#EFE6D4",
  BLUE = "#E3F1FD",
}

export const sokoTheme = extendTheme({
  colors: {
    kaki: {
      "50": "#4CBB90",
      "100": "#43B086",
      "200": "#38936F",
      "300": "#2C7559",
      "400": "#215842",
      "500": Color.KAKI,
      "600": "#07110D",
      "700": "#000000",
      "800": "#000000",
      "900": "#000000",
    },
    yellow: {
      "50": "#FFFBE5",
      "100": "#FFF9D0",
      "200": "#FFF3A7",
      "300": "#FFEE7F",
      "400": "#FFE856",
      "500": Color.YELLOW,
      "600": "#F4D300",
      "700": "#BCA300",
      "800": "#847200",
      "900": "#4C4200",
    },
    beige: {
      "50": "#FFFFFF",
      "100": "#FFFFFF",
      "200": "#FFFFFF",
      "300": "#FFFFFF",
      "400": "#FFFFFF",
      "500": Color.BEIGE,
      "600": "#EDE1BD",
      "700": "#E1CD91",
      "800": "#D5B965",
      "900": "#C9A539",
    },
    blue: {
      "50": "#FFFFFF",
      "100": "#FFFFFF",
      "200": "#FFFFFF",
      "300": "#FFFFFF",
      "400": "#FFFFFF",
      "500": Color.BLUE,
      "600": "#B3D6F6",
      "700": "#80BBF0",
      "800": "#4EA0EB",
      "900": "#1C85E5",
    },
  },
})
