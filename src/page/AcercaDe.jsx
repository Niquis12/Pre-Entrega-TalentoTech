import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

function AcercaDe({cart, borrarProducto}) {
  return (
    <>  
      <Header borrarProducto={borrarProducto} cartItem={cart}/>
      <h1>Acerca De</h1>
      <Footer />
    </>
  )
}

export default AcercaDe