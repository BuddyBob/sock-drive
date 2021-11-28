const cors = require("cors")
const express = require("express")
const stripe = require("stripe")("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")
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

const whitelist = ['http://localhost:3000', 'http://localhost:8282', 'https://sock-drive.herokuapp.com/ ']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


const port = process.env.PORT || 8282

app.listen(port, () => console.log("Listening at port 8282"))
