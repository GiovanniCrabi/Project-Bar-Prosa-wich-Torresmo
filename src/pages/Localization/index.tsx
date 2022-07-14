import { AspectRatio, Flex, Text } from "@chakra-ui/react";


export default function Localization(){
  return (
    <>
      <Flex margin='50px auto' maxW='60%' flexDir='column'>
        <Text  as='samp' textAlign='center' fontSize={['30px','40px']}> Venha nos conhecer! </Text>
        <Text textAlign='center' mt='6'> Estamos localizados na Rua Professor Cícero Azevedo, 5, Elói Mendes </Text>
      </Flex>
       

       <AspectRatio
          border='solid' 
          margin='30px auto'
          w={['320px','420px','520px','720px']} 
          h={['220px','320px','420px']} 
          ratio={14 / 6}
      >
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.5291670257775!2d-45.5643064!3d-21.6042942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca8ae2f25c7c87%3A0x1f3efa9b78d30428!2sR.%20Prof.%20C.%20Azevedo%2C%205%2C%20El%C3%B3i%20Mendes%20-%20MG%2C%2037110-000%2C%20Brasil!5e0!3m2!1spt-BR!2suk!4v1657829866314!5m2!1spt-BR!2suk" width="600" height="450" loading="lazy" />
    </AspectRatio>
    </>
     
   
  )
}