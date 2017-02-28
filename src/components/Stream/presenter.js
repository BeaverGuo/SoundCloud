import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Row } from 'react-bootstrap';
import { CLIENT_ID } from '../../constants/auth';
import HotelInfo from '../HotelInfo';
import logo_img from './logo.png';


class Stream extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidUpdate() {
        //fetch data here...

    }

    render() {
        return (
            <div>
            <Col md={2}>
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="logo">
                        <div className="pull-left image">
                            <img src={logo_img} width={`23px`} height={`23px`} alt="Logo Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Crowdbotics</p>
                            <p className="report">Reporting system</p>
                        </div>
                    </div>
                <ul className="sidebar-menu">
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
                </section>
            </aside>
            </Col>
            <Col md={10}>
                <HotelInfo />
            </Col>
            </div>
        );
    }
}

export default Stream;
