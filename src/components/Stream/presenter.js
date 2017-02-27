import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Row } from 'react-bootstrap';
import { CLIENT_ID } from '../../constants/auth';
import HotelInfo from '../HotelInfo';

class Stream extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidUpdate() {
        //fetch data here...

    }

    render() {
        return (
            <Row className="show-grid">
            <Col className="sidebar" md={4} mdPush={4}>
                <ul className="sidebar-menu">
                    <li className="header">
                        <span className="logo"></span>
                        Crowdbotics 
                    </li>
                    <span className="report">Reporting system</span>
                    <li className="treeview">
                        <a href="#">
                            01 &nbsp;<span>Asia B2B Portal</span>
                        </a> 
                    </li>
                    <li className="treeview">
                        <a href="#">
                            02 &nbsp;<span>Asia Hotel.Quick fix</span>
                        </a> 
                    </li>
                    <li className="treeview">
                        <a href="#">
                            03 &nbsp;<span>Online store Redesign</span>
                        </a> 
                    </li>
                </ul>
            </Col>
            <Col md={8} mdPush={8}>
                <HotelInfo />
            </Col>
            </Row>
        );
    }
}

export default Stream;
