import React from 'react';
import imgOne from '../../assets/images/web_development.png';
import imgTwo from '../../assets/images/app_development.png';
import imgThree from '../../assets/images/seo.png';
import imgFour from '../../assets/images/hosting.png';
import imgFive from '../../assets/images/software_figure.png';
import imgSix from '../../assets/images/marketing.png';

 
class Services extends React.Component {
    render(){
        return (
            <section id="services" className="services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Services</span></h2>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 ">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                </div>
                                
                                <div className="services-content">
                                    <h3>Website Development</h3>
                                    <p>Designing websites from scratch for your needs, and working together until launching.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgFour} alt="services-img" />
                                </div>
                                
                                <div className="services-content">
                                    <h3>Hosting</h3>
                                    <p>With fast and reliable hosting whether you have a small blog or large company, leave it to us. </p>
                                </div>
                            </div>
                        </div>   

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgTwo} alt="services-img" />
                                </div>
                                
                                <div className="services-content">
                                    <h3>Application Development</h3>
                                    <p>Smartphones, tablets and wearables, we got you covered. Our team can build apps with stunning UX and UI crafted from your vision.</p>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgFive} alt="services-img" />
                                </div>
                                
                                <div className="services-content">
                                    <h3>SEO</h3>
                                    <p>If you are looking to drive more traffic and make your company stand out from the crowd. We have an experienced SEO team who are here to support you.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgSix} alt="services-img" />
                                </div>
                                
                                <div className="services-content">
                                    <h3>Marketing</h3>
                                    <p>If you are looking to drive more traffic and make your company stand out from the crowd. We have an experienced SEO team who are here to support you.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgThree} alt="services-img" />
                                </div>
                                
                                <div className="services-content">
                                    <h3>Consultation</h3>
                                    <p>Our expert consultants are here to help you, in case you are stuck on idea or don’t know what your next steps are.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
 
export default Services;