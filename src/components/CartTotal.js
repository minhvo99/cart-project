import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        let {cart} = this.props
        return (
            <div className=" tota-amount ">
                 <h3 className="mr-3">ToTal:<span className="pl-3">${this.showSubTotal(cart)}</span></h3>                
            </div>
        );  
    }
    showSubTotal = cart => {
        let result = null;
        if(cart.length > 0){
            for (let i = 0; i < cart.length; i++) {
                result += cart[i].product.price * cart[i].quantity
            }
        }
        return result;
    }
}

export default CartTotal;