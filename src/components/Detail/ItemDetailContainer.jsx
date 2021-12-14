import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loader from '../../img/loader.gif';
import { ItemDetail } from './ItemDetail.jsx';
import dataBase from "../../Firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";

const ItemDetailContainer = () => {

    const [individualProduct, setIndividualProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { prodId } = useParams();

    useEffect(() => {

        const getProduct = async () => {

            if (prodId) {
                const docRef = doc(dataBase, "stock", prodId);
                const docSnap = await getDoc(docRef);
                setIndividualProduct({id: docSnap.id, ...docSnap.data()})
                setLoading(false)
            }

        }

        getProduct()


    }, [prodId])


    return (
        <>
            {loading ? <div className="loader"><img src={loader} alt="loading" /></div> : <ItemDetail item={individualProduct} />}
        </>
    )
}

export default ItemDetailContainer