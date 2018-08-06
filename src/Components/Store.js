import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import {getProducts} from '../dux/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


class Store extends Component{
   
    componentDidMount(){
        axios.get('/api/products').then(products=>{
            this.props.getProducts(products.data)
        })
    }
    
        render(){
            let products = this.props.products.map(e=>{
            return(
                    <Products
                    key={e.id}
                    id={e.id}
                    name={e.product_name}
                    price={e.product_price}
                    image={e.product_image}
                    // {...e} does the same thing;
                    />
            )
        })
            
            return(
                <div className='main'>
                <h1>Store</h1>
                  <div className='everything'>
                  {products}
                    </div>
                  <Link to='/cart'><button className='btn btn-primary'>CART</button></Link>
                </div>

            )

    }
}
function mapStateToProps(state){
    return{
        products:state.products
    }
}

const actions = {
    getProducts
}

export default connect(mapStateToProps, actions)(Store)
