import { Image } from '@chakra-ui/image';
import { AspectRatio, Box, Button, Container, Flex, HStack, Icon, SimpleGrid, Tag, Text, Tooltip, VStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
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
import maxcoach from "../src/assets/projects/14_maxcoach.png";
import taskilio from "../src/assets/projects/15_taskilio.png";

const Projects = () => {
  const projectsList = [
    {
    title: 'Taskilio: A SaSS Application',
    description: 'Taskilio is an organizational sass application with task management, team management, and more features.',
    cover: taskilio,
    techStack: ['NextJS', 'Prisma', 'Stripe', 'Mongo'],
    url: 'https://github.com/DeependraParmar/Taskilio.git',
    live: 'https://taskilio.vercel.app/',

  },
    {
    title: 'Coursify: The Ultimate LMS',
    description: 'Coursify is a highly secure web-based LMS with advanced instructor verification, administrative tools, management and more.',
    cover: coursify,
    techStack: ['ChakraUI', 'MERN', 'Redux', 'JWT'],
    url: 'https://github.com/DeependraParmar/Coursify-UI.git',
    live: 'https://coursify-frontend.vercel.app/',

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
    title: 'EzyCart: An E-commerce Application',
    description: "This is an e-commerce application's Admin dashboard with product listings, charts and more.",
    cover: dashboard,
    techStack: ['ReactJS', 'TypeScript', 'MERN'],
    url: 'https://github.com/DeependraParmar/EzyCart-UI',
    live: 'https://ezy-cart.vercel.app/admin/dashboard',
  },
  {
    title: 'CryptoGraphix',
    description: 'A Crypto-application which shows all the coins, exchanges, their real-time prices in multi-currency formats..',
    cover: cryptographix,
    techStack: ['ReactJS', 'Axios', 'CoinGecko'],
    url: 'https://github.com/DeependraParmar/CryptoGraphix',
    live: 'https://cryptographix.vercel.app',
  },
  {
    title: 'Yuvaantar',
    description: 'Yuvaantar is a tech-based club at CSIT@AITR. This is the website for the clubs showing events and registration links.',
    cover: yuvaantar,
    techStack: ['ReactJS', 'SaSS'],
    url: 'https://github.com/DeependraParmar/Yuvaantar',
    live: 'https://yuvaantar.vercel.app/',
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
    title: 'Deependra Parmar 2.0',
    description: 'This is my personal portfolio website showcasing my skills, expertise, projects, achievements and more.',
    cover: portfolio1,
    techStack: ['ChakraUI', 'React', 'Vite'],
    url: 'https://github.com/DeependraParmar/Deependra-Parmar-Portfolio',
    live: 'https://deependraparmar.vercel.app/',
  },
  {
    title: 'Deependra Parmar 1.0',
    description: 'This is my personal portfolio website showcasing my skills, expertise, projects, achievements and more.',
    cover: portfolio2,
    techStack: ['ReactJS', 'SaSS'],
    url: 'https://github.com/DeependraParmar/DeependraParmarPortfolio',
    live: 'https://deependra-parmar.vercel.app/',
  },
  {
    title: 'AwesomeUI',
    description: 'This is a frontend of a UI Library website which provides amazing re-usable components of ReactJS.',
    cover: awesomeui,
    techStack: ['HTML', 'TailWindCSS'],
    url: 'https://github.com/DeependraParmar/AwesomeUi',
    live: 'https://ultimatetodo.vercel.app/',
  },
  {
    title: 'BM Developers',
    description: 'BM Developers is a website for a software-developer firm made in ReactJS with fully-responsive frontend.',
    cover: bmdevs,
    techStack: ['ReactJS', 'TailwindCSS', 'SaSS'],
    url: 'https://github.com/DeependraParmar/BM-Developers',
    live: 'https://bmdevelopers.netlify.app/',
  },
  {
    title: 'IPHM',
    description: 'Informatics Practices Hindi Me is the website for my first youtube channel for notes, resources and more.',
    cover: iphm,
    techStack: ['HTML', 'CSS', 'JS', 'MongoDB'],
    url: 'https://github.com/DeependraParmar/InformaticsPracticesHindiMe',
    live: 'https://learnlogics.github.io',
  },
  {
    title: 'MaxCoach Landing Page',
    description: 'This is the landing page for MaxCoach. com which I created when I was learning HTML & CSS',
    cover: maxcoach,
    techStack: ['HTML', 'CSS'],
    url: 'https://github.com/DeependraParmar/MaxCoach-Internship',
    live: 'https://maxcoach-internship.vercel.app/',
  },
  {
    title: 'WordX',
    description: 'WordX is a powerful text-based tranformation tool which allows multiple utility with extension based file downloading.',
    cover: wordx,
    techStack: ['ReactJS', 'Bootstrap'],
    url: 'https://github.com/DeependraParmar/WordX',
    live: 'https://wordxbydp.netlify.app/',
  },
  ];

  return (
    <TransitionWrapper>
      <Container maxW="7xl" mx="auto" px={['0','3']}>
        <SimpleGrid columns={[1, 3]} spacing={4} mt={4}>
          {projectsList.map((project, index) => (
            <TransitionWrapper>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                cover={project.cover}
                techStack={project.techStack}
                url={project.url}
                live={project.live}
              />
            </TransitionWrapper>
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