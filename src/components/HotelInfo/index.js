import React, { Component } from 'react';
import HotelQuickFix from '../HotelQuickFix';

class HotelInfo extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <HotelQuickFix />
            </div>
        );
    }
}

export default HotelInfo;