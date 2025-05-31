import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const Home = ({borrarProducto, agregarCarrito, cart, productos, cargando}) => {
  return (
    <>
        <Header borrarProducto={borrarProducto} cartItem={cart}/>
        <main>

          <h1>Bienvenidos a mi tienda de tragos</h1>

          <p>Somos un grupo de amigos que nos apaciona la recreación de tragos y vimos la oportunidad de crear un emprendimiento para llevartelos a la puerta de tu casa.</p>

          {
            cargando ? <img src={loading} alt='loading'/>:

            <ProductList agregarCarrito={agregarCarrito} productos={productos}/>

          }
        </main>

        <Footer/>
    </>
  )
}

export default Home