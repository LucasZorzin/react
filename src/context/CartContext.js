import { useState, createContext, useContext } from "react";
// import { stock } from "../components/stock";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1)

    const addProduct = (item) => {
        let existing = cartList.find(eCart => eCart.item === item.item)
        if (existing) {
            cartList.map( (eCart) => {
                if ((eCart.item === item.item) && (eCart.stock < item.stock)) {
                    eCart.stock = eCart.stock + count
                    alert("Agregado correctamente")
                }
                else{
                    alert("No hay Stock")
                }
                return eCart;
            });
            console.log("REPETIDO:")
        } else {
            setCartList([...cartList, item])
            alert("Agregado correctamente")
        }
    }

    const clearCart = () => {
        setCartList([])
    }

    const deleteItem = () => alert("producto eliminado!");

    return (
        <CartContext.Provider value={{ cartList, addProduct, clearCart, deleteItem, count, setCount }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider