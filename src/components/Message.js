import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="empty-cart-section section-fluid">
                <div className="emptycart-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                                <div className="emptycart-content text-center">
                                    <div className="image">
                                        <img className="img-fluid" src="assets/images/emprt-cart/empty-cart.png" alt="" />
                                    </div>
                                    <h4 className="title">{this.props.message}</h4>
                                    {/* <h6 className="sub-title">{this.props.message}  </h6> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Message;