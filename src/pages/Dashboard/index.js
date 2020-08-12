import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ReminderCard from './ReminderCard';
import MyProfileCard from './MyProfileCard';
const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={4}>
                    <MyProfileCard />
                    <ReminderCard />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
