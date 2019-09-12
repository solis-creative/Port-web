import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsBanner from '../PageBanners/BlogDetailsBanner';
import image from "../../assets/images/wish-mockup.png";
import clientImageOne from "../../assets/images/client-avatar1.jpg";
import clientImageTwo from "../../assets/images/client-avatar2.jpg";
import clientImageThree from "../../assets/images/client-avatar3.jpg";
import Footer from '../Common/Footer';
 
class BlogDetailsWish extends React.Component {
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
                                            
                                        </ul>
                                    </div>
                                    <div className="article-text">
                                        <ul className="category">
                                            <li><Link to="#">Website Development</Link></li>
                                            <li><Link to="#">Software Engineering</Link></li>
                                            <li><Link to="#">Designing</Link></li>
                                            <li><Link to="#">Hosting</Link></li>
                                            <li><Link to="#">SEO</Link></li>
                                        </ul>
                                        
                                        <h4 className="title">Wish Lounge</h4>
                                        
                                        <p>Wish Lounge is a Shisha Lounge and Dessert Bar located in London and needed a refresh on their website, to keep customers happy and updated with events and live sports and food.</p>
                                        
                                        <h5>Website</h5>

                                        <p>The website is simple yet effective. The website clearly states opening times, location and the menu. This was the goal from the client stating that they would be happy for everyone and anyone to be able 
                                            to use this website, locate where they are and also knowing what is on the menu; which was done successfuly and effectivly as shown by the SEO. Further to this, a Google API was used for the on match scheduling system
                                            to show to customers when and what is shown Live at the lounge, such as the sports of Football and MMA. </p>

                                        <h6>Colour Scheme</h6>
                                        <div className="colour-wheel-wish"></div>
                                        <p className="mb-0">The colour scheme was implemented and used in transition with the Menu and theme that is created by the interior of the Lounge it self. The colour scheme was an idea made by us at Solis Creative and also the owner,
                                        we visited the site of the Lounge and had a look at the interior and we tried our best to copy and show that in the website and the works of the menu that was also designed.</p>
                                        
                                        <h5>SEO</h5>

                                        <p>Further to all of this, we implemented SEO to the website and also to the business it self, using many techniques online we can show that the traffice in 24 hours grew by approx. 60%. If you search 'Wish Lounge' now on Google or Google Maps, it is the first 
                                            official bar to appear on the Google business section, showing directions, opening times, images and more. 

                                            Reviews have had also increased from 3 a week, to 11 a week. 
                                        </p>

                                        {/* <blockquote className="blockquote">
                                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote> */}

                                        <div className="author-share">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="article-author">
                                                        <div className="author-img">
                                                            <img 
                                                                src={clientImageOne}
                                                                alt="client"
                                                            />
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
 
export default BlogDetailsWish;