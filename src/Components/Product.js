import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert';



class Product extends Component{


    handleAdd=()=>{
        const {id} = this.props
console.log(this.props)
        axios.post('/api/cart',{id}).then((res)=>{
            swal({
              title:'Added to cart',
              icon:'success',
              button:'Keep shopping',
            });
        })
    }
    render(){
        return(

            <div className='productContainer card'>
                <div className="card-header">
                <h3>Name:{this.props.name}</h3>
                </div>
                <div className="card-body">
                <img src={this.props.image} alt="product"/>
                <h3>Price:{this.props.price}</h3>
                </div>
                

                    <div className='productButtons card-footer'>
                        <button className='btn btn-primary' onClick={this.handleAdd}>Add to Cart</button>
                    
            </div>
            </div>




        )
    }

}
export default Product
