import React from 'react'
import Products from './Products'
import './styleProductList.css'

const ProductList = ({productos, agregarCarrito}) => {
  return (
    <>
        <h2>Galeria de productos</h2>
        <div className='cardConteiner'>
            {/* hola como va */}
          {
            productos.map(productos => (

              <Products key= {productos.id} productos={productos} agregarCarrito={agregarCarrito}/>
            ))
          }
        </div>
    </>
  )
}

export default ProductList