import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loader from '../../img/loader.gif';
import { stock } from '../stock';
import { ItemDetail } from './ItemDetail.jsx';

const ItemDetailContainer = () => {

    const [individualProduct, setIndividualProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {
        const getProduct = new Promise((res, rej) => {
            setTimeout(() => {
                res(stock.find(prod => prod.id === prodId))
            }, 200)
        })
        getProduct.then((productFound) => {
            setIndividualProduct(productFound)
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [prodId])

    return (
        <>
            {loading ? <div className="loader"><img src={loader} alt="loading" /></div> : <ItemDetail item={individualProduct} />}
        </>
    )
}

export default ItemDetailContainer