import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Preloader from './components/Common/Preloader';
import HomeOne from '../src/components/Pages/HomeOne';
import HomeTwo from '../src/components/Pages/HomeTwo';
import HomeThree from '../src/components/Pages/HomeThree';
import HomeFour from '../src/components/Pages/HomeFour';
import HomeFive from './components/Pages/HomeFive';
import HomeSix from './components/Pages/HomeSix';
import HomeSeven from './components/Pages/HomeSeven';
import HomeEight from './components/Pages/HomeEight';
import HomeNine from './components/Pages/HomeNine';
import HomeTen from './components/Pages/HomeTen';
import HomeEleven from './components/Pages/HomeEleven';
import HomeTwelve from './components/Pages/HomeTwelve';
import Blog from './components/Pages/Blog';
import BlogDetails from './components/Pages/BlogDetails';
import BlogDetailsPd from './components/Pages/BlogDetailsPd';
import BlogDetailsWish from './components/Pages/BlogDetailsWish';
import BlogDetailsBPW from './components/Pages/BlogDetailsBPW';

class App extends React.Component {

    state = {
        loading: true
    };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    hashLinkScroll = () => {
        const { hash } = window.location;
        if (hash !== '') {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 0);
        }
    }

    render() {
        return (
            <Router onUpdate={this.hashLinkScroll}>
                <React.Fragment>
                    {this.state.loading ? <Preloader /> : ''}
                    {/* <Navigation /> */}
                    <Route path="/" exact component={HomeOne} />
                    {/* <Route path="/home-two" exact component={HomeTwo} />
                    <Route path="/home-three" exact component={HomeThree} />
                    <Route path="/home-four" exact component={HomeFour} />
                    <Route path="/home-five" exact component={HomeFive} />
                    <Route path="/home-six" exact component={HomeSix} />
                    <Route path="/home-seven" exact component={HomeSeven} />
                    <Route path="/home-eight" exact component={HomeEight} />
                    <Route path="/home-nine" exact component={HomeNine} />
                    <Route path="/home-ten" exact component={HomeTen} />
                    <Route path="/home-eleven" exact component={HomeEleven} />
                    <Route path="/home-twelve" exact component={HomeTwelve} /> */}
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog-details" exact component={BlogDetails} /> 
                    <Route path="/blog-details-pd" exact component={BlogDetailsPd} /> 
                    <Route path="/blog-details-wish" exact component={BlogDetailsWish} /> 
                    <Route path="/blog-details-bpw" exact component={BlogDetailsBPW} /> 
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
