import { HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { PiGraduationCapLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import profile from "../src/assets/me.png";

const Sidebar = () => {
    return (
        <>
            <VStack width={['full', 'full', '30%', '30%']} borderRadius={'10px'} mx={[0,0,0,2]} my={[2,2,2,8]} p={4}>
                <VStack width={'full'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                    <Stack flexDirection={['row','row','column','column']} alignItems={['flex-start','','','center']} justifyContent={'center'} gap={4}>
                        <Image width={['38%','40%','90%','90%']} name="Deependra Parmar" src={profile} />
                        <VStack height={'full'} alignItems={'flex-start'} justifyContent={'center'} gap={['1','1','1','1']}>
                            <Heading fontSize={['xl', 'xl', '2xl', '3xl']}>Deependra Parmar</Heading>
                            <Text color={'gray'} fontSize={['xs', 'xs', 'sm', 'md']} fontWeight={'semibold'}>@deependraparmar</Text>
                            <Text color={'gray'} fontSize={['xs','xs','sm','md']}>Full Stack Engineer from India, trying to be the best version of myself by being persistent, consistent & passionate.</Text> <br />
                        </VStack>
                    </Stack>

                    <VStack fontSize={['sm','sm','sm','md']} justifyContent={'flex-start'} alignItems={'flex-start'}>
                        <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><IoLocationOutline size={18} /><Text>India</Text> <Image position={'relative'} width={'30px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1280px-Flag_of_India.png'  /></HStack>
                        <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><PiGraduationCapLight size={18} /><Text noOfLines={1}>AITR, Indore</Text> </HStack>
                        <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><AiOutlineMail size={18} /><Link to={'mailto:deependraparmar1@gmail.com'} target='_blank' >deependraparmar1@gmail.com</Link></HStack>
                        <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><FiGithub size={18} /><Link to={'https://github.com/DeependraParmar'} target='_blank' >DeependraParmar</Link></HStack>
                        <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><FaLinkedinIn size={18} /><Link to={'https://www.linkedin.com/in/deependraparmar'} target='_blank' >deependraparmar</Link></HStack>
                        <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><FiTwitter size={18} /><Link to={'https://www.x.com/_deependra05'} target='_blank' >_deependra05</Link></HStack>
                        <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><BsGlobe size={18} /><Link to={'https://deependraparmar.vercel.app'} target='_blank' >deependraparmar.vercel.app</Link></HStack>
                    </VStack>
                </VStack>
            </VStack>
        </>
    )
}

export default Sidebar
