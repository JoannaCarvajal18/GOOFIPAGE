// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ image, name, category, avatars, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column">
      <Box
        mb="20px"
        position="relative"
        borderRadius="15px"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="300px" // Fixed height for consistent image size
      >
        <Image
          src={image}
          alt={name}
          objectFit="cover"
          boxSize="100%" // Ensures the image fills the container
          borderRadius="15px"
        />
        <Box
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          borderRadius="15px"
        ></Box>
      </Box>
      <Flex direction="column">
        <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
          {name}
        </Text>
        <Text fontSize="xl" color={textColor} fontWeight="bold" mb="10px">
          {category}
        </Text>
        <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
