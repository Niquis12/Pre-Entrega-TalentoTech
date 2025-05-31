import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
function Contacto({cart}) {
  return (
    <>  
      <Header cartItem={cart}/>
      <h1>Contacto</h1>
      <Footer />
    </>
  )
}

export default Contacto