import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Paypal from './Paypal'
import PayPalIcon from '../../assets/images/paypal-icon.png';

export default function PaypalPayment(props) {
    const [checkout,setCheckOut] = useState(false)
    const history = useHistory();
    const handleOnClick = () => history.push('/paypal-payment');
    return (
        <div>
            {/* display paypal payment options */}
            {checkout ? (
                <div>
                    {console.log("hello")}
                    {handleOnClick()}
                    <Paypal title={props.title} price={props.price}/>
                </div>
            ) : (
            // checkout button
            <button onClick={() => {setCheckOut(true)}} className="btn-large buy-btn">
                <img className="buy-btn-icon-paypal" src={PayPalIcon} alt="paypal-"/>
                Buy ${props.price}
            </button>
            )}
        </div>
    )
}
