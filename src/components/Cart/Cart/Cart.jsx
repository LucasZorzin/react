import React from 'react';
import { useCartContext } from '../../../context/CartContext';
import './Cart.css';

function Cart() {
    const { cartList, clearCart } = useCartContext()
    console.log(cartList)
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
                                <div className="col description">{prod.cantidad}  x  {prod.item} Shoes</div>
                            </div>

                        </div>





                    )}
                    <button className="btn btn-dark mb-5 mx-2" onClick={clearCart}>VACIAR</button>
                    <button className="btn btn-dark mb-5 mx-2" >PURCHASE</button>
                </div>
                :
                <div className="mt-5"><p className="center pt-5">Empty Cart</p></div>
            }
        </>
    )
}
export default Cart