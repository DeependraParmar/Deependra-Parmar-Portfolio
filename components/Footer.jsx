import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
          <HStack justifyContent={'center'} py={[2,4]} color={'gray'} fontSize={['sm','sm']} bg={'#25282c'}>
              <Text>Deependra Parmar © 2024-25</Text>
      </HStack>
    </>
  )
}

export default Footer
