import React, { Fragment } from 'react';

const ProjectData = props => {
    return (
        <Fragment>
            {props.data.map((item, idx) => {
                return <p key={idx}>{item.name}</p>;
            })}
        </Fragment>
    );
};

const Projects = () => {
    let temp;
    const data = [
        {
            name: 'Nikhil',
        },
        {
            name: 'Subhakant',
        },
        {
            name: 'Namita',
        },
    ];
    return (
        <div>
            <ProjectData data={data} />
            <img />
        </div>
    );
};

export default Projects;
