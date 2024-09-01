import { Button, HStack, VStack, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentBox from '../components/ContentBox';
import MainWrapper from '../components/MainWrapper';
import Sidebar from '../components/Sidebar';
import { tabs } from '../data';


const Home = () => {
  const [show, setShow] = useState(false);
  const toast = useToast();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const queryParam = query.get("tab");
  const navigate = useNavigate();

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

  const changeTab = (name) => {
      navigate(name);
  }

  return (
    <>
      <MainWrapper>
        <Sidebar />
        <ContentBox>
          <VStack>
            <HStack alignItems={'center'} justifyContent={'flex-start'} w={'full'}>
              {
                tabs.map((tab, index) => {
                  return <>
                    {
                      tab.url.split('=')[1] === queryParam ? <Button size={'sm'} variant={''} rounded={'md'} backgroundColor={'#5d5dff'} key={index} onClick={() => changeTab(tab.url)}>{tab.name}</Button> : <Button size={'sm'} variant={''} rounded={'md'} _hover={{ background: 'gray' }} key={index} onClick={() => changeTab(tab.url)}>{tab.name}</Button>
                    }
                  </>
                })
              }
            </HStack>
            {
              
            }
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
