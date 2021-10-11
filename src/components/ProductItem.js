import React, { Component } from 'react';
import * as Message from './../constans/Message'

class ProductItem extends Component {
    onAddToCart = product => {
        //console.log(product);
        this.props.onAddToCart(product)
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
    }
    render() {
        let {product} = this.props
        return (
            <div className="col-xl-4 col-sm-6 col-12">
            <div className="product-default-single-item product-color--golden">
                <div className="image-box">
                    <span className="image-link">
                        <img src={product.image1} alt="" />
                        <img src={product.image2} alt="" />
                    </span>
                    <div className="action-link">
                        <div className="action-link-left">
                            <p className="addToCart"  
                               data-bs-toggle="modal" 
                               data-bs-target="#modalAddcart"
                               onClick={ ()=> this.onAddToCart(product)}
                               >Add to Cart</p>
                        </div>
                        <div className="action-link-right">
                            <p className="heart" ><i className="icon-heart" /></p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-left">
                        <h6 className="title">{product.name}</h6>
                        <ul className="review-star">
                            <li className="fill"><i className="ion-android-star" /></li>
                            <li className="fill"><i className="ion-android-star" /></li>
                            <li className="fill"><i className="ion-android-star" /></li>
                            <li className="fill"><i className="ion-android-star" /></li>
                            <li className="empty"><i className="ion-android-star" /></li>
                            {/* <li>
                                {(rating) =>this.showRating(rating)}
                            </li> */}
                        </ul>
                    </div>
                    <div className="content-right">
                        <span className="price">${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    // showRating = rating => {
    //     let i ,  j;
    //     let result = []
    //     for ( i = 1; i < rating.length; i++) {
    //         result.push(<i key={i} className="ion-android-star" />)
    //     }
    //     for ( j = 0; j < (5 - rating.length); j++) {
    //         result.push(<i key={i+j} className="ion-android-star" />)          
    //     }
    //     return result;
    // }
}

export default ProductItem;