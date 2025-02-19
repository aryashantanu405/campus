import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import Header from './Header'
import Footer from './Footer'
export default function RootLayout({
  children,
}:{
  children:React.ReactNode
}){
  return(
    <ClerkProvider>
    <html
lang='en'>
  <body>
    <Header/>
    {children}
    <Footer/>
  </body>
</html>
</ClerkProvider>
  )
}