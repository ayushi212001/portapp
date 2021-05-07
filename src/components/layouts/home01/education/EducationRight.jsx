import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class EducationRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            skill: [
                {
                    id: 1,
                    timeline: 'timeline-inverted color1',
                    info: 'BBDNITM',
                    title: 'Computer Science and Engineering',
                    text: 'Computer engineering is a branch of study where individuals design and develop various technological devices and computer systems. They basically research, design & develop processors, motherboards, circuit boards, memory devices, routers and test computer systems. A computer engineer works to integrate the developed components into network systems and computers as per the respective requirement. Usually, computer engineers work on another important aspect called software development.'
                },
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'Udemy',
                    title: 'React Js',
                    text: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes  '
                },
                {
                    id: 3,
                    timeline: 'timeline-inverted color3',
                    info: 'Progate',
                    title: 'Web Development',
                    text: 'I learnt Basic development at Progate .Web development is the building and maintenance of websites; it is the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, do this by using a variety of coding languages. '
                }
            ]
        }
    }
    render() {
        return (
            <div className="col-right">
                <div className="flat-spacer" data-desktop={0} data-mobile={70} data-smobile={70} />
                <div className="flat-title t1 animate-element wow delay5 fadeInDown">
                    <h4 className="sub-title mg-b13">Educational qualification</h4>
                    <h2 className="title-section color-d12">My Education</h2>
                </div>
                <div className="timelines position-relative animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                    <ul className="timeline">
                        {
                            this.state.skill.map(data => (
                                <li className={data.timeline} key={data.id}>
                                    <div className="timeline-badge" />
                                    <div className="timeline-panel">
                                        <h3 className="f-info">{data.info}</h3>
                                        <div className="s-info">{data.title}</div>
                                        <p>
                                            {data.text}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    <div className="fl-btn btn-general btn-hv-border">
                        <Link to="#" className="f-w500 lt-sp1 border-corner2 text-one">Resume</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationRight;
