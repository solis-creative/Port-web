import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsBanner from '../PageBanners/BlogDetailsBanner';
import image from "../../assets/images/pd-mockup.png";
import clientImageOne from "../../assets/images/client-avatar1.jpg";
import clientImageTwo from "../../assets/images/client-avatar2.jpg";
import clientImageThree from "../../assets/images/client-avatar3.jpg";
import Footer from '../Common/Footer';
 
class BlogDetailsPd extends React.Component {
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
                                            <li>React JS</li>
                                            <li>React Native</li>
                                            <li>Expo</li>
                                            <li>Redux</li>
                                            <li>JSX</li>
                                            <li>AWS</li>
                                            <li>Python</li>
                                            <li>Flask</li>
                                            <li>Jinja</li>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                                    <div className="article-text">
                                        <ul className="category">
                                            <li><Link to="#">Website Development</Link></li>
                                            <li><Link to="#">Application Development</Link></li>
                                            <li><Link to="#">Software Engineering</Link></li>
                                            <li><Link to="#">Backend Database</Link></li>
                                            <li><Link to="#">Designing</Link></li>
                                            <li><Link to="#">Hosting</Link></li>
                                            <li><Link to="#">SEO</Link></li>
                                        </ul>
                                        
                                        <h4 className="title">Petrichor Designs Ltd.</h4>
                                        
                                        <p>Petrichor Designs Ltd. also known as 'Pd.' is a construction and interior design company based in Central London and Surrey, where they have been working many years in the industry using classic methods of time keeping and project managment. However, Pd approached Solis Creative, to develop a faster, more effcient software and eco-system through the day-to-day process. Below we will shed light on how we at Solis, created an Application, In-house Software and Website to benefit in all areas of the work.</p>
                                        
                                        <h5>Website</h5>

                                        <p>To show case their awesome idea that will bring the world one step closer to cordless, they requested a sleek simple yet professional website to be designed and developed. 
                                            All designs are negotiated and brought back and forth to the client and us, the design advice played a role in the final colour scheme and images that were used.</p>

                                        <h6>Colour Scheme</h6>
                                        <div className="colour-wheel-pd"></div>
                                        <p className="mb-0">Petrichor Designs had the goal of showcasing their work they have worked on but also keeping the contact with clients. The client describes their industry field with human contact and not working on the website or over the phone, so they wanted to avoid bookings and consultation online; as they can sell their product and services in person much better. So, keeping that in mind the website was designed is a simple 3 page website that always directs the user to the end goal of contacting Pd, not leaving the site. </p>
                                        
                                        <p> This database hold the information to allow the device to detect the voltage output and input, therefore increading the life span of the product it self and the device it is charging, as no over or under charging will happen.</p>

                                        {/* <blockquote className="blockquote">
                                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote> */}

                                        <h5>Application Development</h5>

                                        <p>The iOS and Android Application was developed for contractors use and to ease the process of work plans and schedules where the client of Pd. can keep up with their works and refurbishment through the application and not needing to contact the property or project manager.<br></br> The technology used in the process of application development was React Native, the reason for this was that React Native works on all devices that have JavaScript, meaning with one development process we achieved the goal of two applications, one on iOS and one on Android.</p>

                                        <h5>Software Development</h5>

                                        <p className="mb-0">Further to the Application and Website development, Pd. wanted an admin system where all schedules, works, invoices and projects can be held. Therefore, we created a backend system in Python using Flask infrastructure. This allowed us to template one page with different dynamic data being load. The admin system was created to solve the three problems below.</p>
                                        <br></br>
                                        <ol>
                                            <li>Schedules</li>
                                            <li>Invoices</li>
                                            <li>Project plans</li>
                                        </ol>

                                        <p>At Solis we strive to solve any software problems that may occur, and find a solution to your problem with the use of software and different technologies. The backend admin system was succesffully implemented into Pd's eco-system and has worked well since launch. Proud of the project we service the system and host, the website and the backend system all on the servers we provide.</p>

                                        {/* <div className="author-share">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="article-author">
                                                        <div className="author-img">
                                                            <img 
                                                                src={clientImageOne}
                                                                alt="client"
                                                            />
                                                        </div>

                                                        <div className="author-title">
                                                            <h4>John Smith</h4>
                                                            <span>Back-End Developer</span>
                                                        </div>
                                                    </div>
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
                                        </div> */}
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
 
export default BlogDetailsPd;