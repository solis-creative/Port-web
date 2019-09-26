import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsBanner from '../PageBanners/BlogDetailsBanner';
import image from "../../assets/images/bpw-mockup.png";
import clientImageOne from "../../assets/images/client-avatar1.jpg";
import clientImageTwo from "../../assets/images/client-avatar2.jpg";
import clientImageThree from "../../assets/images/client-avatar3.jpg";
import Footer from '../Common/Footer';
 
class BlogDetailsBPW extends React.Component {
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
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>PHP</li>
                                            <li>MySQL</li>
                                            <li>Python</li>
                                        </ul>
                                    </div>
                                    <div className="article-text">
                                        <ul className="category">
                                            <li><Link to="#">Website Development</Link></li>
                                            <li><Link to="#">Designing</Link></li>
                                            <li><Link to="#">Hosting</Link></li>
                                            <li><Link to="#">SEO</Link></li>
                                            <li><Link to="#">Graphics Design</Link></li>
                                        </ul>
                                        
                                        <h4 className="title">Battersea Power Wash</h4>
                                        
                                        <p>Battersea Power Wash is a car wash company working in the South London area of Battersea. Battersea Power Wash want to stand out and be apart from other as regular car washes, as they provide a quality and luxery servie with detailing for events, and local key pickup from the areas living in the residantental area.</p>
                                        
                                        <h5>Website</h5>

                                        <p>BPW goal is put forward the goal of their luxery service of detailing and high quality washes to everyone in the London area. The colours used we show a great quality service and which is also easy on the eye, allowing anyone and everyone to get the message and also be able to read it simply and quickly.</p>

                                        <h6>Graphics Design</h6>

                                        <p>As the client is a modern company targetting the younger generation with car washes and detailing, the client requested one of our amazing services with design which is the Graphics Design. So, we at Solis knowing the market and the environment in the modern age, we explained to the client that modern, clean and slick graphics are the way forward to explain and showcase the service in a simple manor which is quicker to understand over text, hence the small use of text but with a descriptive image showing the services they provide. Our great Graphics Team worked inline with the client to show many ideas and graphics to better achieve their goal. Which was successful as we have had major feedback from the team at BPW for all designs and one of them being chosen and set on the site. </p>

                                        <h6>Booking System</h6>

                                        <p>Further to a showcasing website with great design, graphics and visuals. The client BPW wanted a booking system to allow customers to easily book a time slot and get an email confirmation with a text. We implemented these techniques using built-in features with HTML and Php, using the MySQL database to hold all the information of the clients for example, their Plate Number, Name and Time slot. This has proven to increase sales in the area alongside the SEO and also allows better user and customer experience.</p>

                                        <h6>Colour Scheme</h6>
                                        <div className="colour-wheel-bpw"></div>
                                        <p className="mb-0">The colour wheel above shows the colours used in the website and shows and matches the interior of the car wash themselves. The colours were design and picked by the clients themselves but also worked with our design team to create the perfect balane between the dark theme and also the eye catching colours for important information, such as hints of red to show the details and prices, as this catches the readers eyes and gives them the information straight away.</p>
                                        
                                        <h5>Further development</h5>


                                        <p>
                                            At BPW with the increase of sales and demand in the area, they have given Solis major feedback for the great work the website and booking system has done for them. So, they have come forward and propsed an in-house system to be used in junction with the booking system and backend such as shown in <Link to="/car-wash">Lizzy's Car Wash</Link>. Our team is now working along side BPW to create a similar system for their location.
                                        </p>

                                        {/* <blockquote className="blockquote">
                                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote> */}

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
 
export default BlogDetailsBPW;