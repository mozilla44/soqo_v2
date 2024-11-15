import React from 'react';
import { Button, SystemStyleObject, ResponsiveValue } from '@chakra-ui/react';

interface CustomButtonProps {
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
  href?: string;
  marginTop?: ResponsiveValue<string>;
  marginBottom?: ResponsiveValue<string>;
  paddingX?: ResponsiveValue<string>;
  TextColor?: string;
  marginLeft?: ResponsiveValue<string>; // Update type to support responsive values
}

const EmptyButton: React.FC<CustomButtonProps> = ({
  children,
  color = "#2F4F4F",
  borderColor = "#2F4F4F",
  href,
  marginTop,
  marginBottom,
  paddingX,
  marginLeft,
}) => {
  return (
    <Button
      padding="1.2rem"
      cursor="pointer"
      as="a"
      fontWeight="500"
      href={href}
      variant="outline"
      fontSize="1.2rem"
      borderColor={borderColor}
      color={color}
      mt={marginTop}
      mb={marginBottom}
      ml={marginLeft} // Responsive marginLeft is now allowed
      _hover={{
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
        transform: "translateY(-0.09rem)",
      }}
    >
      {children}
    </Button>
  );
};

export default EmptyButton;
