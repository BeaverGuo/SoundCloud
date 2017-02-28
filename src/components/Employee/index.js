import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import User1 from '../../../styles/user1.jpg';


class Employee extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="employee">
            <Col md={4}>
                <div className="user-panel">
                    <div className="pull-left image">
                      <img src={User1} className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                      <p>Paul Jansen</p>
                      <a href="#">{`Full stack develop 
                        Total hours spent:163`}</a>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="user-panel">
                    <div className="pull-left image">
                      <img src={User1} className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                      <p>Paul Jansen</p>
                      <a href="#">{`Full stack develop 
                        Total hours spent:163`}</a>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="user-panel">
                    <div className="pull-left image">
                      <img src={User1} className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                      <p>Paul Jansen</p>
                      <a href="#">{`Full stack develop 
                        Total hours spent:163`}</a>
                    </div>
                </div>
            </Col>
            </div>
        );
    }
}

export default Employee;