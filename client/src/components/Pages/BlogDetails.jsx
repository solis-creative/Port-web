import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsBanner from '../PageBanners/BlogDetailsBanner';
import image from "../../assets/images/arroe-mockup.png";
import clientImageOne from "../../assets/images/client-avatar1.jpg";
import clientImageTwo from "../../assets/images/client-avatar2.jpg";
import clientImageThree from "../../assets/images/client-avatar3.jpg";
import Footer from '../Common/Footer';
 
class BlogDetails extends React.Component {
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
                                            <li>Redux</li>
                                            <li>JSX</li>
                                            <li>AWS</li>
                                            <li>Python</li>
                                        </ul>
                                    </div>
                                    <div className="article-text">
                                        <ul className="category">
                                            <li><Link to="#">Website Development</Link></li>
                                            <li><Link to="#">Backend Database</Link></li>
                                            <li><Link to="#">Designing</Link></li>
                                            <li><Link to="#">Hosting</Link></li>
                                            <li><Link to="#">SEO</Link></li>
                                        </ul>
                                        
                                        <h4 className="title">ARROE Co.</h4>
                                        
                                        <p>ARROE Co. is a power solution company that offer charging batteries on the move, able to charge your laptop and all devices multiple times. Based in London, ARROE was founded in 2016 by Eoin Cooney and Romain Pascal who previously worked together on the smart luggage brand SLAINT. After successfully bringing multiple products to market they realised that the technology required to make the perfect product didn't exist yet. So they decided to make their own and ARROE was born.</p>
                                        
                                        <h5>Website</h5>

                                        <p>To show case their awesome idea that will bring the world one step closer to cordless, they requested a sleek simple yet professional website to be designed and developed. 
                                            All designs are negotiated and brought back and forth to the client and us, the design advice played a role in the final colour scheme and images that were used.</p>

                                        <h6>Colour Scheme</h6>
                                        <div className="colour-wheel-arroe"></div>
                                        
                                        <h5>Backend Development</h5>

                                        <p className="mb-0">Within the basic website development to showcase the product fo LAER and Product power solutions, a backend system was integrated using Amazon Web Servers and Python Scripts running on Ubuntu, to allow all information about Laptops being held, such as: the brand details including make and model, power capacity and power output.</p>
                                        
                                        <p> This database hold the information to allow the device to detect the voltage output and input, therefore increading the life span of the product it self and the device it is charging, as no over or under charging will happen.</p>

                                        

                                        {/* <div className="author-share">
                                            <div className="row">
                                                
                                                
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
 
export default BlogDetails;