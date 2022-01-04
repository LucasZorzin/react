import { useState } from "react"
import { Accordion, Form, Button } from "react-bootstrap"
// import img_paypal from '../../assets/paypal.png'
import { useCartContext } from "../../context/CartContext";

const Payment = ({ createOrder, fin }) => {

    const { clearCart, totalPrice } = useCartContext();

    const [checked, setChecked] = useState(false)

    const finishPurchase = () => {
        createOrder()
        clearCart()
        fin()
    }

    return (
        <Form className="form-payment" onChange={() => setChecked(true)}>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <label htmlFor="cash" className="label-icon">Cash <i className="fas fa-money-bill" /></label>
                        <input className="mx-2" style={{width: 'auto'}} type="radio" name="payment" value="cash" />
                    </Accordion.Header>
                    <Accordion.Body>
                        You will have to pay ${totalPrice} on the day of pick-up.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <label htmlFor="mercadopago" className="label-icon">Mercado Pago <i className="fas fa-money-bill" /></label>
                        <input className="mx-2" style={{width: 'auto'}} type="radio" name="payment" value="mercadopago" />
                    </Accordion.Header>
                    <Accordion.Body>
                        You will be redirected to the Mercado Pago page. (beta)
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            {checked ? <Button size="sm"  className="btn-finish " onClick={finishPurchase}>Purchase</Button> :
                <Button size="sm"  className="btn-finish" disabled>Purchase</Button>
            }
        </Form>
    )
}

export default Payment