import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 20,
            progress: 25,
        };
    }

    render() {
        const currentCounter = this.state.counter;

        this.setState({ counter: 50 });

        return (
            <div>
                <p></p>
            </div>
        );
    }
}
