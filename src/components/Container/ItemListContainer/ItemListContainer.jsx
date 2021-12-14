import React from 'react';
import { useState, useEffect } from 'react';
import loader from '../../../img/loader.gif';
import ItemList from '../ItemList/ItemList.jsx';
import './ItemListContainer.css';
import { useParams } from 'react-router';
import dataBase from "../../../Firebase/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { catId } = useParams();

    useEffect(() => {

        const itemsCollection = collection(dataBase, "stock")
        const getProducts = async () => {


            if (catId) {

                const q = query((itemsCollection), where("category", "==", catId));
                const querySnapshot = await getDocs(query(q))
                setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)

            } else {

                const querySnapshot = await getDocs(itemsCollection)
                setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            }

        }

        getProducts()

    }, [catId]);

    return (
        <>
            {loading ? <div className="loader"><img src={loader} alt="loading" /></div> : <div className="content"><ItemList list={products} /></div>}
        </>
    )

}


export default ItemListContainer