import { Button, HStack, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { IoDiamondOutline, IoDocument } from 'react-icons/io5'
import { PiHamburgerFill } from 'react-icons/pi'
import { TbBriefcaseFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import TransitionWrapper from './Transition'
import resume from "../src/assets/resume/resume.pdf"

const Header = () => {
    return (
        <TransitionWrapper>
            <HStack p={3} justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid rgb(54, 54, 54)'}>
                <Link to={'/'}>
                    <HStack>
                        <IoDiamondOutline color='gold' size={'18'} />
                        <Heading fontFamily={'Sofia'} fontSize={['sm', 'md', 'xl', 'xl']}>Deependra Parmar</Heading>
                    </HStack>
                </Link>
                <HStack display={['none','flex','flex','flex']} gap={2}>
                    <Link to="mailto:deependraparmar1@gmail.com" target='_blank'><Button background='purple.100' color={'white'} size={['xs', 'sm', 'sm', 'sm']} _hover={{ backgroundColor: 'purple.200' }} gap={2}>Hire Me <TbBriefcaseFilled /></Button></Link>
                    <Text as={'a'} href={resume} type='image/pdf'><Button size={['xs', 'sm', 'sm', 'sm']} gap={1}>Resume <IoDocument /></Button></Text>
                </HStack>

                <HStack display={['flex','none','none','none']}>
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
