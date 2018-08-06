import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getTotal} from '../dux/reducer';
import swal from 'sweetalert';



class Items extends Component{

    handleAddItem=()=>{
        const {id}=this.props
            axios.put('/api/cart',{id}).then((res)=>{
            // console.log(res.data)
            this.props.getTotal(res.data)
            })
    }
    handleDeleteItem=()=>{
        const {id} = this.props
        axios.put('/api/delete',{id}).then(res=>{
            // console.log(res.data)
                axios.get('/api/details').then(updatedCart=>{
                    this.props.getTotal(updatedCart.data)
                    
                })
            })
    }
    handleDeleteProduct=(id)=>{
        // console.log(id)
        axios.delete('/api/product/'+id,).then(res=>{
            // console.log(res.data)
                this.props.getTotal(res.data)
                // console.log(this.props.total)
            })
    }
    render(){
        // console.log(this.props.total)
        return(

            <div className='productContainer card'>
                <div className="card-header">
                    <h3>Name:{this.props.name}</h3>
                </div>
                <div className="card-body">
                <img src={this.props.image} alt="product"/>
                    <h3>Price:{this.props.price}</h3>
                    <h3>Quantity:{this.props.quantity}</h3>
                    <h3>Item Total:${Number(this.props.price.replace(/[$]+/g, '')*this.props.quantity).toFixed(2)}</h3>
                </div>
                    <div className='productButtons card-footer'>
                        <button className='btn btn-primary' onClick={this.handleAddItem}>+1</button>
                        <button className='btn btn-primary' onClick={this.handleDeleteItem}>-1</button>
                        <button className='btn btn-primary' onClick={()=>this.handleDeleteProduct(this.props.id)}>Delete Item</button>

                    
                </div>
            </div>




        )
    }

}
function mapStateToProps(state){
    return{
        total:state.total
    }
}

const actions = {
    getTotal,
}

export default connect(mapStateToProps, actions)(Items)