import { useState, createContext, useContext, useEffect } from "react";
// import { stock } from "../components/stock";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)

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

    const deleteItem = (item) => {
        let newCartList = cartList.filter(e => e.item !== item)
        setCartList([...newCartList])
        alert("Eliminado correctamente")
    }

    useEffect (() => {
        const totalPrice = cartList.map(prod => (prod.stock * prod.price)).reduce((acc, el) => acc + el, 0);
        setTotalPrice(totalPrice)
    }, [cartList])

    return (
        <CartContext.Provider value={{ cartList, addProduct, clearCart, deleteItem, count, setCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider