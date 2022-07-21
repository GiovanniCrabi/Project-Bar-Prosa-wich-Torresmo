import {  Divider, Flex, HStack, Icon, IconButton, Link, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

import { GrInstagram } from 'react-icons/gr'
import { BiDrink } from "react-icons/bi";

import { Button } from "../components/Button";

function LandingPage():JSX.Element {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true
  });

  if(!isWideScreen) {
    return (
      <Flex margin='100px auto' maxW='60%' flexDir='column'>
          <Text  as='samp' textAlign='center' fontSize={['30px','40px','50px','60px']}> Aqui cê tá em casa! </Text>
        <Flex flexDir='column' margin='80px auto' >
          <Divider />
  
          <Stack spacing='4' alignItems='center'>
            <Flex> 🍻 Cerveja Trincada </Flex>
            <Flex> 🗣 Prosa Fiada </Flex>
            <Flex> 🍖 Porção Caprichada  </Flex>
          </Stack>
  
          <Divider />
        </Flex>
  
        <Flex margin='0 auto' >
          <Stack spacing='6' align='center' flexDir='column'>
            <Button href="/Home" title="Conheça o Prosa" icon={BiDrink}/>
            <Button href='https://www.instagram.com/prosacomtorresmo/' title='Instagram' icon={GrInstagram} />
          </Stack>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex margin='100px auto'  flexDir='column'>
      <Text  as='samp' textAlign='center' fontSize={['25px','30px','40px','50px','60px']}> Aqui cê tá em casa! </Text>
      <Flex flexDir='column' margin='80px auto' >

        <Stack 
          spacing='10' 
          align='center' 
          display='flex'
          alignSelf='center'
        >
          <Flex> 🍻 Cerveja Trincada </Flex>
          <Flex> 🗣 Prosa Fiada </Flex>
          <Flex> 🍖 Porção Caprichada </Flex>
        </Stack>

      </Flex>

      <Flex margin='0 auto'>
        <Stack direction='row' spacing={4} align='center'>
          <Button href="/Home" title="Conheça o Prosa" icon={BiDrink}/>
          <Button href='https://www.instagram.com/prosacomtorresmo/' title='Instagram' icon={GrInstagram} isExternal />
        </Stack>
      </Flex>
    </Flex>
  )
}

export default LandingPage;