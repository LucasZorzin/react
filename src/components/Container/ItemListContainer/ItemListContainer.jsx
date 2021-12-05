import React from 'react';
import { useState, useEffect } from 'react';
import loader from '../../../img/loader.gif';
import ItemList from '../ItemList/ItemList.jsx';
import './ItemListContainer.css';
import { stock } from '../../stock';
import { useParams } from 'react-router';

const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
        res(stock)
    }, 700);
})

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()

    useEffect(() => {
        if (catId) {
            getProducts.then((productFound) => {
                setProducts(productFound.filter(prod => prod.category === catId));
            })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getProducts.then((productFound) => {
                setProducts(productFound);
            })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    }, [catId])

    return (
        <>
            {loading ? <div className="loader"><img src={loader} alt="loading" /></div> : <div className="content"><ItemList list={products} /></div>}
        </>
    )
}

export default ItemListContainer