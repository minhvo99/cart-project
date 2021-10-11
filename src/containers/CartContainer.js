import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../components/Cart'
import * as MSG from '../constans/Message'
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import {atcChangeMessage, atcDeleteProduct,atcUpdateProduct} from './../actions/index'

class CartContainer extends Component {
    render() {
        let {cart} = this.props
        // console.log(typeof(cart[0].quantity));
        return (
        <>
             <Cart>
            {this.showCartItem(cart)}
            </Cart>
            {this.showTotalAmoun(cart)}
        </>
        );
    }
    showCartItem = (cart) => {
        let result = <tr>
            <td>
                {MSG.MSG_CART_EMPTY}
            </td>
        </tr>;
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return <CartItem key={index}
                                 item={item}
                                 index={index}
                                 onDelete={this.props.onDelete}
                                 onChangeMessage={this.props.onChangeMessage}
                                 onUpdateInCart={this.props.onUpdateInCart} />
            })
        }
        return result
    }
    showTotalAmoun = cart => {
        let result = null;
        if(cart.length > 0){
            result = <CartTotal cart={cart} />
        }
        return result
    }
}

CartContainer.propTypes ={
    cart : PropTypes.arrayOf(PropTypes.shape({
          product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name:PropTypes.string.isRequired ,
            image1:PropTypes.string.isRequired,
            image2:PropTypes.string.isRequired ,
            price:PropTypes.number.isRequired,
            description:PropTypes.string.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
          }).isRequired,
          quantity : PropTypes.number.isRequired
        })).isRequired
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispathToProps = (dispath, props) => {
    return {
        onDelete : product => {
            dispath(atcDeleteProduct(product))
        },
        onChangeMessage : message => {
            dispath(atcChangeMessage(message))
        },
        onUpdateInCart : (product, quantity)=> {
            dispath(atcUpdateProduct(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps) (CartContainer);