import React from 'react';
import { useState, useEffect } from 'react';
import loader from '../../../img/loader.gif';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { stock } from '../../stock';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promise = new Promise((aceptado, rechazada) => {
            setTimeout(() => {
                aceptado(stock)
            }, 2000);
        })
        promise.then((stock) => {
            setProducts(stock);
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        return () => {
            console.log('clean')
        }
    }, [])

    return (
        <>
            {loading ? <div className="loader"><img src={loader} /></div> : <ItemList list={products} />}
        </>
    )
}

export default ItemListContainer