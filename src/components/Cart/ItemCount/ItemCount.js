import { useState } from "react";


export default function ItemCount(props) {

    const [Count, setCount] = useState(0);

    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            alert('No hay suficiente stock.');
        }
    }

    const restarContador = () => {
        if (Count > 1) {
            setCount(Count - 1)
        }
        else {
            setCount(0);
        }
    }

    const agregarCarrito = () => {
        alert('Añadido correctamente!');
    }
    return (
        <>
            <button className='btn btn-dark mx-2' onClick={sumarContador}>+</button>
            <p>{Count}</p>
            <button className='btn btn-dark mx-2' onClick={restarContador}>-</button>
            <button className='btn btn-dark mx-3' onClick={agregarCarrito}>Agregar al carrito</button>
        </>
    )
}