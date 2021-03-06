import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h4><Link to="/"><span>solis</span>creative</Link></h4>
                            <ul>
                                {/* <li><Link to="#" className="fa fa-twitter"></Link></li> */}
                                <li><Link to="https://www.instagram.com/solis_creative/" className="fa fa-instagram"></Link></li>
                                <li><Link to="https://www.linkedin.com/company/solis-specialist/" className="fa fa-linkedin"></Link></li>
                            </ul>
                            <p>Copyright <i className="fa fa-copyright"></i> Solis Creative 2019 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;