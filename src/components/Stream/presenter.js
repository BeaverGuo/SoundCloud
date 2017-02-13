import React, { Component } from 'react';

const Stream = ({ user, tracks = [], onAuth }) =>
    <div>
        <div>
            {
                user ? <div>{user.username}</div> :
                <button onClick={onAuth} type="button">Login</button>
            }
        </div>
        <br />
        <div>
            {
              tracks.map((track,key) => 
                <div className="track" key={key}>{track.title}</div>)
            }
        </div>
    </div>;

export default Stream;
