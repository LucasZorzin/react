// import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";


const ItemCount = ({ stock, onAdd }) => {

    const {count, setCount} = useCartContext()

    const sumarContador = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert('No hay suficiente stock.');
        }
    }

    const restarContador = () => {
        if (count <= stock && count > 1) {
            setCount(count - 1)
        }
        else {
            setCount(0);
        }
    }

    return (
        <>
            <button className='btn btn-dark mx-2' onClick={sumarContador}>+</button>
            <p>{count}</p>
            <button className='btn btn-dark mx-2' onClick={restarContador}>-</button>
            <button className='btn btn-dark mx-3' onClick={onAdd}>Add to cart</button>
        </>
    )
}

export default ItemCount 