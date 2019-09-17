import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/style.scss';
import '../../assets/css/responsive.scss';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import textImg from '../../assets/images/logo-top.png';

 
class MainBanner extends React.Component {
    render(){
        return (
            <div id="home" className="main-banner item-bg-one">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    {/* <div id="text-para-img"></div> */}
                                    <span className="image-container">
                                        <img className="main-banner-img" src={textImg} alt='logo image solis creative'/>
                                    </span>
                                    <div className="main-banner-text">
                                        <p>Your Solution to your software problems!</p>
                                        <p>Solis Creative, Software Solutions</p>
                                        <AnchorLink href="#welcome" className="btn btn-primary">Get Started</AnchorLink>
                                        <AnchorLink href="#work" className="btn btn-primary view-work">View Work</AnchorLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;