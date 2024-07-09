import { Box } from '@chakra-ui/layout'
import React from 'react'

const ContentBox = ({children}) => {
  return (
    <>
      <Box width={['full', 'full', '80%', '80%']} border={'1px solid rgb(54, 54, 54)'} my={8} p={4} borderRadius={'10px'} >
            {children}
        </Box> 
    </>
  )
}

export default ContentBox