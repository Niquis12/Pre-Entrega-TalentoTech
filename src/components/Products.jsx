import React, {useState} from 'react'
import "./styleProducts.css"

const Products = ({productos, agregarCarrito}) => {

  const [cantidad,setCantidad] = useState(1);

  const increase = () => setCantidad(prev => (prev< productos.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));
  return (
    <section className='card'>  
        <div className='imagenContainer'>
            <img src={productos.imagen} alt=""  className='image'/>
        </div>

        <h3 className='nombre'>{productos.nombre}</h3>

        <p className='precio'>${productos.precio}</p>
        <p className='stock'>{productos.stock}</p>

        <div className='cantidadContainer'>
            <button className='qtyButton' onClick={decrease}>-</button>
            <span>{cantidad}</span>
            <button className='qtyButton' onClick={increase}>+</button>
        </div>

        <button onClick={()=> agregarCarrito(productos)}>Agregar al carrito</button>
    </section>
  )
}

export default Products