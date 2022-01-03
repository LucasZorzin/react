import { useState, createContext, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const customId = "custom-id-yes";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)

    const addProduct = (item) => {
        let existing = cartList.find(eCart => eCart.item === item.item)
        if (existing) {
            cartList.map( (eCart) => {
                if ((eCart.item === item.item) && (eCart.stock < item.stock)) {
                    eCart.stock = eCart.stock + count;
                    const notify = () => toast.success("Successfully added to cart!");
                    notify();
                }
                else{
                    const notify = () => toast.error("Not enough stock.", {toastId: customId})
                    notify();
                }
                return eCart;
            });
            console.log("REPETIDO:")
        } else {
            setCartList([...cartList, item]);
            const notify = () => toast.success("Successfully added to cart!");
            notify();
        }
    }

    const clearCart = () => {
        setCartList([])
    }

    const deleteItem = (item) => {
        let newCartList = cartList.filter(e => e.item !== item)
        setCartList([...newCartList])
        const notify = () => toast.success("Successfully removed.");
        notify();
    }

    useEffect (() => {
        const totalPrice = cartList.map(prod => (prod.stock * prod.price)).reduce((acc, el) => acc + el, 0);
        setTotalPrice(totalPrice)
    }, [cartList])

    return (
        <>
        <CartContext.Provider value={{ cartList, addProduct, clearCart, deleteItem, count, setCount, totalPrice }}>
            {children}
        </CartContext.Provider>
        <ToastContainer
            autoClose={2000}>
        </ToastContainer>
        </>
    )

}

export default CartContextProvider