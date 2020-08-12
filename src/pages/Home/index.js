import React from 'react';
import DataTransfer from './DataTransfer';
import { useState } from 'react';
import Example from '../Example';
import { useQuery } from '@apollo/react-hooks';
import Projects from '../../components/Projects';
const Home = props => {
    //const { loading, error, data } = useQuery;
    const [recievedData, setRecievedData] = useState('');
    const getDataHandler = data => {
        setRecievedData(data);
    };
    return (
        <div style={{ border: '1px solid red', padding: 40 }}>
            <Projects />
            {/* <p>Home {props.location.pathname}</p>
            <p>Received in parent -- {recievedData}</p>
            <div style={{ border: '1px solid black', margin: 40 }}>
                <DataTransfer title="sent" getData={getDataHandler} />
            </div> */}

            <Example />

            <img src="" width="200px" height="200px" />
        </div>
    );
};

export default Home;
