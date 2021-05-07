import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Design} from './specilizing/index';

class Specilizing extends Component {
    constructor(props){
        super(props);
        this.state = {
            design : [
                {
                    id: 1,
                    iconbox: 'iconbox-s1 d-sm-flex align-items-center',
                    iconcolor: 'iconbox-icon color1',
                    spanicon: 'icon-designer',
                    title: 'Front-end',
                    text01: "I'm a professional front-end developer.A front end web developer is the person who implements web designs through coding languages like HTML, CSS, and JavaScript.Front end developers are/were sometimes called “client-side developers”",
                },
                {
                    id: 2,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-center align-items-center mgl-iconbox-s1',
                    iconcolor: 'iconbox-icon color2 color1',
                    spanicon: 'icon-designer',
                    title: 'React Js',
                    text01: "I'm a react developer ,I develop react based pages,components and websites,react is widely used because react allows you to interface with other libraries and frameworks.",
                },
                {
                    id: 3,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1',
                    iconcolor: 'iconbox-icon color3',
                    spanicon: 'icon-brand',
                    title: 'Web UI Design',
                    text01: "I'm a professional UX designer,I'm a fresher but I'm very dedicated towards my work.",
                },
            ]
        }
    }
    render() {
        return (
            <div className="section slide-personal-Intro-third slide-dark bg-white">
                <section className="specilizing-in s1" id="services">
                    <div className="container">
                        <div className="flat-title">
                            <h2 className="title-section color-d12 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">I am Specialized in</h2>
                        </div>
                        <div className="row position-relative z-index1">
                            {
                                this.state.design.map(data => (
                                    <Design key={data.id} data={data}/>
                                ))
                            }
                            <div className="flat-spacer" data-desktop="0" data-mobile="0" data-smobile="0"></div>
                            <div className="fact">
                                <div className="btn-contact bg-s1 text-center">
                                    <h4 className="title color-d12">Got a project? Let’s talk.</h4>
                                    <Link to="#" className="email color-s1 color-d14">ayushitiwari442@gmail.com</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="featured-post animate-element wow delay5 fadeInRight" data-wow-delay="0.5s">
                        <img src="images/section/09.png" alt="images" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Specilizing;
