import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    const [plants, setPlants]=useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:3000/plants')
        .then(res=>res.json())
        .then(data=>setPlants(data))
    }, [])
    return (
        <div className='homeBody'>
            <section className="welcome_area bg-img background-overlay" style={{backgroundImage: 'url(assets/img/bg-img/bg-1.jpg)'}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content">
                                <h6>asoss</h6>
                                <h2>New Plants</h2>
                                <a href="#" className="btn rich-btn">view Plants</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Products key={8}></Products>
        
            <div className="top_catagory_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row justify-content-center">
                    
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(assets/img/bg-img/bg-2.webp)'}}>
                                <div className="catagory-content">
                                    <a href="#">Indoor Plants</a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(assets/img/bg-img/bg-3.jpeg)'}}>
                                <div className="catagory-content">
                                    <a href="#">Outdoor Plants</a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(assets/img/bg-img/bg-4.webp)'}}>
                                <div className="catagory-content">
                                    <a href="#">Pots</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="cta-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta-content bg-img background-overlay" style={{backgroundImage: 'url(assets/img/bg-img/bg-5.jpg)'}}>
                                <div className="h-100 d-flex align-items-center justify-content-end">
                                    <div className="cta--text">
                                        <h6>-60%</h6>
                                        <h2>Global Sale</h2>
                                        <a href="#" className="btn rich-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-products-slides owl-carousel">

                            
                                <div className="single-product-wrapper">
                                
                                    <div className="product-img">
                                        <img src="assets/img/product-img/plant1-full.webp" alt="" />
                                    
                                        <img className="hover-img" src="assets/img/product-img/plant1-short.webp" alt="" />
                                    
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>
                                
                                    <div className="product-description">
                                        <span>Indoor</span>
                                        <a href="#">
                                            <h6>Knot Front Mini Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>

                                    
                                        <div className="hover-content">
                                        
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            
                                <div className="single-product-wrapper">
                                
                                    <div className="product-img">
                                        <img src="assets/img/product-img/plant2-full.webp" alt="" />
                                    
                                        <img className="hover-img" src="assets/img/product-img/plant2-short.webp" alt="" />
                                    
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>
                                
                                    <div className="product-description">
                                        <span>Indoor</span>
                                        <a href="#">
                                            <h6>Poplin Displaced Wrap Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>

                                    
                                        <div className="hover-content">
                                        
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            
                                <div className="single-product-wrapper">
                                    
                                    <div className="product-img">
                                        <img src="assets/img/product-img/plant3-full.webp" alt="" />
                                    
                                        <img className="hover-img" src="assets/img/product-img/plant3-short.webp" alt="" />

                                    
                                        <div className="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div>

                                        
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>
                                
                                    <div className="product-description">
                                        <span>Indoor</span>
                                        <a href="#">
                                            <h6>PETITE Crepe Wrap Mini Dress</h6>
                                        </a>
                                        <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>

                                    
                                        <div className="hover-content">
                                        
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            
                                <div className="single-product-wrapper">
                                    
                                    <div className="product-img">
                                        <img src="assets/img/product-img/plant4-full.webp" alt="" />
                                        
                                        <img className="hover-img" src="assets/img/product-img/plant4-short.webp" alt="" />

                                        
                                        <div className="product-badge new-badge">
                                            <span>New</span>
                                        </div>

                                    
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>
                                
                                    <div className="product-description">
                                        <span>mango</span>
                                            <h6>PETITE Belted Jumper Dress</h6>
                                        <p className="product-price">$80.00</p>

                                    
                                        <div className="hover-content">

                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn rich-btn"> Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <footer className="footer_area clearfix">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area d-flex mb-30">
                                
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area mb-30">
                                <ul className="footer_widget_menu">
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="#">Payment Options</a></li>
                                    <li><a href="#">Shipping and Delivery</a></li>
                                    <li><a href="#">Guides</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-end">
                        
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area">
                                <div className="footer_heading mb-30">
                                    <h6>Subscribe</h6>
                                </div>
                                <div className="subscribtion_form">
                                    <form action="#" method="post">
                                        <input type="email" name="mail" className="mail" placeholder="Your email here" />
                                        <button type="submit" className="submit"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area">
                                <div className="footer_social_area">
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

            <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <p>
                                
            Copyright &copy; 2022 All rights reserved 

                            </p>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Home;