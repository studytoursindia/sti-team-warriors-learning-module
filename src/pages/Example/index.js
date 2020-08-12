import React, { useEffect } from 'react';
import { useState } from 'react';
import { Progress, Button } from 'reactstrap';
import Demo from './Demo';
import { withRouter } from 'react-router-dom';

// statefull

function Example(props) {
    const [progress, setProgress] = useState(0);
    const [data, setData] = useState(null);

    const increaseHandler = () => {
        setProgress(progress + 10);
    };

    const decreaseHandler = e => {
        setProgress(progress - 10);
    };

    useEffect(() => {
        setData({
            demo: 'bootstrap',
        });
    }, []);

    if (data === null) return <div>Data Null</div>;
    return (
        <div className="container" style={{ width: 400, height: 400 }}>
            <div>
                <Button className="m-4" color="primary" onClick={increaseHandler}>
                    Increase
                </Button>
                <Button className="m-4" color="warning" onClick={decreaseHandler}>
                    Decrease
                </Button>
            </div>
            <Progress value={progress}>{progress}</Progress>
        </div>
    );
}

export default withRouter(Example);
