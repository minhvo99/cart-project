import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header-section d-none d-xl-block">
                <div className="header-wrapper">
                    <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    {/* Start Header Logo */}
                                    <div className="header-logo">
                                        <div className="logo">
                                            <a href="index.html"><img src="public/shop-hono/assets/images/logo/logo_black.png" alt="" /></a>
                                        </div>
                                    </div>
                                    {/* End Header Logo */}
                                    {/* Start Header Main Menu */}
                                    <div className="main-menu menu-color--black menu-hover-color--golden">
                                        <nav>
                                            <ul>
                                                <li className="has-dropdown">
                                                    <a className="active main-menu-link" href="index.html">Home</a>
                                                </li>
                                                <li className="has-dropdown has-megaitem">
                                                    <a href="product-details-default.html">Shop </a>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="blog-single-sidebar-left.html">Blog</a>
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="/pages">Pages</a>
                                                </li>
                                                <li>
                                                    <a href="about-us.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="contact-us.html">Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="header-action-link action-color--black action-hover-color--golden">
                                        <li>
                                            <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                                <i className="icon-heart" />
                                                <span className="item-count">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                                <i className="icon-bag" />
                                                <span className="item-count">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#search">
                                                <i className="icon-magnifier" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#offcanvas-about" className="offacnvas offside-about offcanvas-toggle">
                                                <i className="icon-menu" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;