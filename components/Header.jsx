import { Button, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import { IoDiamondOutline, IoDocument } from 'react-icons/io5'
import { TbBriefcaseFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import TransitionWrapper from './Transition'

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
                <HStack gap={2}>
                    <Link to="mailto:deependraparmar1@gmail.com" target='_blank'><Button background='purple.100' color={'white'} size={['xs', 'sm', 'sm', 'sm']} _hover={{ backgroundColor: 'purple.200' }} gap={2}>Hire Me <TbBriefcaseFilled /></Button></Link>
                    <Link to="/"><Button size={['xs', 'sm', 'sm', 'sm']} gap={1}>Resume <IoDocument /></Button></Link>
                </HStack>
            </HStack>
        </TransitionWrapper>
    )
}

export default Header
