import { Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <>
      <VStack gap={4} fontSize={['xs','xs','sm','md']} alignItems={'flex-start'}>
        <Text>Hey everyone 👋, I am <span className="highlight">Deependra Parmar</span>, a final year B.Tech. student persuing Computer Science & Information Technology (2021-25) from <span className="highlight">Acropolis Institute of Technology & Research, Indore.</span></Text>
        <Text>I am a very curious person. I always have a keen curiosity of how the things, technologies and tools around which the life moves works. This quality of mine has always benefitted me and helped me to learn things better, easier and faster.</Text>
        <Text>Who knew that the average but curious student in class 10th, who wanted to become a Chemistry Teacher will end up being a Full Stack Enginner at the end of his graduation. My journey took the U-turn when I got to choose <span className="highlight">#Information_Practices</span> in my class 11th. The way I am today is the result of that decision of mine. During the two years i.e. in class 11th and 12th, I got to learn a lot of things about computer hardware, software, information, security, data and a programming language <span className="highlight">Python.</span> </Text>
        <Text>With the passage of time, I started developing interest in programming as soon as I got to undestand the syntax and logic behind programming. Then, I never stopped. Time went by and covid period arrived. I realised that I am having a lot of time to explore the device resting on my table. I randomly searched on youtube, "Best Computer Science Careers for Future" and the number one option I got was a <span className="highlight">Web Developer.</span></Text>
        <Text>Then what? I started searching for what a web developer does? what are the best resources? Is it really for me? and so on. Finally, I started learning the core technologies behind web, understood how web works and how to develop web-applications.</Text> <br />

        <Text>Through my never-ending journey of consistent learning, I got to understand few of the most important life lesson which I think, I will never forget throughout my life.</Text>
        <UnorderedList pl={4}>
          <ListItem>Life is a teacher and you are a life-long student. Person who stays student forever survives.</ListItem>
          <ListItem>Motivation could be the spark to the fuel but Discipline is the real fire.</ListItem>
          <ListItem>Happiness is a Choice and you should choose to be happy.</ListItem>
        </UnorderedList>
      </VStack>
    </>
  )
}

export default About
