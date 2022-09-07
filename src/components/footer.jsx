import * as React from "react"
import '../styles/footer.css'

const Footer = ({name}) => {
  return(
    <footer>
          <div><p> Site desenvolvido como teste por {name}</p></div>          
          <p style={{textAlign:'center'}}>Apenas um teste realizado © {new Date().getFullYear()}</p>          
    </footer>
  )
}

export default Footer
