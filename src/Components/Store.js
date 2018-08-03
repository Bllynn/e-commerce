import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import {getProducts} from '../dux/reducer';
import {connect} from 'react-redux';


class Store extends Component{
    constructor(){
        super()
        this.state={
            products:[],
            cart:[]
        }
    }
    componentDidMount(){
        axios.get('/api/products').then(products=>{
            console.log(products)
            this.props.getProducts(products.data)
        })
    }
    
        render(){
            let products = this.props.products.map(e=>{
                console.log(e.id)
            return(
                    <Product
                    key={e.id}
                    id={e.id}
                    name={e.product_name}
                    price={e.product_price}
                    image={e.product_image}/>
            )
        })
            
            return(
                <div className='main'>
                <h1>Store</h1>
                  <div className='everyting'>
                  {products}
                    </div>
                </div>

            )

    }
}
function mapStateToProps(state){
    return{
        cart:state.cart,
        products:state.products
    }
}

const actions = {
    getProducts
}

export default connect(mapStateToProps, actions)(Store)
