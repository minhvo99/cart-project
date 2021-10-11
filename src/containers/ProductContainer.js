import React, { Component } from 'react';
import {connect} from 'react-redux'
import ProductItem from '../components/ProductItem';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import {atcAddToCart,atcChangeMessage} from './../actions/index'

class ProductContainer extends Component {
    render() {
        let {products} = this.props
        return (
           <Product>
                {this.showProducts(products)}
           </Product>
        );
    }
    showProducts = products => {
        let result =null;
            if(products.length >0){
                result = products.map((product, index)=> {
                    return <ProductItem key={index}
                                        product={product}
                                        onAddToCart={this.props.onAddToCart}
                                        onChangeMessage={this.props.onChangeMessage}
                                        />
                })
            }
        return result
    }
}

ProductContainer.propTypes ={
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name:PropTypes.string.isRequired ,
            image1:PropTypes.string.isRequired,
            image2:PropTypes.string.isRequired ,
            price:PropTypes.number.isRequired,
            description:PropTypes.string.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispathToProps = (dispatch, props) => {
    return {
        onAddToCart : (product)=> {
            dispatch(atcAddToCart(product, 1))
        },
        onChangeMessage : message => {
            dispatch(atcChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps) (ProductContainer);