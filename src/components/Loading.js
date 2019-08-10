import React, { Component } from 'react';
import loading from '../assets/img/loading.gif';
class Loading extends Component {
    render() {
        return (
            <div id="overlay"  style={{display:'block'}}>
                <div id="text"><img src={loading} alt='loading..' width="50" height="50" /></div>
            </div>
        );
    }
}

export default Loading;