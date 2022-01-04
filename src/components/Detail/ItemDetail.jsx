import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import './Detail.css';
import ItemCount from '../Cart/ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import Footer from '../Footer/Footer';
// import ItemListContainer from '../Container/ItemListContainer/ItemListContainer';
// import { stock } from '../stock';

const CartButton = () => {
    return (
        <Link to="/react/cart" className="countButtons">
            <button className='stockBtn'>GO TO CART</button>
        </Link>
    )
}

export const ItemDetail = ({ item }) => {
    const { cartList, setCount, count, addProduct } = useCartContext()
    const [button, setButton] = useState('countButton')

    const onAdd = (() => {
        addProduct({ item: item.id, name: item.name, stock: count, img: item.img, price: item.price })
        setButton('CartButton')
        setCount(1)
    })
    console.log(cartList)

    return (
        <div>
        <div className="row my-5 mt-md-3 mx-5 center detail">
            <div className="center mt-3 col-12 col-lg-5">
                <img className="product-img" src={item.img} alt={item.name} />
            </div>
            <div className="col-12 col-lg-7 product-detail">
                <h3 className="product-title">{item.name}</h3>
                <p className="textUppercase">{'Category: ' + item.category}</p>
                <ul className='product-description'>
                    <li>· 1.7kg lightweight and portable.</li>
                    <li>· L2 Freeboost technology, playing with effects without amp.</li>
                    <li>· Super AirSonic carbon fiber body works in all conditions.</li>
                    <li>· The most advanced fret machining system, easy and comfortable to press.</li>
                </ul>
                <p className="bold product-price">{'$' + item.price}</p>
                {   button === 'countButton' ?
                    <div className="center"><ItemCount onAdd={onAdd} stock={item.stock} id={item.id} /></div>
                    :
                    <CartButton />
                }
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}