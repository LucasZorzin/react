import React from 'react';

const ItemList = (props) => {
    console.log(props)
    return (
        <>
            <p>{props.item}</p>
        </>
    )
}

export default ItemList