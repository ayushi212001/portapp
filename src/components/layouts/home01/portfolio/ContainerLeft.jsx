import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ContainerLeft extends Component {
    render() {
        return (
            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-title t1">
                    <h4 className="sub-title mb-2">Web Ui Design</h4>
                    <h2 className="title-section color-d12 mg-b34">Some Of My Works</h2>
                    <div className="description">
                        <p className="lt-sp01">
                        These are the pictures of some of my work ,that I created using HTML,CSS,Javascript,Bootstrap,React js,SQL etc. 
                        </p>
                        <p className="lt-sp01">
                        </p> I can work my best if u believe on me and tell me all your needs,as I believe that I possess all the skills necessary for this job to be done right .
      
                    </div>
                    <div className="fl-btn btn-general btn-hv-border">
                        <Link to="https://github.com/ayushi212001" className="f-w500 text-one color-1 lt-sp1 border-corner2">For Repositories</Link>
                    </div>
                </div>
          </div>
        );
    }
}

export default ContainerLeft;
