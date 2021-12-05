import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import './Detail.css';
import ItemCount from '../Cart/ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

const CartButton = () => {
    return (
        <Link to="/react/cart">
            <button className='btn btn-dark'>Checkout</button>
        </Link>
    )
}

export const ItemDetail = ({ item }) => {
    const { cartList, setCount, count, addProduct } = useCartContext()
    const [button, setButton] = useState('countButton')

    const onAdd = (() => {
        addProduct({ item: item.id, cantidad: count, img: item.img, price: item.price })
        setButton('CartButton')
        setCount(1)
        alert("Agregado correctamente")
    })
    console.log(cartList)

    return (
        <div className="row mt-5 mx-5 center">
            <div className="col-12 col-lg-6">
                <img className="product-img" src={item.img} alt={item.name} />
            </div>
            <div className="col-12 col-lg-6 product-detail">
                <h3 className="textUppercase bold">{item.name}</h3>
                <p className="textUppercase">{'Category: ' + item.category}</p>
                <p className="bold">{'$' + item.price}</p>
                {   button === 'countButton' ?
                    <div className="center"><ItemCount onAdd={onAdd} stock={item.stock} id={item.id} /></div>
                    :
                    <CartButton />
                }
            </div>
        </div>
    )
}