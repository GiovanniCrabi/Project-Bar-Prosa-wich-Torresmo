import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";


export function SideBarNav():JSX.Element {
  return (
  <Stack spacing='12' align='flex-start' textDecoration='none'>
    <NavLink href="/Home"> Home  </NavLink>
    <NavLink href="/Cardapio"> Cardápio  </NavLink>
    <NavLink href="/Stories"> Histórias </NavLink>
    <NavLink href="/Localization"> Localização </NavLink>
    <NavLink href="/Contacts"> Contatos </NavLink>
  </Stack>
  )
}