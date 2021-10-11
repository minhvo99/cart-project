import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-top mt-5">
                <div className="container">
                    <div className="row mb-n6">
                        <div className="col-lg-3 col-sm-6 mb-6">
                            <div className="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up" data-aos-delay={0}>
                                <h5 className="title">INFORMATION</h5>
                                <ul className="footer-nav">
                                    <li>Delivery Information</li>
                                    <li>Terms &amp; Conditions</li>
                                    <li>Contact</li>
                                    <li>Returns</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-6">
                            <div className="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up" data-aos-delay={200}>
                                <h5 className="title">MY ACCOUNT</h5>
                                <ul className="footer-nav">
                                    <li>My account</li>
                                    <li>Wishlist</li>
                                    <li>Privacy Policy</li>
                                    <li>Frequently Questions</li>
                                    <li>Order History</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-6">
                            <div className="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up" data-aos-delay={400}>
                                <h5 className="title">CATEGORIES</h5>
                                <ul className="footer-nav">
                                    <li>Decorative</li>
                                    <li>Kitchen utensils</li>
                                    <li>Chair &amp; Bar stools</li>
                                    <li>Sofas and Armchairs</li>
                                    <li>Interior lighting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-6">
                            <div className="footer-widget-single-item footer-widget-color--golden" data-aos="fade-up" data-aos-delay={600}>
                                <h5 className="title">ABOUT US</h5>
                                <div className="footer-about">
                                    <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                                    <address className="address">
                                        <span>Address: 4710-4890 Breckinridge St, Fayettevill</span>
                                        <span>Email: yourmail@mail.com</span>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;