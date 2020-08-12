import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'reactstrap';

const DataTransfer = props => {
    const [data, setData] = useState('I am Data');
    return (
        <div>
            <Button
                style={{ margin: 20 }}
                onClick={e => {
                    e.preventDefault();
                    props.getData(data);
                }}
            >
                <p> Received in child -- {props.title} </p>
            </Button>
        </div>
    );
};

DataTransfer.propTypes = {};

export default DataTransfer;
