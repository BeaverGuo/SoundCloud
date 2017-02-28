import React, { Component } from 'react';
import ProjectInfo from '../ProjectInfo';
import GeneralInfo from '../GeneralInfo';
import Metrics from '../Metrics';
import Employee from '../Employee';

class HotelInfo extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ProjectInfo />
                <GeneralInfo />
                <Metrics />
                <Employee />
                <GeneralInfo />
            </div>
        );
    }
}

export default HotelInfo;