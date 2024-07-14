import { Image } from '@chakra-ui/image';
import { AspectRatio, Box, Button, Container, Flex, HStack, Icon, SimpleGrid, Tag, Text, Tooltip, VStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillRecordFill } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import TransitionWrapper from '../components/Transition';

import coursify from "../src/assets/projects/01_coursify.png";
import twitter from "../src/assets/projects/02_twitter.png";
import portfolio1 from "../src/assets/projects/03_portfolio.png";
import portfolio2 from "../src/assets/projects/04_portfolio.png";
import cryptographix from "../src/assets/projects/05_cryptographix.png";
import awesomeui from "../src/assets/projects/06_awesomeui.png";
import bmdevs from "../src/assets/projects/07_bmdevs.png";
import iphm from "../src/assets/projects/08_iphm.png";
import wordx from "../src/assets/projects/09_wordx.png";
import yuvaantar from "../src/assets/projects/10_yuvaantar.png";
import todo from "../src/assets/projects/11_todo.png";
import dashboard from "../src/assets/projects/12_admindashboard.png";
import proton from "../src/assets/projects/13_proton.png";
import maxcoach from "../src/assets/projects/14_maxcoach.png";

const Projects = () => {
  const projectsList = [{
    title: 'Coursify: The Ultimate LMS',
    description: 'Coursify is a highly secure web-based LMS with advanced instructor verification, administrative tools, management and more.',
    cover: coursify,
    techStack: ['ChakraUI', 'MERN', 'Redux', 'JWT'],
    url: 'https://github.com/DeependraParmar/Coursify-UI.git',
    live: 'https://coursify-frontend.vercel.app/',

  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Twitter: A Social Media App',
    description: 'This is a twitter clone with tweet, comment, follow, notification services and much more.',
    cover: twitter,
    techStack: ['NextJS', 'Prisma', 'Zustand', 'Mongo'],
    url: 'https://github.com/DeependraParmar/Twitter',
    live: 'https://twitter-dp.vercel.app',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'Todo with Auth',
    description: 'This is a notebook app which will help you to crate notes for your daily work with authentication.',
    cover: todo,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/Todo-Frontend',
    live: 'https://ultimatetodo.vercel.app/',
  },
  ];

  return (
    <TransitionWrapper>
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
              live={project.live}
            />
          ))}
        </SimpleGrid>
      </Container>
    </TransitionWrapper>
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
  const { title,description, cover, techStack, url, live } = props;

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

        <VStack py={2} px={4} spacing={2} align="start" w="100%">
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