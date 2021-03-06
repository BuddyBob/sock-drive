import React, { useState } from "react";
import StripePayment from "./components/StripeMethod/StripePayment";
import PaypalPayment from "./components/PaypalMethod/PaypalPayment";
import GenPicture from "./components/GenPicture";
import banner from './assets/images/banner.jpg'
import NavBar from "./components/NavBar"
import "./index.css";

export default function Home() {
  return (
    <div className="App">
      <NavBar/>
      <div className="title">Sock Drive to Help the Homeless</div>
      <form>
        <div className="product">
          <p className="desc_intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Itaque illum veritatis ullam, ut iste rem. <br />
            Vel animi doloribus unde quasi dolorem culpa iste. <br />
            Molestiae dicta modi tenetur officia omnis earum?
          </p>
        </div>
        <div className="row product">
          <div className="row product-demo1">
            <GenPicture />
          </div>

          <div className="payment-methods">
            {/* <div className="row buy-paypal">
              <PaypalPayment price="1" title="Book PP" />
            </div> */}
            <div className="row buy-stripe">
              <StripePayment price="1" title="Book" />
            </div>
          </div>

          <div className="desc">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Itaque illum veritatis ullam, ut iste rem. <br />
              Vel animi doloribus unde quasi dolorem culpa iste. <br />
              Molestiae dicta modi tenetur officia omnis earum?
            </p>
          </div>
        </div>

        <div className="row product">
          <div className="row product-demo2">
            <GenPicture />
          </div>

          <div className="payment-methods">
            {/* <div className="row buy-paypal">
              <PaypalPayment price="10" title="Book PP" />
            </div> */}
            <div className="row buy-stripe">
              <StripePayment price="5" title="Book" />
            </div>
          </div>

          <div className="desc">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Itaque illum veritatis ullam, ut iste rem. <br />
              Vel animi doloribus unde quasi dolorem culpa iste. <br />
              Molestiae dicta modi tenetur officia omnis earum?
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
