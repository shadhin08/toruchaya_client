import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../media/logo.png';
import './Header.css';

const Header = () => {
   
    return (
            <header className="header_area">
            <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
               
                <nav className="classy-navbar" id="richNav">
                    <img src={LOGO} className="navLogo" alt="" />
                    <a className="nav-brand" href="#" > Toruchaya</a>
                   
                    <div className="classy-navbar-toggler">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>
                   
                    <div className="classy-menu">
                       
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>
                      
                        <div className="classynav">
                            <ul>
                                <li><a href="#">Plants</a>
                                    <div className="megamenu">
                                        <ul className="single-mega cn-col-4 ">
                                            <li className="title ">Indoor Plants</li>
                                            <Link to={'/indoor'}><li><span>All indoor plants</span></li></Link>
                                            <li className="hover-me"><a href="#" >Plant Type <i className="arrow down"></i></a>
                                                <ul className="hover-dropdown">
                                                    <li><a href="#">Fern</a></li>
                                                    <li><a href="#">Palms</a></li>
                                                    <li><a href="#">Flowering</a></li>
                                                    <li><a href="#">Hanging</a></li>
                                                    
                                                </ul>
                                            </li>

                                            <li className="hover-me"><a href="#" >Room <i className="arrow down"></i></a>
                                                <ul className="hover-dropdown">
                                                    <li><a href="#">Bedroom</a></li>
                                                    <li><a href="#">Bathroom</a></li>
                                                    <li><a href="#">Corridor</a></li>
                                                    <li><a href="#">Checkout</a></li>
                                                    <li><a href="#">Living Room</a></li>
                                                    <li><a href="#">Study</a></li>
                                                    <li><a href="#">Kitchen</a></li>
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Outdoor Plants</li>
                                            <li><a href="#">All outdoor plants</a></li>
                                            <li className="hover-me"><a href="#" >Plant Type <i className="arrow down"></i></a>
                                                <ul className="hover-dropdown">
                                                    <li><a href="#">Plam & Tree</a></li>
                                                    <li><a href="#">Ferns</a></li>
                                                    <li><a href="#">Flowering</a></li>
                                                    <li><a href="#">Climbing</a></li>
                                                    <li><a href="#">Bamboo & Grasses</a></li>
                                                    <li><a href="#">Edibles</a></li>
                                                </ul>
                                            </li>
                                            <li className="hover-me"><a href="#" >Outdoor space <i className="arrow down"></i></a>
                                                <ul className="hover-dropdown">
                                                    <li><a href="#">Balcony</a></li>
                                                    <li><a href="#">Windowsill</a></li>
                                                    <li><a href="#">putio & deck</a></li>
                                                    <li><a href="#">Garden</a></li>
                                                    <li><a href="#">Doorstep</a></li>
                                                </ul>
                                            </li>
                                            <li className="hover-me"><a href="#" >Condition <i className="arrow down"></i></a>
                                                <ul className="hover-dropdown">
                                                    <li><a href="#">Sunny Spot</a></li>
                                                    <li><a href="#">Shady spot</a></li>
                                                    <li><a href="#">Windy spot</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Pots</li>
                                            <li><a href="#">Indoor Pots</a></li>
                                            <li><a href="#">Outdoor Pots</a></li>
                                            <li><a href="#">Clay Pots</a></li>
                                            <li><a href="#">Plastic Pots</a></li>
                                            <li><a href="#">Ceramic Pots</a></li>
                                        </ul>
                                        <div className="single-mega cn-col-4">
                                            <img src="assets/img/logo-image/logo_with_name.png" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Product Details</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        
                                    </ul>
                                </li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                       
                    </div>
                </nav>

              
                <div className="header-meta d-flex clearfix justify-content-end">
                  
                    <div className="search-area">
                        <form method="post">
                            <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                            <button type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                  
                    <div className="favourite-area">
                        <a href="#"><img src="assets/img/core-img/heart.svg" alt="" /></a>
                    </div>
                   
                    <div className="user-login-info">
                        <a href="#"><img src="assets/img/core-img/user.svg" alt="" /></a>
                    </div>
                   
                    <div className="cart-area">
                        <a href="#" id="richCartBtn"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></a>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;