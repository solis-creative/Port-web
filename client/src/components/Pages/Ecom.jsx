import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsBanner from '../PageBanners/BlogDetailsBanner';
import image from "../../assets/images/zen.png";
import clientImageOne from "../../assets/images/client-avatar1.jpg";
import clientImageTwo from "../../assets/images/client-avatar2.jpg";
import clientImageThree from "../../assets/images/client-avatar3.jpg";
import Footer from '../Common/Footer';
 
class Ecom extends React.Component {
    render(){
        return (
            <React.Fragment>
                {/* <BlogDetailsBanner /> */}

                <section className="blog-details-area ptb-80">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-lg-8 col-md-12 offset-lg-2">
                                <div className="blog-details">
                                    <div className="article-img">
                                        <img 
                                            src={image}
                                            alt="zen-details" 
                                        />
                                    </div>
                                    <div className="work-tech-spec">
                                        <h6>Technologies and Stack</h6>
                                        <ul>
                                            <li>Node JS</li>
                                            <li>Express</li>
                                            <li>MongoDB</li>
                                            <li>Mongoose</li>
                                            <li>Atlas</li>
                                            
                                        </ul>
                                    </div>
                                    <div className="article-text">
                                        <ul className="category">
                                            <li><Link to="#">Database Architecture</Link></li>
                                            <li><Link to="#">Software Engineering</Link></li>
                                            <li><Link to="#">Designing</Link></li>
                                            <li><Link to="#">In-House System</Link></li>
                                            
                                        </ul>
                                        
                                        <h4> ZEN Distributors </h4>
                                        
                                        <p>Zen Distributors is a clothes distribution outlet with over 50 up and coming brands which they distribute over the UK   </p>
                                        <p>We offered the client a straight forward economical web application using the product code for the items. </p>
                                        <h5>Stock Checker</h5>

                                        <p>The client was looking for a convenient way for their staff to look for stock on a system and where it was placed that gives them information on the state of the products and the availability of the product. We reviewed the technology available to the company which was the mobile phones, one tablet and a computer in the main office.  </p>

                                        <h5>System Design/UI</h5>
                                        <p>The client wanted a system where staff could easily search for items and query them and edit the state of them i.e. Check if the products are in stock in the warehouse or not. So the design team came up with a simple search bar which would lead to a page for all stock information   </p>
                                        <p> The software engineers used a full stack node approach using MongoDB (A database tool) as the backend, Nodejs as the frontend and Moongoose as the middleware. The reason why we choice this combination is because it is simple and effective especially using MongoDb as the backend rather than the MySQL as it would be more efficient due to its logical and easy to use framework. Then using Node for the frontend using Express Allows us to create a neat and tidy front end to display the data via mongoose.   </p>

                                        
                                        <h5>Future Applications </h5>

                                        <p>
                                            As the company is still growing, we designed as system that allows the Zen Distributors to scale their internal systems as they grow also.

                                            At the moment the company can edit their stock listings through the main computer to state if they have it or not but if they wanted to have that functionality on many different devices and have more hands-on data manipulation such as scanning items to update lists, the company can come back to us to install a whole new inventory system.

                                            Which we would gladly facilitate.

                                        </p>

                                        {/* <blockquote className="blockquote">
                                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote> */}

                                        <div className="author-share">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    
                                                </div>
                                                
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="social-share">
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Facebook"><i className="fa fa-facebook"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Twitter"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Linkedin"><i className="fa fa-linkedin"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Instagram"><i className="fa fa-instagram"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Google Plus"><i className="fa fa-google-plus"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Vimeo"><i className="fa fa-vimeo"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Ecom;