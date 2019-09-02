import React from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
import mixitup from "mixitup";

const images = [
    require("../../assets/images/arroe-mockup.png"),
    require("../../assets/images/pd-mockup.png"),
    require("../../assets/images/ecom-mockup.png"),
    require("../../assets/images/mockup-lizzy.png"),
    require("../../assets/images/work-img5.jpg"),
    require("../../assets/images/work-img6.jpg")
];
 
class Work extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false
    };

    componentDidMount() {
        mixitup("#mix-wrapper", {
            animation: {
                effects: "fade rotateZ(0deg)",
                duration: 700
            },
            classNames: {
                block: "programs",
                elementFilter: "filter-btn",
            },
            selectors: {
                target: ".mix-target"
            }
        });
    }

    render(){
        const { photoIndex, isOpen } = this.state;
        return (
            <section id="work" className="work-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Work</span></h2>
                        <p>Happy clients that have used our services and expertise, to achieve their software goals, from applications to websites.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="shorting-menu">
                                <button 
                                    className="filter" 
                                    data-filter="all"
                                >
                                    All
                                </button>
                                <button 
                                    className="filter" 
                                    data-filter=".website"
                                >
                                    Website
                                </button>
                                <button 
                                    className="filter" 
                                    data-filter=".app"
                                >
                                    Mobile Applications
                                </button>
                                <button 
                                    className="filter" 
                                    data-filter=".seo"
                                >
                                    SEO
                                </button>
                                <button 
                                    className="filter" 
                                    data-filter=".hosting"
                                >
                                    Hosting
                                </button>
                                <button 
                                    className="filter"
                                    data-filter=".market"
                                >
                                    Marketing
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="shorting">
                    <div className="row m-0" id="mix-wrapper">
                        <div 
                            className="col-lg-4 col-md-6 mix website seo p-0 mix-target"
                        >
                            <div className="single-work">
                                <img src={images[0]} alt="work-img" />
                                
                                <div className="work-content">
                                    <h4>ARROE Co.</h4>
                                    <Link to="/blog-details">Find Out More</Link>
                                </div>
                                

                                {/* button to go to blog page */}
                                <Link 
                                    to="#" 
                                    className="popup-btn"
                                    onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                ><i className="fa fa-plus"></i></Link>
                            </div>
                        </div>
                        
                        <div 
                            className="col-lg-4 col-md-6 mix website app seo hosting p-0 mix-target"
                        >
                            <div className="single-work">
                                <img src={images[1]} alt="work-img" />
                                
                                <div className="work-content">
                                    <h4>Petrichor Designs Ltd.</h4>
                                    <Link to="/blog-details-pd">Find Out More</Link>
                                </div>
                                
                                <Link 
                                    to="#" 
                                    className="popup-btn"
                                    onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                                >
                                    <i className="fa fa-plus"></i>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mix website app seo p-0 mix-target">
                            <div className="single-work">
                                <img src={images[2]} alt="work-img" />
                                
                                <div className="work-content">
                                    <h4>E-Commerce Application</h4>
                                    <Link to="/blog-details-pd">Find Out More</Link>
                                </div>
                                
                                <Link 
                                    to="#" 
                                    className="popup-btn"
                                    onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                                >
                                    <i className="fa fa-plus"></i>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mix market p-0 mix-target">
                            <div className="single-work">
                                <img src={images[3]} alt="work-img" />
                                
                                <div className="work-content">
                                    <h4>Lizzy's Car Wash</h4>
                                    <Link to="/blog-details-pd">Find Out More</Link>
                                </div>
                                
                                <Link 
                                    to="#" 
                                    className="popup-btn"
                                    onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                                >
                                    <i className="fa fa-plus"></i>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mix design p-0 mix-target">
                            <div className="single-work">
                                <img src={images[4]} alt="work-img" />
                                
                                <div className="work-content">
                                    <h4>Creative Design</h4>
                                    <ul>
                                        <li><Link to="#">Design</Link></li>
                                        <li>.</li>
                                        <li><Link to="#">Brand</Link></li>
                                    </ul>
                                </div>
                                
                                <Link 
                                    to="#" 
                                    className="popup-btn"
                                    onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                                >
                                    <i className="fa fa-plus"></i>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mix illustrator p-0 mix-target">
                            <div className="single-work">
                                <img src={images[5]} alt="work-img" />
                                
                                <div className="work-content">
                                    <h4>Creative Design</h4>
                                    <ul>
                                        <li><Link to="#">Design</Link></li>
                                        <li>.</li>
                                        <li><Link to="#">Brand</Link></li>
                                    </ul>
                                </div>
                                
                                <Link 
                                    to="#" 
                                    className="popup-btn"
                                    onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                                >
                                    <i className="fa fa-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length
                        })
                        }
                    />
                )}
            </section>
        );
    }
}
 
export default Work;