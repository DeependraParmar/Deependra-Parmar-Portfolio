import { AspectRatio, Button, Card, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillRecordFill } from 'react-icons/bs';
import { LuBadgeCheck } from "react-icons/lu";
import { Link } from 'react-router-dom';
import aws from "../src/assets/certificates/aws.png";
import cpp from "../src/assets/certificates/cpp.jpg";
import cppoops from "../src/assets/certificates/cpp_oops.jpg";
import alibaba from "../src/assets/certificates/dp_alibaba.jpg";
import git from "../src/assets/certificates/git.png";
import java from "../src/assets/certificates/java.jpg";
import js from "../src/assets/certificates/js.jpg";
import mern from "../src/assets/certificates/mern.png";
import postman from "../src/assets/certificates/postman.png";
import TransitionWrapper from '../components/Transition';

const Certifications = () => {
  const certificates = [
    {
      title: 'AWS Cert. Cloud Practitioner',
      description: 'AWS CCP is the most interesting certificate I have ever done. It was a great learning experience.',
      url: aws,
      link: 'https://drive.google.com/file/d/1ATSWmv37dAlIeRI3F3gbe5yW5qCoULYk/view?usp=sharing',
      issuer: 'AWS'
    },
    {
      title: 'Full Stack MERN Dev Course',
      description: 'This course was a great learning experience. I learned a lot about MERN stack, testing, devops and much more.',
      url: mern,
      link: '',
      issuer: '100xDevs'
    },
    {
      title: 'Git Training',
      description: 'Git is a must have tool for every developer. I learned a lot about git and github.',
      url: git,
      link: '',
      issuer: 'SimpliLearn'
    },
    {
      title: 'Alibaba Certified Developer',
      description: 'The way Alibaba cloud has scaled up is amazing. I learned a lot about cloud computing in this cloud.',
      url: alibaba,
      link: '',
      issuer: 'Alibaba Cloud'
    },
    {
      title: 'Postman API Student Expert',
      description: 'Postman is a great tool for API testing. I learned a lot about API testing in this course.',
      url: postman,
      link: 'https://api.badgr.io/public/assertions/qSsHgFMJQ7mLqxjvU8q-RA?identity__email=deependraparmar1%40gmail.com',
      issuer: 'Postman'
    },
    {
      title: 'C++ OOPs',
      description: 'C++ is one of the most powerful languages. I learned a lot about OOPs in this course.',
      url: cppoops,
      link: '',
      issuer: 'Coding Ninjas'
    },
    {
      title: 'C++ Programming',
      description: 'C++ is one of the most powerful languages. I learned a lot about C++ in this course.',
      url: cpp,
      link: '',
      issuer: 'Coding Ninjas'
    },
    {
      title: 'Java Programming',
      description: 'Java is one of the most powerful languages. I learned a lot about Java in this course.',
      url: java,
      link: '',
      issuer: 'Coding Ninjas'
    },
    {
      title: 'JavaScript Programming',
      description: 'JavaScript is one of the most powerful languages. I learned a lot about JavaScript in this course.',
      url: js,
      link: '',
      issuer: 'Coding Ninjas'
    }

  ];
  return (
    <>
      <TransitionWrapper>
        <HStack position={'relative'} alignItems={'flex-start'} gap={4} justifyContent={'space-evenly'} wrap={'wrap'}  >
          {
            certificates.map((certificate, index) => {
              return (
                <Card _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'} mb={4} bg={'#25282c'} w={['full', '45%', '30%', '30%']} key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <AspectRatio >
                    <Image width={'full'} src={certificate.url} alt="certificate" />
                  </AspectRatio>

                  <VStack p={4} color={'white'} fontSize={'sm'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                    <HStack>
                      <Text color={''} noOfLines={1} fontWeight={'600'}>{certificate.title}</Text>
                      <LuBadgeCheck color='gold' size={16} />
                    </HStack>
                    <Text fontSize={'xs'} color={'gray'} noOfLines={'2'}>{certificate.description}</Text>
                    <Text fontSize={'xs'} color={'gray'} noOfLines={'1'}>Issued by: <span className='highlight' style={{ color: 'white' }}>{certificate.issuer}</span></Text>
                    <Button border={'1px solid black'} _hover={{ borderColor: 'red' }} gap={1} mt={2} bg={'black'} color={'white'} size={'sm'}><Link to={certificate.link} target='_blank'>Live</Link> <BsFillRecordFill color='red' /></Button>
                  </VStack>
                </Card>
              )
            })
          }
        </HStack>
      </TransitionWrapper>
    </>
  )
}

export default Certifications;