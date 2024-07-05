import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack alignItems={'center'} justifyContent={'space-around'}>
        <Box py={'4'}>
            <Link to={'/'}>Deependra Parmar</Link>
        </Box>
        <Box>
            <Link><Button className='navLink' variant={'ghost'} color={'white'}>Home</Button></Link>
        </Box>
        <Box>
            Hey there
        </Box>
    </HStack>
  )
}

export default Header
