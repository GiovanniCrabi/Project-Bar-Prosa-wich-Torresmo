import { Box, Divider, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Menu } from "../../components/Menu";


export default function Cardapio() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true
  });

  return (
    <Flex flexDir='column' overflow='auto'>
      <Flex margin='0 auto'>
        <Flex flexDir='column' mt='6' alignItems='center'>
          <Text as='kbd' color='yellow.400' fontSize={['2xl', '4xl']}> Bebidas </Text>
          <Menu name='Suco Del Vale' whiteSpace="nowrap" price="7,00" />
          <Menu name="Água com gás" whiteSpace="nowrap" price='4,00' />
          <Menu name="Água sem gás" whiteSpace="nowrap" price="3,00" />
          <Menu name="Suco Laranja" whiteSpace="nowrap" price="8,00" />

          <Image
            mt='10'
            opacity='20%'
            position='absolute'
            display='inline-block'
            src="/laranja.png"
            alt='suco-laranja'
            boxSize={['150px', '200px']}
          />
        </Flex>
      </Flex>

      <Flex margin='0 auto'>
        <Flex flexDir='column' mt='6' alignItems='center'>
          <Text as='kbd' color='yellow.400' fontSize={['18px', '2xl', '4xl']}> Cerveja Garrafa 600 ml </Text>
          <Menu name='Heineken' whiteSpace="nowrap" price="14,00" />
          <Menu name="Original" whiteSpace="nowrap" price='12,00' />
          <Menu name="Petra" whiteSpace="nowrap" price="9,00" />
          <Menu name="Cacildes" whiteSpace="nowrap" price="10,00" />
          <Menu name="Brahma / Skol" whiteSpace="nowrap" price="10,00" />

          <Image
            mt='12'
            opacity='20%'
            position='absolute'
            display='inline-block'
            src="/cerveja.png"
            alt='cerveja'
            boxSize={['150px', '250px']}
          />
        </Flex>
      </Flex>

      <Flex margin='0 auto'>
        <Flex flexDir='column' mt='6' alignItems='center'>
          <Text as='kbd' color='yellow.400' fontSize={['2xl', '4xl']}> Doses </Text>
          <Menu name='Whisky Red Label' whiteSpace="nowrap" price="16,00" />
          <Menu name="Whisky Jack Daniels" whiteSpace="nowrap" price='20,00' />
          <Menu name="Whisky Bulleit Bourbon" whiteSpace="nowrap" price="22,00" />
          <Menu name="Vermelhão (Bebida do Gustavo Lima)" whiteSpace="pre-wrap" price="13,00" />
          <Menu name="Cachaça Weber Haus Premium 7 madeiras " whiteSpace="pre-wrap" price="6,00" />
          <Menu name="Cachaça Weber Haus Premium 7 madeiras gelada" whiteSpace="pre-wrap" price="7,00" />
          <Menu name="Caipivodka" whiteSpace="nowrap" price="16,00" />
          <Menu name="Caipirinha" whiteSpace="nowrap" price="14,00" />

          <Image
            mt='20'
            opacity='20%'
            position='absolute'
            display='inline-block'
            src="/doses.png"
            alt='doses'
            boxSize={['250px', '350px']}
          />
        </Flex>
      </Flex>

      <Flex margin='0 auto'>
        <Flex flexDir='column' mt='6' alignItems='center'>
          <Text as='kbd' color='yellow.400' fontSize={['2xl', '4xl']}> Porções </Text>
          <Menu name='Fritas com queijo e bacon' whiteSpace="nowrap" price="30,00" />
          <Menu name="Fritas" whiteSpace="nowrap" price='26,00' />
          <Menu name="Torresmo a pururuca" whiteSpace="nowrap" price="30,00" />
          <Menu name="Torresmo de rolo com mandioca e molho agridoce" whiteSpace="pre-wrap" price="44,00" />
          <Menu name="Bife Croc Croc" whiteSpace="nowrap" price="52,00" />
          <Menu name="Mandioca Frita" whiteSpace="nowrap" price="30,00" />
          <Menu name="Jiló do Léo (Jiló empanado)" whiteSpace="nowrap" price="28,00" />
          <Menu name="Picanha na pedra a palito com batata, frita, queijo, provolone, ralado, farofa e vinagrete" whiteSpace="pre-wrap" price="96,00" />
          <Menu name="Picanha na pedra fatiada com batata frita, queijo provolone em rodelas, farofa e vinagrete" whiteSpace="pre-wrap" price="100,00" />

          <Image
            mt='40'
            opacity='20%'
            position='absolute'
            display='inline-block'
            src="/porcoes.png"
            alt='porções'
            boxSize={['250px', '350px']}
          />
        </Flex>
      </Flex>

      <Flex margin='0 auto'>
        <Flex flexDir='column' mt='6' alignItems='center'>
          <Text as='kbd' color='yellow.400' fontSize={['2xl', '4xl']}> Acompanhamento </Text>
          <Menu name='Arroz branco (Opcional alho ou cheiro verde)' whiteSpace="nowrap" price="10,00" />
          <Menu name="Salada Simples (Alface, tomate, cebola e cheiro verde)" whiteSpace="pre-wrap" price='12,00' />
        </Flex>
      </Flex>

      <Divider />

    </Flex>
  )
}