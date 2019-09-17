import React from 'react';
import { Link } from 'react-router-dom';
import imgOne from '../../assets/images/account_manager.png';
import imgTwo from '../../assets/images/seo.png';
import imgThree from '../../assets/images/design_advice.png';
import imgFour from '../../assets/images/experts.png';
 
class WhyWeDifferent extends React.Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-panel");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" checked", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += " checked";
    }

    render(){
        return (
            <section className="why-we-different ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Why We <span>Are Different</span></h2>
                        <p>We understand that theres many companies who provide the exact same services. But we wanted to show you a few things that make us stand out from the crowd.</p>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tabset">
                                {/* <!-- Tab 1 --> */}
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'speed-flexibility')} 
                                    className="tablinks checked" 
                                    name="tabset" 
                                    id="tab1" 
                                    aria-controls="speed-flexibility"  
                                    htmlFor="tab1"
                                >
                                    Dedicated Account Managers
                                </label>
                                {/* <!-- Tab 2 --> */}
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'profeesional-work')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab2" 
                                    aria-controls="profeesional-work"  
                                    htmlFor="tab2"
                                >
                                    Free Initial Consultation
                                </label>
                                {/* <!-- Tab 3 --> */}
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'experienced-staff')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab3" 
                                    aria-controls="experienced-staff"  
                                    htmlFor="tab3"
                                >
                                    Design Advice
                                </label>
                                {/* <!-- Tab 4 --> */}
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'custom-support')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab4" 
                                    aria-controls="custom-support"  
                                    htmlFor="tab4"
                                >
                                    Expertise In Different Areas
                                </label>

                                <div className="tab-panels">
                                    <section id="speed-flexibility" className="tab-panel" style={{display: "block"}}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-text">
                                                    <h4>Dedicated Account Managers</h4>
                                                    <p>We pride ourselves in perfection, this is why we have decided to allocate a dedicated account manager to all of our projects, no matter the size. </p>
                                                    <ul>
                                                        <li><i className="fa fa-check"></i>Always available to answer any questions</li>
                                                        <li><i className="fa fa-check"></i>Always there to listen to your needs</li>
                                                        <li><i className="fa fa-check"></i>Pass comments and feedback onto the coders</li>
                                                        <li><i className="fa fa-check"></i>Delivering you peace of mind</li>
                                                        <li><i className="fa fa-check"></i>Ensuring the best service is provided to our clients</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-img">
                                                    <img src={imgOne} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <section id="profeesional-work" className="tab-panel">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-text">
                                                    <h4>Free Initial Consultation</h4>
                                                    <p>We provide a free initial consultation, so that you can get an idea of our pricing and what we are able to provide you. This allows us and you to get more information about what is needed.</p>
                                                    <ul>
                                                        <li><i className="fa fa-check"></i>Understanding your project</li>
                                                        <li><i className="fa fa-check"></i>Understanding our services</li>
                                                        <li><i className="fa fa-check"></i>Talking through Design </li>
                                                        <li><i className="fa fa-check"></i>What are the goals and objects for your project?</li>
                                                        <li><i className="fa fa-check"></i>Creating a launch date</li>
                                                        <li><i className="fa fa-check"></i>Understanding pricing</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-img">
                                                    <img src={imgTwo} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <section id="experienced-staff" className="tab-panel">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-text">
                                                    <h4>Design Advice</h4>
                                                    <p>We don’t only code things and give them to you, we like to help with everything to ensure that you are given the best service possible. </p>
                                                    <ul>
                                                        <li><i className="fa fa-check"></i>Colour schemes </li>
                                                        <li><i className="fa fa-check"></i>Graphic packs</li>
                                                        <li><i className="fa fa-check"></i>Logos</li>
                                                        <li><i className="fa fa-check"></i>Banners</li>
                                                        <li><i className="fa fa-check"></i>Text and image positioning</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-img">
                                                    <img src={imgThree} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <section id="custom-support" className="tab-panel">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-text">
                                                    <h4>Expertise in different areas</h4>
                                                    <p>We have a large team, who are experts in different areas. We can create and provide support to your business in many areas.</p>
                                                    <ul>
                                                        <li><i className="fa fa-check"></i>App experts</li>
                                                        <li><i className="fa fa-check"></i>Website experts </li>
                                                        <li><i className="fa fa-check"></i>Design experts</li>
                                                        <li><i className="fa fa-check"></i>SEO</li>
                                                        <li><i className="fa fa-check"></i>Marketing experts </li>
                                                        <li><i className="fa fa-check"></i>Various consultants</li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-img">
                                                    <img src={imgFour} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default WhyWeDifferent;