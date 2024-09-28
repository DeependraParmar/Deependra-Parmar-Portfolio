import { Box, Button, HStack, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoDiamondOutline, IoDocument } from 'react-icons/io5'
import { PiHamburgerFill } from 'react-icons/pi'
import { TbBriefcaseFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import TransitionWrapper from './Transition'

import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

import resume from "../src/assets/resume/resume.pdf"
import axios from 'axios'

const Header = () => {
    const [isLiked, setIsLiked] = useState(true);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        const postLike = async () => {
            try {
                const response = await axios.get("http://localhost:4000/like");
                console.log(response.data);
                setLikes(response.data.likes);
                
            } catch (error) {
                console.error("Error posting like:", error);
            }
        };

        postLike();
    }, []);

    return (
        <TransitionWrapper>
            <HStack p={3} justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid rgb(54, 54, 54)'}>
                <Link to={'/'}>
                    <HStack>
                        <IoDiamondOutline color='gold' size={'18'} />
                        <Heading fontFamily={'Sofia'} fontSize={['1rem', 'md', 'xl', 'xl']}>Deependra Parmar</Heading>
                    </HStack>
                </Link>
                <HStack display={['none','flex','flex','flex']} gap={2}>
                    <Button onClick={() => setIsLiked(like => !like)} variant={''} size={['xs', 'sm', 'sm', 'sm']} >
                        <HStack alignItems={'center'} justifyContent={'center'}>
                            <Box>
                                {
                                    isLiked ? <FcLike size={'18'} /> : <FcLikePlaceholder size={'18'} />
                                }
                            </Box>
                            <Text>{likes}</Text>
                        </HStack>
                    </Button>
                    <Link to="mailto:deependraparmar1@gmail.com" target='_blank'><Button background='purple.100' color={'white'} size={['xs', 'sm', 'sm', 'sm']} _hover={{ backgroundColor: 'purple.200' }} gap={2}>Hire Me <TbBriefcaseFilled /></Button></Link>
                    <Text as={'a'} href={resume} type='image/pdf'><Button size={['xs', 'sm', 'sm', 'sm']} gap={1}>Resume <IoDocument /></Button></Text>
                </HStack>

                <HStack display={['flex','none','none','none']}>
                    <Button variant={''} size={['xs', 'sm', 'sm', 'sm']} >{
                        isLiked ? <FcLike size={'18'} /> : <FcLikePlaceholder size={'18'} />
                    }</Button>
                    <Menu>
                        <MenuButton
                            right={2}
                            size={'sm'}
                            as={IconButton}
                            aria-label='Options'
                            icon={<PiHamburgerFill size={'16'} />}
                            variant={'ghost'}
                            bg={'#5141ff'}
                            color={'white'}
                            _hover={{color: 'black', bg: 'white'}}
                            _active={{color: 'black', bg: 'white'}}
                        />
                        <MenuList bg={'#25282c'} border={'none'} >
                            <MenuItem width={'full'} borderRadius={'md'} _hover={{ bg: '#5141ff', color: 'white' }} bg={'#25282c'}>
                                <Link style={{width: '100%'}} to="mailto:deependraparmar1@gmail.com" target='_blank'>
                                <HStack>
                                    <Text fontSize={'sm'}>Hire Me</Text>
                                    <TbBriefcaseFilled />
                                </HStack>
                                </Link>
                            </MenuItem>
                            <MenuItem width={'full'} borderRadius={'md'} _hover={{ bg: '#5141ff', color: 'white' }} bg={'#25282c'}>
                                <Text as={'a'} style={{width: '100%'}} href={resume} type='image/pdf' target='_blank'>
                                    <HStack>
                                        <Text fontSize={'sm'}>Resume</Text>
                                        <IoDocument />
                                    </HStack>
                                </Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </HStack>
        </TransitionWrapper>
    )
}

export default Header
