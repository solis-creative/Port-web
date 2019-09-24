import React from 'react';
import { Link } from 'react-router-dom';
 
class Welcome extends React.Component {
    render(){
        return (
            <section id="welcome" className="welcome-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h4>We are creative</h4>
                        <h2>Welcome to <span>Solis </span>Creative</h2>
                        <p>We provide software solutions to our clients, understanding what they want and bringing it to reality.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-pencil-square-o icon"></i>
                                <h3>Creative Design</h3>
                                <p>A team of artistic people, who can understand what you want, and bring it to life.</p>
                                
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-laptop icon"></i>
                                <h3>Develop</h3>
                                <p>Whether you are looking to create the latest app or a programme to organise your household chores, we are here to create that for you. </p>
                                
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-box">
                                <i className="fa fa-life-ring icon"></i>
                                <h3>Solve</h3>
                                <p>We are here to solve and support our clients with any issues they may have.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Welcome;