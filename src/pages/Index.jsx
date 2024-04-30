import { Box, VStack, Heading, Text, Button, Link } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={10} w="100vw" h="100vh">
      <VStack spacing={20}>
        <Heading as="h1" size="2xl">Welcome to My Portfolio</Heading>
        <Text fontSize="xl">Explore my projects, learn about my background, and get in touch!</Text>

        <Box as="section" p={10} shadow="xl" borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg">About Me</Heading>
          <Text mt={4}>I am a passionate developer with a knack for building web applications. My journey in tech started from a young age and has been driven by my curiosity about how things work.</Text>
        </Box>

        <Box as="section" p={10} shadow="xl" borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg">Portfolio</Heading>
          <Text mt={4}>Here you'll find a selection of projects I've worked on. Stay tuned for updates!</Text>
        </Box>

        <Box as="section" p={10} shadow="xl" borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg">Contact</Heading>
          <VStack spacing={3} mt={4}>
            <Link href="mailto:example@example.com" isExternal>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
                Email Me
              </Button>
            </Link>
            <Link href="https://github.com" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="solid">
                LinkedIn
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;