import React from 'react'
import './styleCart.css'

const Cart = ({borrarProducto, cartItem, isOpen, onClose}) => {


  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className='cart-header'>
            <h2>Carrito de Compras</h2>
            <button onClick={onClose} className='close-btn'>X</button>
        </div>

        <div className='cart-content'> 
            {cartItem.lenght === 0 ? (<p style={{ color: 'red' }}>El 
            carrito está vacío</p>) : (<ul className='cart-item'>
                {cartItem.map((item, index) => (
                    <>
                    <li key={item.id} style={{color:'black'}}>
                        {item.nombre} - {item.precio}
                        <button onClick={()=> borrarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                    </li>
                    </>
                ))}
            </ul>)}
        </div>
    </div>
  )
}

export default Cart