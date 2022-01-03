import React from "react";
import { useCartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const customId = "custom-id-yes";

const ItemCount = ({ stock, onAdd }) => {

    const {count, setCount} = useCartContext()

    const sumarContador = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            const notify = () => toast.error("Not enough stock.", {toastId: customId})
            notify();
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
            {/* <button className='btn btn-dark mx-2' onClick={sumarContador}>+</button>
            <p>{count}</p>
            <button className='btn btn-dark mx-2' onClick={restarContador}>-</button>
            <button className='btn btn-dark mx-3' onClick={onAdd}>Add to cart</button> */}

            <div class="countButtons">
                <button class="stockBtn" onClick={restarContador}>-</button>
                <div class="stockBtn stockBtnItem">{count}</div>
                <button class="stockBtn" onClick={sumarContador}>+</button>
            </div>
            <div className="countButtons mx-3"><button className='px-2 stockBtn' onClick={onAdd}>Add to cart 🛒</button></div>
            <ToastContainer
                autoClose={2000}>
            </ToastContainer>
        </>
    )
}

export default ItemCount 