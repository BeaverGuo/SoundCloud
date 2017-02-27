import React, { Component } from 'react';

class HotelQuickFix extends Component{
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
                <p>Astoria Hotel. Quick fix</p>
                <div>
                    <p>Project in progress:  since December 14. 2016</p>
                    <p>Team members(3):  since December 14. 2016</p>
                    <p>Total hours spent:  since December 14. 2016</p>
                    
                </div>
            </div>
        );
    }
}

export default HotelQuickFix;
