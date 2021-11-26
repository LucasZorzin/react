import React from 'react';
import ItemCount from '../../Cart/ItemCount/ItemCount';

export default function Item({ item }) {
    return (
        <div key={item.id} className="card w-50 mt-5 mb-5 container" >
            <div className="card-header center">
                {item.name}
            </div>
            <div className="card-body">
                <img className="img-fluid w-25" src={item.img} alt="foto" />
                <div>
                    {'Category: ' + item.category}
                </div>
                <div>
                    {'$' + item.price}
                </div>
            </div>
            <div className="card-footer center">
                <ItemCount stock={item.stock} />
            </div>

        </div>

    )

}
