import React from 'react'
import TransitionWrapper from "../components/Transition";
import leetcode from "../src/assets/leetcode.png";
import gfg from "../src/assets/gfg.png";
import cn from "../src/assets/cn.png";
import hackerrank from "../src/assets/hackerrank.png";
import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LuExternalLink } from 'react-icons/lu';

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
        <HStack mt={4} alignItems={'flex-start'} gap={[4,6]} justifyContent={'center'} wrap={'wrap'}>
          {
            profiles.map((profile, index) => {
              return (
                <VStack cursor={'pointer'} border={'1px solid #25282c'} onClick={e => handleClick(e, profile.link)} bg={'#25282c'} gap={4} transition={'all 0.4s ease-in-out'} _hover={{transform: 'translateY(-10px)', border: '1px solid', borderColor: profile.colorScheme}} p={4} borderRadius={'10px'} key={index} width={['95%','40%','20%', '22%']}>
                  <Image filter={'saturate(150%)'} borderRadius={'full'} width={48} height={'48'} src={profile.image} bg={'#25282c'} />
                  <Text fontWeight={'600'} fontSize={['sm','lg']}>{profile.name}</Text>
                  <Link to={profile.link} target='_blank'><Button gap={1} size={'sm'} colorScheme={profile.colorScheme}>Visit <LuExternalLink size={18} /> </Button></Link>
                </VStack>
              )
            })
          }
        </HStack>
      </TransitionWrapper>
    </>
  )
}

export default Coding_Profiles
