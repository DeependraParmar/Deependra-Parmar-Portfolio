import { Box, Button, Divider, HStack, VStack, useToast } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentBox from '../components/ContentBox';
import MainWrapper from '../components/MainWrapper';
import Sidebar from '../components/Sidebar';
import { tabs } from '../data';


import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Achievements from "./Achievements";
import Projects from "./Projects";
import CodingProfiles from "./CodingProfiles";


const Home = () => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const query = new URLSearchParams(search);
  const parameter = query.get('tab');


  const [show, setShow] = useState(false);
  const [queryParam, setQueryParam] = useState(parameter === null ? "about" : parameter);
  const toast = useToast();
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let images = document.querySelectorAll('img');
    images.forEach(image => {
      image.setAttribute('draggable', false);
    })
  }, []);

  useEffect(() => {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      toast({
        title: 'No right-clicks bro! 😂🙈🙅‍♂️',
        duration: 5000,
        variant: 'left-accent',
        status: 'success',
        id: 'right-click-toast',
        position: 'top-right',
        isClosable: true,
      });
    });
  }, []);

  const changeTab = async(name) => {
    setQueryParam(name);
  }
  
  useEffect(() => {
    navigate(`?tab=${queryParam}`);

  }, [queryParam]);

  return (
    <>
      <MainWrapper>
        <Sidebar />
        <ContentBox>
          <VStack alignItems={'flex-start'} justifyContent={'flex-start'}>
            <HStack gap={2} className='tabmenu' overflowX={'auto'} p={1} alignItems={'center'} justifyContent={'flex-start'} w={'full'}>
              {
                tabs.map((tab, index) => {
                  return <Box onClick={() => changeTab(tab.url)}><Button background={tab.url === queryParam && '#5d5dff'} size={'sm'} variant={''} rounded={'md'} _hover={tab.url !== queryParam && { background: 'gray' }} key={index} >{tab.name}</Button></Box>
                })
              }
            </HStack>
            <Divider borderColor={'rgb(54, 54, 54)'} />
            <Box pt={1}>
              {
                (queryParam === "education") && <Education /> ||
                (queryParam === "skills") && <Skills /> ||
                (queryParam === "certifications") && <Certifications /> ||
                (queryParam === "achievements") && <Achievements /> ||
                (queryParam === "projects") && <Projects /> ||
                (queryParam === "coding-profiles") && <CodingProfiles /> ||
                (queryParam === '' || queryParam || queryParam === "about") && <About />
              }
            </Box>
          </VStack>
        </ContentBox>
      </MainWrapper>

      <>
        {
          show && <Button _hover={{ bg: '#4a4acc', transform: 'scale(1.1)' }} transition={'all 0.2s ease-in-out'} position={'fixed'} bottom={[8, 4]} rounded={'full'} bg={'#675dff'} size={['sm', 'md']} color={'white'} right={8} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><RiArrowUpDoubleLine size={'20'} /> </Button>
        }
      </>
    </>
  )
}

export default Home
