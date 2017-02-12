import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as trackSelector from '../selectors'; 

const Stream = ({ tracks }) =>
  <div>
    {
      tracks.map((track,key) => 
        <div className="track" key={key}>{track.title}</div>)
    }
  </div>;

const makeMapStateToProps = (state, props) => {
    //const mapStateToProps = (state, props) => { tracks: trackSelector.getTracks(state) };
    return { tracks: trackSelector.getTracks(state) };
};

export default connect(makeMapStateToProps)(Stream);
