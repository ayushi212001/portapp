/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {Header,Banner, Testimonial, ShapeIcon, About, Specilizing, Portfolio, Education, Footer} from '../layouts/home01/index';

class Home01 extends Component {
    constructor(props){
        super(props);
        this.state = {
            shapeicon: [
                {
                    id: 1,
                    classname: 'shape-one',
                    images: './images/testimonial/01.png',
                    alt: 'images',
                },
                {
                    id: 2,
                    classname: 'shape-two',
                    images: './images/testimonial/02.png',
                    alt: 'images',
                },
                {
                    id: 3,
                    classname: 'shape-three',
                    images: './images/testimonial/03.png',
                    alt: 'images',
                },
                {
                    id: 4,
                    classname: 'shape-four',
                    images: './images/testimonial/04.png',
                    alt: 'images',
                },
                {
                    id: 5,
                    classname: 'shape-five',
                    images: './images/testimonial/05.png',
                    alt: 'images',
                },
                {
                    id: 6,
                    classname: 'shape-six',
                    images: './images/testimonial/06.png',
                    alt: 'images',
                }
            ],
        }
    }
    render() {
        return (
            <div className="counter-scroll bg-home1 has-one-page">       
                <div id="mobile-menu-overlay"><span className="tf-close"></span></div>
                <Header />           
                <div id="content" className="content">
                    <div className="homepage-personal">
                        <Banner />
                        <div className="section slide-personal-Intro-second slide-dark bg-white">
                            <section className="profile s1">
                                <div className="container" id="about">
                                    <About />
                                </div>
                            </section>
                        </div>
                        <Specilizing />
                        <Portfolio />
                        <Education />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home01;
