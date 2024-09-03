import { Button, HStack, Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import React from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import TransitionWrapper from "../components/Transition";
import cn from "../src/assets/cn.png";
import gfg from "../src/assets/gfg.png";
import hackerrank from "../src/assets/hackerrank.png";
import leetcode from "../src/assets/leetcode.png";


const Coding_Profiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      image: leetcode,
      link: "https://leetcode.com/deependraparmar/",
      colorScheme: 'orange',
    },
    {
      name: "GeeksforGeeks",
      image: gfg,
      link: "https://geeksforgeeks.org/user/deependraparmar1",
      colorScheme: 'green',
    },
    {
      name: "Coding Ninjas",
      image: cn,
      link: "https://www.naukri.com/code360/profile/deependraparmar",
      colorScheme: 'orange',
    },
    {
      name: "HackerRank",
      image: hackerrank,
      link: "https://www.hackerrank.com/profile/deependraparmar1",
      colorScheme: 'green',
    }
  ];

  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, '_blank');
  }

  return (
    <>
      <TransitionWrapper>
        <VStack gap={[2,4]} alignItems={'center'} justifyContent={'flex-start'}>
          <HStack mt={4} alignItems={'flex-start'} gap={4} justifyContent={'center'} wrap={'wrap'}>
            {
              profiles.map((profile, index) => {
                return (
                  <VStack cursor={'pointer'} border={'1px solid #25282c'} onClick={e => handleClick(e, profile.link)} bg={'#25282c'} gap={4} transition={'all 0.4s ease-in-out'} _hover={{ transform: 'translateY(-10px)', border: '1px solid', borderColor: profile.colorScheme }} p={4} borderRadius={'10px'} key={index} width={['45%', '40%', '20%', '22%']}>

                    <Image objectFit={'cover'} filter={'saturate(150%)'} borderRadius={'full'} width={'full'} src={profile.image} bg={'#25282c'} />
                    <Text fontWeight={'600'} fontSize={['sm', 'lg']}>{profile.name}</Text>
                    <Link to={profile.link} target='_blank'><Button gap={1} size={['xs','sm']} colorScheme={profile.colorScheme}>Profile <LuExternalLink size={16} /> </Button></Link>

                  </VStack>
                )
              })
            }

            <VStack gap={4} alignItems={'flex-start'} bg={'#25282c'} w={['95%','94%']} borderRadius={'10px'} p={4}>
              <Text fontSize={['xl','2xl']} textAlign={'center'} w={'full'} fontFamily={'Sofia'} textDecoration={'underline'} color={'orange'}>Coding Summary</Text>
              <UnorderedList fontSize={['sm','md']}>
                <ListItem>Consistently coding from last <span className="highlight">{Math.floor((new Date() - new Date('2023-11-25')) / (1000 * 60 * 60 * 24))
                }🔥</span> days. <span className="highlight-code"><Link target='_blank' to={'https://github.com/DeependraParmar'}>View here</Link></span> </ListItem>
                <ListItem>Solved <span className="highlight">320+</span> Coding Interview DSA Problems across all the platforms.</ListItem>
                <ListItem>Solved <span className="highlight">780+</span> problems on <span className="highlight-code"><Link target='_blank' to={'https://www.naukri.com/code360/profile/deependraparmar'}>Coding Ninjas</Link></span> with about <span className="highlight">500+</span> Interview MCQ's and <span className="highlight">200+</span> Interview Coding Questions.</ListItem>
                <ListItem>Solved <span className="highlight">80+</span> problems on <span className="highlight-code"><Link target='_blank' to={'https://leetcode.com/deependraparmar'}>LeetCode</Link></span>.</ListItem>
                <ListItem>Solved <span className="highlight">60+</span> problems on <span className="highlight-code"><Link target='_blank' to={'https://geeksforgeeks.com/user/deependraparmar1'}>GeeksforGeeks</Link></span>.</ListItem>
                <ListItem>Solved <span className="highlight">30+</span> beginner-level problems on <span className="highlight-code"><Link target='_blank' to={'https://www.hackerrank.com/profile/deependraparmar1'}>HackerRank</Link></span>. I also own 5⭐ C++ and 3⭐ Problem Solving Badge on HackerRank.</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
        </VStack>
      </TransitionWrapper>
    </>
  )
}

export default Coding_Profiles;