import { Divider, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

import { BsFillStopFill } from "react-icons/bs";

interface MenuProps {
  name: string;
  price: string;
  whiteSpace?: 'pre-wrap' | 'nowrap';
}

export function Menu({  name, price, whiteSpace }: MenuProps) {
  return (
    <Flex>
        <Flex flexDir='column' >
          
          <Divider />

          <Flex mt='2'>

            <List spacing={2} fontSize={['12px','15px','20px','25px']} w='90vw' >
              <ListItem display='flex' alignItems='center' >
                <ListIcon as={BsFillStopFill} color='white.100' />
                <Text whiteSpace={whiteSpace}>
                  { name }
                </Text>
                <Divider orientation='horizontal'/>
                <Text textAlign='right'>
                  R${ price }
                </Text>
              </ListItem>

              <Divider />

            </List>
          </Flex>
        </Flex>
      </Flex>
  )
}