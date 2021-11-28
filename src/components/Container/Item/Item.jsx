import React from 'react';
import ItemCount from '../../Cart/ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    return (
        <div key={item.id} className="card w-50 mt-5 mb-5 container" >
            <div className="card-header center textUppercase">
                {item.name}
            </div>
            <div className="card-body">
                <img className="img-fluid w-25" src={item.img} alt="foto" />
                <div className="textUppercase">
                    {'Category: ' + item.category}
                </div>
                <div className="bold">
                    {'$' + item.price}
                </div>
                <div>
                    <Link className="text-black" to={`/react/item/${item.id}`}>Detalle</Link>
                </div>
            </div>
            <div className="card-footer center">
                <ItemCount stock={item.stock} />
            </div>

        </div>

    )

}
