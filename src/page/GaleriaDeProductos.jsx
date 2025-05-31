import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import loading from '../assets/loading.gif'
import ProductList from '../components/ProductList'
function GaleriaDeProductos({agregarCarrito, cart, productos, cargando, borrarProducto}) {
  return (
    <>  
      <Header borrarProducto={borrarProducto} cartItem={cart}/>
      {
          cargando ? <img src={loading} alt='loading'/>:

          <ProductList agregarCarrito={agregarCarrito} productos={productos}/>

      }
      <Footer />
    </>
  )
}

export default GaleriaDeProductos