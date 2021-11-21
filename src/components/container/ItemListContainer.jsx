import React from 'react';
import { useState, useEffect } from 'react';
import { getFetch } from '../../components/item/item';
import loader from '../../img/loader.gif';
import './ItemListContainer.css';


const ItemList = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        return () => {
            console.log('clean')
        }
    }, [])

    return (
        <>
            <div className="row">
                <p className="col-12 center textUppercase">{props.item}</p>
            </div>

            {loading ? <div className="loader"><img src={loader} /></div> : products.map(prod =>

                <div key={prod.id} className="card w-50 mt-5 mb-5 container" >
                    <div className="card-header center">
                        {prod.name}
                    </div>
                    <div className="card-body">
                        <img className="img-fluid w-25" src={prod.img} alt="foto" />
                        <div>
                            {'Category: ' + prod.category}
                        </div>
                        <div>
                            {'$' + prod.price}
                        </div>
                    </div>
                    <div className="card-footer center">
                        <button className="btn btn-outline-primary btn-block">
                            Comprar
                        </button>
                    </div>

                </div>
            )}
        </>
    )
}

export default ItemList