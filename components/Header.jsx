import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HStack p={4} justifyContent={'space-between'} alignItems={'center'} backgroundColor={'#25282c'}>
            <Box>
                Deependra Parmar 
            </Box>
            <HStack gap={4}>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
            </HStack>
        </HStack>
    )
}

export default Header
