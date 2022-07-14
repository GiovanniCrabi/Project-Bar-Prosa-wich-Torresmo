import { Flex, HStack, Link } from "@chakra-ui/react";
import { NavLink } from "./NavLink";


export function TopBar() {
  return (
    <Flex bg='yellow.400' w='100vw' h='10' mt='4'>
      <Flex margin='0 auto' fontSize='x-large'>
        <HStack spacing='10'>
          <NavLink href="/Home"> Home  </NavLink>
          <NavLink href="/Menu"> Cardápio  </NavLink>
          <NavLink href="/Stories"> Histórias </NavLink>
          <NavLink href="/Localization"> Localização </NavLink>
          <NavLink href="/Contacts"> Contatos </NavLink>
        </HStack>
      </Flex>
    </Flex>
  )
}