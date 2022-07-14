import { Drawer, DrawerBody, DrawerCloseButton, DrawerOverlay, DrawerContent, DrawerHeader, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../Contexts/SidebarDrawerContext";
import { SideBarNav } from "./SideBarNav";

export function Sidebar():JSX.Element{
  const { isOpen, onClose } = useSidebarDrawer();

      return (
        <Drawer  isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="yellow.400" p="4">
              <DrawerCloseButton mt="6" />
              <DrawerHeader>O que você procura? </DrawerHeader>
              <DrawerBody mt='10'>
    
                <SideBarNav />
    
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )
    }
  
 
