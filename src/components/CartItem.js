import React, { Component } from 'react';
import * as Message from './../constans/Message'


class CartItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         quantity : 1
    //     }
    //}
    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0){
            // this.setState({
            //     quantity : quantity
            // });
            this.props.onUpdateInCart(product, quantity)
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
        }
    }
    render() {
        var {item} = this.props
        // console.log(typeof(item.quantity));
        return (
            <tr>
                <td className="product_remove">
                    <i className="fa fa-trash-o" onClick={()=> this.onDelete(item.product)} />
                </td>
                <td className="product_thumb">
                <img src={item.product.image1} alt="" /></td>
                <td className="product_name">{item.product.name}</td>
                <td className="product-price">${item.product.price}</td>
                <td className="product_quantity"> 
                    <button className="quantitty-minus mr-2 pd-0" >
                     <span className="minus" ><i className="fas fa-minus " 
                     onClick={()=> this.onUpdateQuantity(item.product, item.quantity -1)}/></span> </button>
                    {/* {this.state.quantity} */}{item.quantity}
                    <button className="quantitty-plus ml-2 pd-0" >
                     <span className="plus" ><i className="fas fa-plus" 
                     onClick={()=> this.onUpdateQuantity(item.product, item.quantity +1)}/> </span> </button>
                 </td>
                <td className="product_total">$ {this.showTotal(item.product.price , item.quantity )}</td>
            </tr>
        );
    }
    onDelete = product => {
        //console.log(product);
        this.props.onDelete(product)
        this.props.onChangeMessage(Message.MSG_DELETE_SUCCESS)
    }
    showTotal = ( price , quantity) => {
        // console.log(typeof(price));
       //console.log(typeof(quantity));
        return price * quantity
    }
}

export default CartItem;