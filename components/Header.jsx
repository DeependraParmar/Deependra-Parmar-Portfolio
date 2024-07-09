import { HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import { IoDiamondOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HStack p={3} justifyContent={'space-between'} alignItems={'center'} backgroundColor={'#25282c'}>
            <Link to={'/'}>
                <HStack>
                    <IoDiamondOutline color='gold' size={'18'} />
                    <Heading fontFamily={'Sofia'} fontSize={'xl'}>Deependra Parmar...</Heading>
                </HStack>
            </Link>
            <HStack gap={4}>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
            </HStack>
        </HStack>
    )
}

export default Header
