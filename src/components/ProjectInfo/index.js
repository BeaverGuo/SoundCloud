import React, { Component } from 'react';
import Header from '../Header';

class ProjectInfo extends Component{
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
                <Header />
                <div className="project-info">
                    <p>Project in progress:  since December 14. 2016</p>
                    <p>Team members(3):  Team members(3)</p>
                    <p>Total hours spent:  563</p>
                </div>
            </div>
        );
    }
}

export default ProjectInfo;
