import React, { useEffect, useState } from 'react';
import { Image, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Payment from '../Payment/Payment';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from '../../Firebase/firebase';
import './Checkout.css';
import checked from '../../img/checked.png';
import loader from '../../img/loader.gif';

const URL = "https://restcountries.com/v2/all?fields=name";

const Checkout = () => {

    const { cartList, totalPrice } = useCartContext();
    const [buyerName, setBuyerName] = useState('')
    const [buyerSurname, setBuyerSurname] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const [buyerCountry, setBuyerCountry] = useState('')
    const [showPaymentOp, setShowPaymentOp] = useState(false)
    const [style, setStyle] = useState('checkout-container');
    const [country, setCountry] = useState([])
    const [email, setEmail] = useState('')
    const [orderID, setOrderID] = useState('')
    const [loading, setLoading] = useState(false);

    const buttonPayment = (e) => {
        e.preventDefault()
        setShowPaymentOp(!showPaymentOp)
    }

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setCountry(result)
                }
            )
        return () => setCountry([])
    }, [])


    const fin = () => {
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 1000);
        var form = document.querySelector('.buyer-form');
        form.classList.add("ocultar")
        var form = document.querySelector('.payment-options');
        form.classList.add("ocultar")
        setStyle('fin');
    }

    const createOrder = async () => {

        const order = {}
        order.date = Timestamp.fromDate(new Date());

        order.buyer =
        {
            name: buyerName,
            surname: buyerSurname,
            email: buyerEmail,
            country: buyerCountry,
        }

        order.total = totalPrice;

        order.guitars = cartList.map(e => {
            const id = e.item;
            const name = e.name;
            const price = e.price;
            const quantity = e.stock;

            return { id, name, quantity, price }
        })

        const addOrder = await addDoc(collection(db, "orders"), order)
        setOrderID(addOrder.id)
    }


    return (
        <>
            <div className={style}>
                <p className="px-3 cart cart-title">CHECKOUT</p>

                {cartList == '' ? <div className='ocultar'><p className="center mt-5 pt-5 cart-text">Your cart is empty.</p>
                    <NavLink to='/react/' className="center cart-text black">Go to home</NavLink></div> :
                    <div className='row'>
                        <div className='col-5 px-5'>
                            <span className='title-order'>PERSONAL INFORMATION</span>
                            <form className="buyer-form" onSubmit={buttonPayment}>
                                <div className="col-2" id="buyer-name">
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" name="name" onChange={event => setBuyerName(event.target.value)} placeholder="" required />
                                </div>

                                <div className="col-2" id="buyer-surname">
                                    <label htmlFor="lastName">Last Name: </label>
                                    <input type="text" name="lastName" onChange={event => setBuyerSurname(event.target.value)} placeholder="" required />
                                </div>

                                <div className="col-2" id="buyer-email">
                                    <label htmlFor="email">E-Mail: </label>
                                    <input type="email" name="email" onChange={event => setBuyerEmail(event.target.value)} placeholder="name@example.com" required />
                                </div>
                                <div className="col-3" id="buyer-re-email">
                                    <label htmlFor="email">Confirm E-Mail: </label>
                                    <input type="email" name="email" placeholder="name@example.com" onChange={event => setEmail(event.target.value)} required />
                                </div>
                                <div className="col-2" id="buyer-country">
                                    <label htmlFor="country">Country: </label>
                                    <select name="country" onChange={event => setBuyerCountry(event.target.value)} required>
                                        {country.map(e =>
                                            <option key={e.name} value={e.name}>{e.name}</option>
                                        )}
                                    </select>
                                </div>

                                <div className="select-payment">
                                    {(email.length > 1 && buyerEmail === email) ?
                                        <input type="submit" className="btn btn-sm btn-pink" value="Choose payment method" /> :
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Complete all fields</Tooltip>}>
                                            <span className="d-inline-block">
                                                <Button className="btn btn-sm btn-danger" disabled style={{ pointerEvents: 'none' }}>
                                                    Choose payment method
                                                </Button>
                                            </span>
                                        </OverlayTrigger>
                                    }
                                </div>
                            </form>

                            {(showPaymentOp) &&
                                <section className="payment-options">
                                    <Payment totalPrice={totalPrice} createOrder={createOrder} fin={fin} />
                                </section>
                            }

                        </div>
                        <div className='col-7'>
                            <h4 className='title-order'>My order</h4>
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

                                </div>
                            )}
                        </div>


                    </div>}
            </div>

            {loading ? <div className="loader"><img src={loader} alt="loading" /></div> :
                (style === 'fin') &&
                <div className="order-confirm">
                    <img src={checked} alt="checked" />
                    <h3>Thanks for your purchase, {buyerName}!</h3>
                    <p>Ticket code: {orderID}</p>
                </div>

            }


        </>
    )


}

export default Checkout