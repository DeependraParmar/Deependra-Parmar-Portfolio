import React from 'react'
import aws from "../src/assets/certificates/aws.png";
import git from "../src/assets/certificates/git.png";
import mern from "../src/assets/certificates/mern.png";
import cpp from "../src/assets/certificates/cpp.jpg";
import js from "../src/assets/certificates/js.jpg";
import java from "../src/assets/certificates/java.jpg";
import alibaba from "../src/assets/certificates/dp_alibaba.jpg";
import cppoops from "../src/assets/certificates/cpp_oops.jpg";
import { AspectRatio, Button, Card, HStack, Image, Text, VStack, position } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LuBadgeCheck } from "react-icons/lu";
import { BsFillRecordFill } from 'react-icons/bs';

const Certifications = () => {
  const certificates = [
    {
      title: 'AWS Cert. Cloud Practitioner',
      description: 'AWS CCP is the most interesting certificate I have ever done. It was a great learning experience.',
      url: aws,
      link: '',
    }
  ];
  return (
    <>
      <HStack position={'relative'} alignItems={'flex-start'} gap={4} justifyContent={'space-evenly'} wrap={'wrap'}  >
        {
          certificates.map((certificate, index) => {
            return (
              <Card mb={4} bg={'#25282c'} w={['full', '45%', '30%', '30%']} key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <AspectRatio>
                  <Image width={'full'} src={certificate.url} alt="certificate" />
                </AspectRatio>

                <VStack p={4} color={'white'} fontSize={'sm'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                  <HStack>
                    <Text color={''} noOfLines={1} fontWeight={'600'}>{certificate.title}</Text>
                    <LuBadgeCheck color='gold' size={16} />
                  </HStack>
                  <Text fontSize={'xs'} color={'gray'} noOfLines={'2'}>{certificate.description}</Text>
                  <Button border={'1px solid black'} _hover={{borderColor: 'red'}} gap={1} mt={2} bg={'black'} color={'white'} size={'sm'}><Link to={certificate.link}>Link</Link> <BsFillRecordFill color='red' /></Button>
                </VStack>
              </Card>
            )
          })
        }
      </HStack>
    </>
  )
}

export default Certifications;