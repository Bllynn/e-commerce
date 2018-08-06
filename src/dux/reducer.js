const initialState={
    cart:[],
    products:[],
    total:[]
}

const GET_PRODUCTS='GET_PRODUCTS',
EDIT_CART='EDIT_CART',
ADD_TO_CART='ADD_TO_CART',
DELETE_ITEM='DELETE_ITEM',
DELETE_CART='DELETE_CART',
GET_CART='GET_CART',
GET_TOTAL='GET_TOTAL'


export function getProducts(data){
    return{
        type:GET_PRODUCTS,
        payload:data
    }
}
export function getCart(data){
    return{
        type:GET_CART,
        payload:data
    }
}
export function editQuantity(data){
    return{
        type:EDIT_CART,
        payload:data
    }
}
export function addToCart(data){
    return {
        type:ADD_TO_CART,
        payload:data
    }
}
export function deleteCart(){
    return {
        type:DELETE_CART,
        payload:[]
    }
}
export function getTotal(total){
    return{
        type:GET_TOTAL,
        payload:total
    }
}
export default function reducer(state=initialState,action){
    switch(action.type){
    
    case GET_PRODUCTS:
    return Object.assign({},state, {products:action.payload})
    case EDIT_CART:
    return Object.assign({},state,{cart:action.payload})
    case ADD_TO_CART:
    return Object.assign({}, state, {cart:action.payload})
    case GET_CART:
    return Object.assign({}, state, {cart:action.payload})
    case DELETE_ITEM:
    return Object.assign({}, state, {cart:action.payload})
    case DELETE_CART:
    return Object.assign({},state)
    case GET_TOTAL:
    return Object.assign({},state, {total:action.payload})
    default:
    return state;
    }
}