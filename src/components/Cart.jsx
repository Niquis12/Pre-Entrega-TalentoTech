import React from 'react'
import './styleCart.css'

const Cart = ({ borrarProducto, cartItem, isOpen, onClose }) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className='close-btn'>X</button>
      </div>

      <div className='cart-content'>
        {cartItem.length === 0 ? (
          <p style={{ color: 'red' }}>El carrito está vacío</p>
        ) : (
          <ul className='cart-item'>
            {cartItem.map((item) => {
              const cantidad = Number(item.cantidad) || 0;
              const precio = Number(item.precio) || 0;
              return (
                <li key={item.id} style={{ color: 'black' }}>
                  <div>
                    <strong>{item.nombre}</strong>
                  </div>
                  <div>
                    Precio unitario: ${precio}
                  </div>
                  <div>
                    Cantidad: {cantidad}
                  </div>
                  <div>
                    <strong>Total: ${precio * cantidad}</strong>
                  </div>
                  <button className='delete-btn' onClick={() => borrarProducto(item)}>
                    <i className="fa-solid fa-trash" style={{ color: "#fff" }}></i>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="cart-total">
        <strong>
          Total general: $
          {cartItem.reduce((acc, item) => {
            const cantidad = Number(item.cantidad) || 0;
            const precio = Number(item.precio) || 0;
            return acc + (precio * cantidad);
          }, 0)}
        </strong>
      </div>
    </div>
  )
}

export default Cart