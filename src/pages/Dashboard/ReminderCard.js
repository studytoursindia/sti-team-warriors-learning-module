import React from 'react';
import styled from 'styled-components';

const data = [
    {
        id: '1',
        title: 'demo',
    },
    {
        id: '2',
        title: 'demo',
    },
    {
        id: '3',
        title: 'demo',
    },
    {
        id: '4',
        title: 'demo',
    },
    {
        id: '5',
        title: 'demo',
    },
];

const Wrapper = styled.div`
    padding: 10px;
    box-shadow: 1px 2px 4px 0px #eaeaea;
    max-height: 400px;
    overflow-y: scroll;
`;

const ReminderItem = styled.div`
    margin: 20px 10px;
    padding: 20px 5px;
    box-shadow: 1px 2px 4px 0px #eaeaea;
    border-left: 2px solid #0f0;
`;

const ReminderCard = () => {
    return (
        <Wrapper>
            <h6>Todays Reminder</h6>

            {data.map((item, idx) => {
                return (
                    <ReminderItem key={idx}>
                        {item.title}-{idx}
                    </ReminderItem>
                );
            })}
        </Wrapper>
    );
};

export default ReminderCard;
