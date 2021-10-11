import * as types from '../constans/index'

export const atcAddToCart = (product, quantity) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const atcChangeMessage = (message) => {
    return {
        type : types.CHANGE_MSG,
        message
    }
}

export const atcDeleteProduct = (product) => {
    return {
        type : types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const atcUpdateProduct = (product, quantity) => {
    return {
        type : types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}