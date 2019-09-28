import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsBanner from '../PageBanners/BlogDetailsBanner';
import image from "../../assets/images/mockup-lizzy.png";
import clientImageOne from "../../assets/images/client-avatar1.jpg";
import clientImageTwo from "../../assets/images/client-avatar2.jpg";
import clientImageThree from "../../assets/images/client-avatar3.jpg";
import Footer from '../Common/Footer';
 
class Liz extends React.Component {
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
                                            alt="blog-details" 
                                        />
                                    </div>
                                    <div className="work-tech-spec">
                                        <h6>Technologies and Stack</h6>
                                        <ul>
                                            
                                            <li>MongoDB</li>
                                            <li>React Native </li>
                                            
                                            
                                        </ul>
                                    </div>
                                    <div className="article-text">
                                        <ul className="category">
                                            <li><Link to="#">Database Architecture</Link></li>
                                            <li><Link to="#">Software Engineering</Link></li>
                                            <li><Link to="#">Designing</Link></li>
                                            <li><Link to="#">In-House System</Link></li>
                                            
                                        </ul>
                                        
                                        <h4> Lizzy's Car Wash</h4>
                                        
                                        <p>Lizzy’s Car Wash is a high-end car maintenance company which specialises in detailing up- scale cars. Recently the business has had rapid growth and continues to see more success every week. That was a driving force on why they came to us for a technology solution to keep track of all their incoming and outgoing vehicles and how much they’re taking from each car they work on.  </p>
                                        
                                        <h5>System Design/UI</h5>

                                        <p>The design team created a system where they facilitated the customer process over the course of getting their car washed. The first step is taking the name and number plate of the customers car, then the staff will choose which cleaning option the customer opted for. If there are any other requests from the customer, it could be noted in the notes section.</p>
                                        
                                        <p>There is a form section which is optional for the customer to put details for collection (name, number etc.). This functionality follows into the final stage of service where the departure details will be noted down. The last functionality will allow the user will allow the user to receive their invoice and the user can show if the customer has paid or not.</p>
                                        <p>This technology solution can be used on any Apple and Andorid mobile device. </p> 

                                         <h5>Software Development </h5>

                                        <p>
                                        After the User Interface was designed the software development took two weeks to test and roll out for the car wash to use.

                                        The app was made using React-Native for the frontend and MySQL as the database which the company will store all their data.

                                        The client requested that the programe be able to work on IOS and Andorid as their staff will acess to both softwares when working. This was no problem for the development team as React-Native is well suited for both platforms. 

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
 
export default Liz;