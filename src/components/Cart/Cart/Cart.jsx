import React from 'react';
import { useCartContext } from '../../../context/CartContext';
import './Cart.css';
import { NavLink } from 'react-router-dom';
import Footer from '../../Footer/Footer';

function Cart() {
    const { cartList, deleteItem, clearCart, totalPrice } = useCartContext();
    return (
        <>
            <div className='min-height'>
                {cartList.length > 0 ?
                    <div className="mt-5 pt-3 pt-lg-0">
                        <p className="px-3 mb-4 mb-lg-0 cart cart-title">CART</p>
                        <div className='row mx-0 mx-lg-5 px-5 row-resume'>
                            <div className='col-12 col-md-7 center-cart'>
                                {cartList.map(prod =>

                                    // {prod.cantidad} x {prod.item}
                                    <div key={prod.item} className="card card-cart my-2 mx-3 ">
                                        {/* <div className="card-header textUppercase">
                                {prod.item}
                            </div> */}
                                        <div className="row cart-text">
                                            <img src={prod.img} className="img-product-cart col-6" alt={prod.item} />
                                            {/* <div className="col description textUppercase">{prod.stock}  <span className='textLowercase'> x </span>  {prod.item} Guitar  =  ${prod.price * prod.stock}</div>                                 */}
                                            <div className='col description'>
                                                <span className='description__title'>{prod.name}</span>
                                                <span className='description__price'>Unit Price: ${prod.price}</span>
                                                <span className='description__quantity'>Quantity: {prod.stock}</span>
                                                <span className='description__subtotal'>SUBTOTAL: ${prod.price * prod.stock}</span>
                                            </div>

                                        </div>
                                        <i className='center delete-btn' onClick={() => deleteItem(prod.item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </i>

                                    </div>
                                )}
                            </div>

                            <div className='col-12 col-md-4 mb-5 resume'>
                                <ul>
                                    <li className='resume__1'>
                                        <span>PRODUCTS:  {cartList.length}</span>
                                        <span> ${totalPrice}</span>
                                    </li>
                                    <li className='shipping'>
                                        <span>Shipping:</span>
                                        <span> $0 (Free)</span>
                                    </li>
                                    <li className='resume__3'>
                                        <span>TOTAL: </span>
                                        <span style={{ color: '#eb3cd8' }}> ${totalPrice}</span>
                                    </li>
                                    <NavLink to='/react/checkout' type='button' className="resume__checkout mt-5"> <li className='center cart-text'>CHECKOUT</li></NavLink>
                                </ul>
                                <div className='cart-actions'>
                                    <button className="mb-5 mx-3 cart-text empty-cart" onClick={clearCart}>Empty Cart
                                        <i className='empty-cart-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fillRule="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </i>
                                    </button>
                                    <NavLink to='/react/products' className="cart-text"><button className="mb-5 cart-text continue-cart">Continue Shopping</button></NavLink>
                                </div>
                            </div>


                        </div>
                    </div>
                    :
                    <div className="mt-5 pt-3 pt-lg-0">
                        <p className="px-3 mb-4 mb-lg-0 cart cart-title">CART</p>
                        <p className="center mt-5 pt-5 cart-text">Your cart is empty.</p>
                        <NavLink to='/react/' className="center cart-text black">Go to home</NavLink>
                    </div>
                }
            </div>
            <Footer />
        </>
    )
}
export default Cart