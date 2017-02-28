import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

const tableInstance = (
  <Table responsive>
    <thead>
        <th>GENERAL INFORMATION</th>
      <tr>
        <th>Date</th>
        <th>Hours</th>
        <th>Summary</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>16/02/2017</td>
        <td>4:30</td>
        <td>http://www.github.com</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
    <th>TOTAL: 8:30</th>
  </Table>
);

class GeneralInfo extends Component{
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
                <div className="general-info">
                    {tableInstance}
                </div>
            </div>
        );
    }
}

export default GeneralInfo;