import { Image } from '@chakra-ui/image';
import { AspectRatio, Box, Button, Container, Flex, HStack, Icon, SimpleGrid, Tag, Text, Tooltip, VStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillRecordFill } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import coursify from "../src/assets/01_coursify.png";

const Projects = () => {
  const projectsList = [{
    title: 'Coursify: The Ultimate LMS',
    description: 'Coursify is a highly secure web-based LMS with advanced instructor verification, administrative tools, management and more.',
    cover: coursify,
    language: 'JavaScript',
    techStack: ['ChakraUI', 'MERN', 'Redux', 'JWT'],
    url: 'https://github.com/DeependraParmar/Coursify-UI.git',
    live: 'https://coursify-frontend.vercel.app/',
    stargazers_count: 7,
    forks_count: 25
  },
  {
    title: 'Notebook',
    description: 'This is a notebook app which will help you to crate notes for your daily work.',
    cover: '/assets/images/repositories/notebook_app.png',
    language: 'Javascript',
    techStack: ['react', 'typescript'],
    url: 'https://github.com/MA-Ahmad/notebook',
    live: 'https://ma-ahmad.github.io/notebook',
    stargazers_count: 19,
    forks_count: 8
  }
  ];

  return (
    <Container maxW="7xl" mx="auto">
      <SimpleGrid columns={[1, 3]} spacing={4} mt={4}>
        {projectsList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            cover={project.cover}
            techStack={project.techStack}
            url={project.url}
            stargazers_count={project.stargazers_count}
            live={project.live}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}


const LazyImage = (props) => {
  const { src, width, height, size, layout, rounded } = props;

  return (
    <Image
      src={src}
      objectFit="cover"
      alt="cover image"
      width={width}
      height={height}
      size={size}
      layout={layout}
      rounded={rounded}
    />
  );
};

const ProjectCard = (props) => {
  const { title,description, cover, techStack, url, stargazers_count, live } = props;

  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <Box cursor="pointer" size="xl" _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'}>
      <VStack
        rounded="xl"
        bg={'#25282c'}
        _hover={{
          shadow: 'lg',
          textDecoration: 'none'
        }}
        overflow="hidden"
        align="start"
        spacing={4}
      >
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={16/9}
            w="100%"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
          >
            <LazyImage src={cover} />
          </AspectRatio>
        </Box>

        <VStack py={2} px={[2, 4]} spacing={2} align="start" w="100%">
          <Flex justifyContent="space-between" width="100%">
            <Tooltip hasArrow label="Github link" placement="top">
              <HStack>
                <Icon color={'white'} as={FiGithub} boxSize="0.9em" mt="1px" />
                <Text
                  fontSize="sm"
                  noOfLines={1}
                  color={'white'}
                  fontWeight="600"
                  align="left"
                  onClick={(e) => handleLinkClick(e, url)}
                >
                  {title}
                </Text>
              </HStack>
            </Tooltip>
            <Flex color={'white'} alignItems="center">
              <Icon as={AiOutlineStar} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="1" fontSize="sm">
                {stargazers_count}
              </Box>
            </Flex>
          </Flex>
          <Text color={'gray'} fontSize={'xs'} noOfLines={2}>{description}</Text>
          <Flex justifyContent="space-between" width="100%">
            <Box>
              <HStack spacing="1">
                {techStack.map((tech, index) => (
                  <Tag key={index} size="sm" color={'white'} colorScheme="purple">
                    <Text fontSize={['0.55rem', 'inherit', 'inherit']}>{tech}</Text>
                  </Tag>
                ))}
              </HStack>
            </Box>
          </Flex>

          <Button mt={4} border={'1px solid black'} background={'black'} color={'white'} size={'sm'} onClick={e => handleLinkClick(e, live)} gap={2} _hover={{border: '1px solid red'}}>Live <BsFillRecordFill color='red' /> </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Projects