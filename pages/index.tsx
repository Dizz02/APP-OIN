import Head from 'next/head';
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { Product, Dependency, WalletSection } from '../components';
import ReactDOM from 'react-dom';
import { dependencies, products } from '../config';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import App from "./App";






    

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

    return (

        
        
        <Container maxW="100%" maxH="100%" py={5} w='100%' h='100%'>
            

        <Head>
        <title>OIN AIRDROP APP</title>
        <meta name="description" content="Generated by OIN | PROTOCOL" />
                <link rel="icon" href="/favicon.ico" />
        </Head>


            
            <App />
            
              
            
            

            <Flex justifyContent="space-between" alignItems="center">
                <Image
                    mt={2}
                    height="50px"
                    src="https://oin.vercel.app/assets/img/Oin-Font.png"
                    alt="Oin Font"
                />
                <Flex alignItems="center">
                    <WalletSection />
                    <Button variant="outline" px={2} onClick={toggleColorMode}>
                        <Icon
                            as={colorMode === 'dark' ? BsFillMoonStarsFill : BsFillSunFill}
                        />
                    </Button>
                </Flex>
            </Flex>

           
           
            
            
       


            <Box textAlign="center">
                

          <Heading
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          fontWeight="extrabold"
          mb={0}
          mt={100}
                >WELCOME TO OIN AIRDROP


          </Heading>
                
                <div> 
                   <h1>Please sign in with your wallet to participate to our Airdrop</h1>

                    


                </div>

                <Stack direction='row' align='center' justify='center' mb={78} mt={78} >
                    
                    <Image
                        height='700px'
                        src='https://i.imgur.com/vh463C0.png' 
                    />
                    
                </Stack>

                

          </Box>

            <Stack spacing={0} direction='row' align='center' justifyContent='center'>
                
                <Button color='linear-gradient(109.6deg, rgba(119,81,204,1) 11.2%, #20c997 83.1%)' size='lg'>
                    Participate
                </Button>
            </Stack>
      
      
            
  
        </Container>

       
  );
}





