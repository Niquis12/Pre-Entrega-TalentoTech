import React from 'react'
import Products from './Products'

const ProductList = ({productos, agregarCarrito}) => {
  return (
    <>
        <h2>Galeria de productos</h2>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
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