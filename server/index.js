const cors = require("cors")
const express = require("express")
const stripe = require("stripe")("sk_test_51JNn34EA934vxolt8b1M8HBLL9AUXrKNVWcWrGUGPH49jiRnUDU7ZqG8xa6IznIoOLjNc8TrnbzcIqHz3j7irsgr00BFcHlGZL")
const { v4: uuidv4 } = require('uuid');
const app = express()
//middleware
app.use(express.json())
app.use(cors())
//routs
app.get("/",(req,res) => {
    res.send("It works HEHEHEH")
})

app.post("/payment",(req,res) => {

    const {product,token} = req.body;
    console.log("Product: " + product);
    console.log("Price: " + product.price);
    const idempotencyKey = uuidv4()
    console.log("KEY THING"+idempotencyKey)
       
    return stripe.customers.create({
        email:token.email,
        source:token.id,
    }).then(customer => {
        console.log(customer)
        stripe.charges.create({
            amount: product.price * 100,
            currency: "usd",
            customer:customer.id,
            receipt_email:token.email,
            description:`purchase of ${product.name}`,
            shipping:{
                name:token.card.name,
                address: {
                    country:token.card.address_country
                }
            }
        },{idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))

})
//listen
app.listen(8282, () => console.log("Listening at port 8282"))
