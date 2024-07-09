import { Box } from '@chakra-ui/layout'
import React from 'react'

const ContentBox = ({children}) => {
  return (
    <>
          <Box width={['full', 'full', '80%', '80%']} background={'#25282c'} height={['','','83vh','83vh']} mx={2} my={8} borderRadius={'10px'} >
            {children}
        </Box> 
    </>
  )
}

export default ContentBox