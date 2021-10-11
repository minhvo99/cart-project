import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="container mt-10 ">
                <div className="row">
                    <div className="col-12">
                        <div className="table_desc">
                            <div className="table_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="product_remove">Delete</th>
                                            <th className="product_thumb">Image</th>
                                            <th className="product_name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product_quantity">Quantity</th>
                                            <th className="product_total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {this.props.children}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart_submit">
                                <button className="btn btn-md btn-golden" type="submit">update cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;