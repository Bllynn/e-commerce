require('dotenv').config();
const ctrl=require('./controller.js');
const express = require('express'),
app = express(),
massive = require('massive');
app.use(express.json());

let {
    SERVER_PORT,
    CONNECTION_STRING
}=process.env;

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('DB connected');
});






app.delete('/api/cart/:id',ctrl.deleteItem)

app.get('/api/products', ctrl.getProducts)
app.post('/api/cart', ctrl.addToCart)



const port = SERVER_PORT ||1337
app.listen(port,()=>{console.log(`Server is listening on port ${port}`)})