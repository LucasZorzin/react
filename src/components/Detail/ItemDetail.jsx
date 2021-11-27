import React from 'react';
import './Detail.css';
import ItemCount from '../Cart/ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {
    return (
        <div className="row mt-5 mx-5 center">
            <div className="col-12 col-lg-6">
                <img className="product-img" src={item.img} alt={item.name} />
            </div>
            <div className="col-12 col-lg-6 product-detail">
                <h3 className="textUppercase bold">{item.name}</h3>
                <p className="textUppercase">{'Category: ' + item.category}</p>
                <p className="bold">{'$' + item.price}</p>
                <div className="center"><ItemCount stock={item.stock} id={item.id} /></div>
            </div>
        </div>
    )
}