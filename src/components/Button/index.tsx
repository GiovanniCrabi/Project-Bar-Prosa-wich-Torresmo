import { Flex, Icon, Link } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { GrInstagram } from "react-icons/gr";


interface IconTypeProps {
  width: number;
  height: number;
  color: string;
}

type IconType = (props: IconTypeProps) => JSX.Element;

interface ButtonProps {
  title: string;
  href: string;
  icon: IconType
}

export function Button({ title, icon, href }: ButtonProps ) {
 return ( 
  <Link href={href} isExternal>
    <Flex 
    bg='yellow.400' 
    w='60' 
    h='12' 
    borderRadius={8} 
    transition='linear 0.2s'
    border='solid'
    cursor='pointer'
    _hover={{
      background: 'yellow.500',
 }}>
    <Flex alignSelf='center' marginLeft='10px' position='absolute'>
      {React.createElement(icon, { width: 12, height: 12, color: 'yellow.200' })}
    </Flex>

    <Flex alignSelf='center' margin='0 auto'> 
     { title }
    </Flex>    
</Flex>
  </Link>
 

)}