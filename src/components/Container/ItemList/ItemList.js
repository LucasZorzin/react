import React from 'react';
import Item from '../Item/Item';


export default function ItemList(props) {
    return (
        <>
            {props.list.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </>
    )
}