import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stream from './presenter.js';
import * as trackSelector from '../../selectors'; 

const makeMapStateToProps = (state, props) => {
    //const mapStateToProps = (state, props) => { tracks: trackSelector.getTracks(state) };
    return { tracks: trackSelector.getTracks(state) };
};

export default connect(makeMapStateToProps)(Stream);
