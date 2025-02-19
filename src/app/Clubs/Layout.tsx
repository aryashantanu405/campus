import Footer from "../Footer"
import Header from "../Header"

export default function ClubLayout(
  {children,}:{
    children:React.ReactNode
  }
){
  return(
    <html
    lang="en">
      <head>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )

}