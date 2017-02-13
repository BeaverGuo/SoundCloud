import React, { Component } from 'react';

class Callback extends Comment {

    componentDidMount() {
        window.setTimeout(opener.SC.connectCallback, 1);
    }

    render() {
        return <div><p>This page should close soon.</p></div>;
    }
}

export default Callback;