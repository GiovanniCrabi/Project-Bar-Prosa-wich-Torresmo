import { Box, Divider, Flex, Link, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

import { Button } from '@chakra-ui/react'
import { BsInstagram, BsTelephoneForward } from "react-icons/bs";

import { RiWhatsappLine } from "react-icons/ri";

export default function Contacts() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true
  });

  if (!isWideScreen) {
    return (
      <Flex direction='column'>

        <Text mt='6' textAlign='center' as='samp' fontSize={['25px', '6xl']}> Contatos </Text>

        <Flex w="98%" bg='yellow.400'  margin='20px auto' >

          <SimpleGrid columns={1} spacing={10} margin='20px auto'>
            <Box
              textAlign='center'
              alignContent='center'
              color='black.900'
              p={["6", "8"]}
              bg='yellow.300'
              boxShadow='dark-lg'
              transition='linear 0.2s'
              _hover={{
                background: 'yellow.200'
              }}
            >
              <Text as='samp' fontSize={['25px', '3xl']}> Daniel Agostinho </Text>

              <Stack spacing='2' alignItems='center'>
                  <Link href="https://api.whatsapp.com/send?phone=5535998974191" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<RiWhatsappLine />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      WhatsApp
                    </Button>
                  </Link>

                  <Link href="tel:+5535998974191" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<BsTelephoneForward />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Ligar
                    </Button>
                  </Link>

                  <Link href="https://www.instagram.com/daniel.agostinho07/" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<BsInstagram />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Instagram
                    </Button>
                  </Link>
                </Stack>
            </Box>

            <Box
              textAlign='center'
              color='black.900'
              p={["6", "8"]}
              bg='yellow.300'
              boxShadow='dark-lg'
              transition='linear 0.2s'
              _hover={{
                background: 'yellow.200'
              }}
            >
              <Text as='samp' fontSize={['25px', '3xl']}> Leonardo Silva </Text>
              <Stack spacing='2' alignItems='center'>
                  <Link href="https://api.whatsapp.com/send?phone=5535998974191" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<RiWhatsappLine />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      WhatsApp
                    </Button>
                  </Link>

                  <Link href="tel:+5535998974191" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<BsTelephoneForward />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Ligar
                    </Button>
                  </Link>

                  <Link href="https://www.instagram.com/daniel.agostinho07/" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<BsInstagram />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Instagram
                    </Button>
                  </Link>
                </Stack>
            </Box>
            <Box
              textAlign='center'
              color='black.900'
              p={["6", "8"]}
              bg='yellow.300'
              boxShadow='dark-lg'
              transition='linear 0.2s'
              _hover={{
                background: 'yellow.200'
              }}
            >
              <Text as='samp' fontSize={['25px', '3xl']}> Iany Helena </Text>

              <Stack spacing='2' alignItems='center'>
                  <Link href="https://api.whatsapp.com/send?phone=5535998974191" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<RiWhatsappLine />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      WhatsApp
                    </Button>
                  </Link>

                  <Link href="tel:+5535998974191" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<BsTelephoneForward />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Ligar
                    </Button>
                  </Link>

                  <Link href="https://www.instagram.com/daniel.agostinho07/" isExternal>
                    <Button
                      w='40vw'
                      leftIcon={<BsInstagram />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Instagram
                    </Button>
                  </Link>
                </Stack>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <Flex direction='column'>

        <Text mt='6' textAlign='center' as='samp' fontSize={['3x1', '6xl']}> Contatos </Text>

        <Flex w="98%" bg='yellow.400' h='50vh' margin='20px auto' >
          <Flex w="98%" margin='0 auto'>
            <SimpleGrid columns={3} spacing={10} margin='20px auto'>
              <Box
                textAlign='center'
                color='black.900'
                p={["6", "8"]}
                bg='yellow.300'
                boxShadow='dark-lg'
                transition='linear 0.2s'
                _hover={{
                  background: 'yellow.200'
                }}
              >

                <Text as='samp' fontSize={['25px', '3xl']}> Daniel Agostinho </Text>

                <Stack spacing='2' mt='10'>
                  <Link href="https://api.whatsapp.com/send?phone=5535998974191" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<RiWhatsappLine />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      WhatsApp
                    </Button>
                  </Link>

                  <Link href="tel:+5535998974191" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<BsTelephoneForward />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Ligar
                    </Button>
                  </Link>

                  <Link href="https://www.instagram.com/daniel.agostinho07/" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<BsInstagram />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Instagram
                    </Button>
                  </Link>
                </Stack>

              </Box>

              <Box
                textAlign='center'
                color='black.900'
                p={["6", "8"]}
                bg='yellow.300'
                boxShadow='dark-lg'
                transition='linear 0.2s'
                _hover={{
                  background: 'yellow.200'
                }}
              >
                <Text as='samp' fontSize={['25px', '3xl']}> Leonardo Silva </Text>

                <Stack spacing='2' mt='10'>
                  <Link href="https://api.whatsapp.com/send?phone=5535998974191" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<RiWhatsappLine />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      WhatsApp
                    </Button>
                  </Link>

                  <Link href="tel:+5535998974191" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<BsTelephoneForward />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Ligar
                    </Button>
                  </Link>

                  <Link href="https://www.instagram.com/daniel.agostinho07/" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<BsInstagram />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Instagram
                    </Button>
                  </Link>
                </Stack>
              </Box>
              <Box
                textAlign='center'
                color='black.900'
                p={["6", "8"]}
                bg='yellow.300'
                boxShadow='dark-lg'
                transition='linear 0.2s'
                _hover={{
                  background: 'yellow.200'
                }}
              >
                <Text as='samp' fontSize={['25px', '3xl']}> Iany Helena </Text>

                <Stack spacing='2' mt='10'>
                  <Link href="https://api.whatsapp.com/send?phone=5535998974191" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<RiWhatsappLine />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      WhatsApp
                    </Button>
                  </Link>

                  <Link href="tel:+5535998974191" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<BsTelephoneForward />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Ligar
                    </Button>
                  </Link>

                  <Link href="https://www.instagram.com/daniel.agostinho07/" isExternal>
                    <Button
                      w='12vw'
                      leftIcon={<BsInstagram />}
                      colorScheme='black.400'
                      variant='outline'
                      mt='4'
                    >
                      Instagram
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </SimpleGrid>
          </Flex>


        </Flex>
      </Flex>
    </>
  )
}