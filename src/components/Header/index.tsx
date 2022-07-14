import { Flex, Icon, IconButton, Image, useBreakpointValue, useDisclosure, useDrawerContext } from "@chakra-ui/react";

import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from "../../Contexts/SidebarDrawerContext";
import { TopBar } from "../SideBar/TopBar";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideScreen = useBreakpointValue({
    base: false,
    md: true
  });

  if (!isWideScreen) {
    return (
      <Flex 
        h='15vh'
        align='center'
        bg='yellow.400'
      >
          <IconButton
            mt='2'
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="20"
            variant="unstyled"
            onClick={onOpen}
          />
          
          <Flex  
            w='100%'
            maxWidth={1480}
            justifyContent='center'
            alignItems='center'
            marginRight='42'
          >
            <Image 
                src="/logo.png" 
                alt='logo'
                boxSize={['90px','100px']} 
            />
          </Flex>
        </Flex>
    );
  }

  return (
    <Flex flexDir='column'>
      <Flex margin='0 auto' mt='4'>
        <Image 
          src="/logo.png" 
          alt='logo'
          boxSize='200px'  
        />
      </Flex>

       <TopBar />
    </Flex>
  )
}