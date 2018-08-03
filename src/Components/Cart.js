import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteProduct,getProducts} from '../dux/reducer';



class Cart extends Component{
    constructor(){
        super()
        this.state={
            cart:[]
        }
    }

    deleteApt=(id)=>{
        axios.delete('/api/cart/'+id).then(cart=>{
            this.props.deleteProduct(cart.data)
        })
    }


        render(){
            return(
                <div>

                </div>

            )

    }
};
function mapStateToProps(state){
    return{
        cart:state.cart,
        products:state.products
    }
}

const actions = {
    getProducts,
    deleteProduct
}

export default connect(mapStateToProps, actions)(Cart)
