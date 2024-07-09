import React from 'react'
import Sidebar from '../components/Sidebar'
import ContentBox from '../components/ContentBox'
import MainWrapper from '../components/MainWrapper'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
