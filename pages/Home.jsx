import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import ContentBox from '../components/ContentBox'
import MainWrapper from '../components/MainWrapper'
import Sidebar from '../components/Sidebar'
import About from './About'
import Achievements from './Achievements'
import Certifications from './Certifications'
import CodingProfiles from './CodingProfiles'
import Contact from './Contact'
import Education from './Education'
import MyPassion from './MyPassion'
import Projects from './Projects'
import Skills from './Skills'


const Home = () => {
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
              <Tab>Coding Profiles</Tab>
              <Tab>My Passion</Tab>
              <Tab>Contact</Tab>
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

              <TabPanel>
                <MyPassion />
              </TabPanel>

              <TabPanel>
                <Contact />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ContentBox>
      </MainWrapper>
    </>
  )
}

export default Home
