import React from 'react';
import Item from '../Item/Item';
import products from '../../../img/puma-black.png'
import Footer from '../../Footer/Footer';

export default function ItemList(props) {
    return (
        <>
        <div className='products-background'>
            <div className='txt1 center pt-4 pb-4'><img className='products-img' src={products} alt="products"/></div>
            <div className='row mx-5 px-5'>
                {props.list.map((item, index) => {
                    return (
                        <Item key={index} item={item} />
                    )
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}