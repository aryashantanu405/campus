import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import Header from './Header'
import Footer from './Footer'
import { AppContext } from '../Context/Appcontext1'
export default function RootLayout({
  children,
}:{
  children:React.ReactNode
}){
  return(
    <AppContext>
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
</AppContext>
  )
}