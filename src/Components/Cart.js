import React, { Component } from 'react';
import axios from 'axios';
import Items from './Items';
import {connect} from 'react-redux';
import {getCart,getTotal} from '../dux/reducer';
import {Link} from 'react-router-dom';



class Cart extends Component{

    componentDidMount(){
        axios.get('/api/cart').then(items=>{
            this.props.getCart(items.data)
        })
        axios.get('/api/details').then(cart =>{
            this.props.getTotal(cart.data)
        })
    }
    hopefulFunction(data){
        const total = [];
        data.map((e,i)=>{
           let cartTotal = (Number(e.product_price.replace(/[$]+/g, '')*e.quantity)).toFixed(2);
           total.push(cartTotal)
           const sum = total.reduce((total,amount) => Number(total) + Number(amount));
           return(
               sum
           );
        }
        )}
    render(){
        
        const total = [];
        this.props.total.map((e,i)=>{
           let cartTotal = (Number(e.product_price.replace(/[$]+/g, '')*e.quantity).toFixed(2));
           total.push(cartTotal);
           const sum = total.reduce((total,amount) => Number(total) + Number(amount));
           return(
               console.log(sum)
           );
        })
        
        let items =  this.props.total.map(e=>{
            return(
                <Items
                    id={e.product_id}
                    key={e.product_id}
                    quantity={e.quantity}
                    name={e.product_name}
                    price={e.product_price}
                    image={e.product_image}
                />
            )
        })
      

        return(
                <div className='main'>
                <h1>Cart</h1>
                  <div className='everything'>
                  {items}
                    </div>
                    <h1>Total:${this.hopefulFunction(this.props.total)}</h1>
                    
                  <Link to='/Store'><button className='btn btn-primary'>STORE</button></Link>
                </div>

            )

    }
};



function mapStateToProps(state){
    return{
        cart:state.cart,
        total:state.total
    }
}

const actions = {
    getCart,
    getTotal,
}

export default connect(mapStateToProps, actions)(Cart)
