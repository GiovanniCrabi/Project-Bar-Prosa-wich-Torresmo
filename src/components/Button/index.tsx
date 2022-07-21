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
  icon: IconType;
  isExternal?: boolean;
}

export function Button({ title, icon, href, isExternal }: ButtonProps ) {
 return ( 
  <Link href={href} isExternal={isExternal}>
    <Flex 
    bg='yellow.400' 
    color='black.900'
    w='60' 
    h='12' 
    borderRadius={8} 
    transition='linear 0.2s'
    cursor='pointer'
    _hover={{
      background: 'yellow.500',
 }}>
    <Flex alignSelf='center' marginLeft='10px' position='absolute' >
      {React.createElement(icon, { width: 12, height: 12, color: 'black.900' })}
    </Flex>

    <Flex alignSelf='center' margin='0 auto' textDecoration='none'> 
     { title }
    </Flex>    
</Flex>
  </Link>
 

)}