import {
  Box,
  Button,
  Circle,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import { BsFillRecordFill } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { FiBarChart2, FiCheckCircle, FiHome, FiPackage } from 'react-icons/fi';
import { Link } from "react-router-dom";
import TransitionWrapper from '../components/Transition';

const Milestones = () => {
  const linkColor = 'gold';
  const linkHoverColor = 'goldenrod';

  return (
    <Container maxW="7xl" p={{ base: 2, sm: 10 }}>
      <VStack fontSize={['sm','md']} textAlign="start" align="start" mb={5} gap={8}>
        <TransitionWrapper>
          <Text fontSize={['lg', 'xl']} textAlign={'center'} color={'gold'} width={'full'} fontFamily={'Sofia'}>"Everything you learn is a Achievement & anywhere you reach is a Milestone."</Text>
        </TransitionWrapper>

        <TransitionWrapper>
          <HStack width={'full'} justifyContent={'space-evenly'} alignItems={'flex-start'} wrap={'wrap'}>
            <VStack _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'} cursor={'pointer'} bg={'#25282c'} alignItems={'flex-start'} w={['95%', '95%', '30%', '30%']} border={'1px solid'} borderColor={'#25282c'} borderRadius={'10px'} p={4}>
              <Text fontWeight={'600'} noOfLines={1} color={'gold'}>Winner @Wittyhacks3.0</Text>
              <Text noOfLines={5} fontSize={'xs'}>Won the Central India's Biggest Hackathon <span className="highlight">Wittyhacks 3.0</span> held at NMIMS, Indore. Received $10,000 DigitalOcean Credits & ₹17501/- cash.</Text>
              <Button gap={2} _hover={{ bg: 'black', borderColor: 'red' }} border={'1px solid black'} size={'xs'} bg={'black'} color={'white'}><Link target='_blank' to={'https://github.com/DeependraParmar/AirIQ-Wittyhacks'}>See Project</Link> <BsFillRecordFill color='red' /></Button>
            </VStack>

            <VStack _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'} cursor={'pointer'} bg={'#25282c'} alignItems={'flex-start'} w={['95%', '95%', '30%', '30%']} border={'1px solid'} borderColor={'#25282c'} borderRadius={'10px'} p={4}>
              <Text fontWeight={'600'} noOfLines={1} color={'gold'}>Acad. Excellence Awardee</Text>
              <Text noOfLines={5} fontSize={'xs'}>Start from the Semester 01 of B.Tech., I have been the topper of my branch every single semester consecutively and got award from the Chairman, AITR.</Text>
              <Button gap={2} _hover={{bg: 'black',borderColor: 'red'}} border={'1px solid black'} size={'xs'} bg={'black'} color={'white'}><Link to={'https://www.linkedin.com/in/deependraparmar'} target='_blank'>Glimpse</Link> <BsFillRecordFill color='red' /></Button>
            </VStack>

            <VStack _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'} cursor={'pointer'} bg={'#25282c'} alignItems={'flex-start'} w={['95%', '95%', '30%', '30%']} border={'1px solid'} borderColor={'#25282c'} borderRadius={'10px'} p={4}>
              <Text fontWeight={'600'} noOfLines={1} color={'gold'}>3X Chairman Scho. Holder</Text>
              <Text fontSize={'xs'}>I have been 3X awarded with Chairman's Scholarship Award, AITR for Academic Excellence, Attendence and Overall Performance throughout.</Text>
              <Button gap={2} _hover={{bg: 'black',borderColor: 'red'}} border={'1px solid black'} size={'xs'} bg={'black'} color={'white'}><Link to={'https://www.linkedin.com/in/deependraparmar'} target='_blank'>Glimpse</Link> <BsFillRecordFill color='red' /></Button>
            </VStack>
          </HStack>
        </TransitionWrapper>

        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <MilestoneItem icon={FaTools}>
              Learnt{' '}
              <Link
                to="https://www.typescriptlang.org"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Typescript
              </Link>{' '}
              and{' '}
              <Link
                to="https://nextjs.org"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Next.js
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiPackage}>
              Published 3 posts on my portfolio website{' '}
              <Link
                to="https://mahmad.me/blog"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Blog
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiPackage}>
              Published or contributed to{' '}
              <Link
                to="https://mahmad.me/open-source"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                20+ open-source repositories
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiBarChart2}>
              Collected 34k+ posts views and 1.5k+ total reactions on{' '}
              <Link
                to="https://dev.to/m_ahmad"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Dev.to
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiHome} skipTrail>
              Rebuilt my portfolio website with React, ChakraUI and Framer-motion,{' '}
              <Link
                to="https://github.com/MA-Ahmad/myPortfolio"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                source on Github
              </Link>
              .
            </MilestoneItem>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};


const MilestoneItem = ({
  icon = FiCheckCircle,
  color = 'gold',
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {;
  return (
    <TransitionWrapper>
      <Flex minH={20} {...props}>
        <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
          <Circle
            size={[10, 12]}
            bg={'#25282c'}
            border={'1px solid'}
            borderColor={color}
          />
          <Box as={icon} size={"1.20rem"} color={color} pos="absolute" left={["0.7rem", "0.875rem"]} top={["0.7rem", "0.875rem"]} />
          {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
        </Flex>
        <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
          {children}
        </Box>
      </Flex>
    </TransitionWrapper>
  );
};

export default Milestones;