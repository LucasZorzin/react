import React from 'react';
import { useCartContext } from '../../../context/CartContext';
import './Cart.css';
import { NavLink } from 'react-router-dom';

function Cart() {
    const { cartList, deleteItem ,clearCart } = useCartContext();
    const total = cartList.map(prod => (prod.stock * prod.price)).reduce((acc, el) => acc + el, 0);
    return (
        <>
            {cartList.length > 0 ?
                <div className="mt-5">
                    <p className="pt-5 cart">CART</p>
                    {cartList.map(prod =>
                        // {prod.cantidad} x {prod.item}
                        <div key={prod.item} className="card w-50 my-5 mx-3 ">
                            <div className="card-header textUppercase">
                                {prod.item}
                            </div>
                            <div className="row">
                                <img src={prod.img} className="w-25 col-6" alt={prod.item}/>  
                                <div className="col description textUppercase">{prod.stock}  x  {prod.item} Shoes  =  ${prod.price * prod.stock}</div>
                                <i className='col-2 center' onClick={deleteItem}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </i>
                            </div>

                        </div>
                    )}
                    <p className='mx-2 info textUppercase'>TOTAl=  ${total}</p>
                    <button className="btn btn-dark mb-5 mx-2" onClick={clearCart}>CLEAR</button>
                    <button className="btn btn-dark mb-5 mx-2" >PURCHASE</button>
                </div>
                :
                <div className="mt-5">
                    <p className="center pt-5">Empty Cart</p>
                    <NavLink to='/react/' className="center">Go to home</NavLink>
                </div>
            }
        </>
    )
}
export default Cart