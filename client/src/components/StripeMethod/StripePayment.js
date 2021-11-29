import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import StripeIcon from '../../assets/images/stripe-icon.png';
export default function StripePayment(product) {
    console.log(product)
    const makePayment = token => {
        const body = {
          "token":token,
          "product":product
        }
        const headers = {
          "Content-Type":"application/json",
        }
    
        return fetch(`http://localhost:8282/payment`, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        })
        .then(response => {
          console.log("Response: " + response);
          const {status} = response;
          console.log("Status" + status);
        })
        .catch(error => console.log(error+"hKDJFLKSJDFLKFjdklsjf HELLO"));
      }
    
    return (
        <div>
                      
            <StripeCheckout stripeKey="pk_test_51JNn34EA934vxoltGlS1lzurj1QbG6dCdUvModYkoNb1qEcTXA6vHck3w8mnmuTj7aNXQkJn4a80wca5qKmRRONn00Q2PcPgbd" message={"Thank you for your order!"} token={makePayment} name={product.title} amount={product.price * 100} >
                <button className="btn-large buy-btn">
                  <img className="buy-btn-icon-stripe" style={{width:"30px",position:"relative",right:'14px',marginRight:"10px"}} src={StripeIcon} alt="stripe-"/>
                  Buy ${product.price}
                </button>
            </StripeCheckout>
        </div>
    )
}
