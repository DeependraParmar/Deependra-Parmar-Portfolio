import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiArrowUpDoubleLine } from 'react-icons/ri'
import ContentBox from '../components/ContentBox'
import MainWrapper from '../components/MainWrapper'
import Sidebar from '../components/Sidebar'
import About from './About'
import Achievements from './Achievements'
import Certifications from './Certifications'
import CodingProfiles from './CodingProfiles'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'


const Home = () => {
  const [show, setShow] = useState(false);

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

  return (
    <>
      <MainWrapper>
        <Sidebar />
        <ContentBox>
          <Tabs variant={'soft-rounded'}>
            <TabList>
              <Tab>About</Tab>
              <Tab>Education</Tab>
              <Tab>Skills</Tab>
              <Tab>Certifications</Tab>
              <Tab>Achievements</Tab>
              <Tab>Projects</Tab>
              <Tab>Coding&nbsp;Profiles</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <About />
              </TabPanel>

              <TabPanel>
                <Education />
              </TabPanel>

              <TabPanel>
                <Skills />
              </TabPanel>

              <TabPanel>
                <Certifications />
              </TabPanel>

              <TabPanel>
                <Achievements />
              </TabPanel>

              <TabPanel>
                <Projects />
              </TabPanel>

              <TabPanel>
                <CodingProfiles />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ContentBox>
      </MainWrapper>

      <>
        {
          show && <Button _hover={{ bg: '#4a4acc', transform: 'scale(1.1)' }} transition={'all 0.2s ease-in-out'} position={'fixed'} bottom={[8,4]} rounded={'full'} bg={'#675dff'} size={['sm','md']} color={'white'} right={8} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><RiArrowUpDoubleLine size={'20'} /> </Button>
        }
      </>
    </>
  )
}

export default Home
