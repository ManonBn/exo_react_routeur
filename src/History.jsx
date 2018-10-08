import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
              <Link to="/">Go back to home</Link>
              <p>Notre histoire</p>
            </div>
        );
    }
}

export default History ;