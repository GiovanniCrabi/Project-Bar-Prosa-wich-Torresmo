import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Sidebar } from '../components/SideBar';
import { SidebarDrawerProvider } from '../Contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Header />
        <Sidebar />
        
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp

