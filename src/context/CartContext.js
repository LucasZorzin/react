import { useState, createContext, useContext } from "react";
// import { stock } from "../components/stock";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1)

    const addProduct = (item) => {
        let existing = cartList.find(e => e.item === item.item)
        if (existing) {
            cartList.map( (e) => {
                // if ((e.item === item.item) && (e.cantidad < stock[1].stock)) {     --> Esa ultima parte sería para validar que no se pase del stock indicado en stock.js
                if (e.item === item.item) {
                    e.cantidad = e.cantidad + count
                }
                return e;
            });
            console.log("REPETIDO:")
        } else {
            setCartList([...cartList, item])
        }
    }

    const clearCart = () => {
        // let newCartList = cartList.filter(e => e.id !== id)
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, addProduct, clearCart, count, setCount }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider
