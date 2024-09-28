import { HStack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [views, setViews] = useState(0);

  useEffect(() =>  {
    const pageViews = async () => {
      try {
        const response = await axios.get("http://localhost:4000/add-request");
        console.log(response.data);
        setViews(response.data.views);

      } catch (error) {
        console.error("Error posting like:", error);
      }
    };

    pageViews();
  }, []);

  return (
    <>
          <HStack justifyContent={'center'} py={[2,4]} color={'gray'} fontSize={['sm','sm']} bg={'#25282c'}>
              <Text>Deependra Parmar © 2024-25 | </Text>
              <Text>Unique Page Views: <span style={{color: 'whitesmoke'}}>{views}</span></Text>
      </HStack>
    </>
  )
}

export default Footer
