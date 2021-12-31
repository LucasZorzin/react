import React from 'react';
// import ItemCount from '../../Cart/ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({ item }) {
    return (
        <div className='col-12 col-lg-4'>
            <div key={item.id} className="card mb-4" >
                <div className="card-header center textUppercase">
                    {item.name}
                </div>
                <div className="card-body">
                    <Link to={`/react/item/${item.id}`}><img className="img-fluid" src={item.img} alt="foto" /></Link>
                    <div className="textUppercase small">
                        {'Category: ' + item.category}
                    </div>
                    <div className="pt-2 bold">
                        {'$' + item.price}
                    </div>

                    <Link className="text-black textUppercase" to={`/react/item/${item.id}`}>🛒</Link>

                </div>

            </div>
        </div>
    )

}
