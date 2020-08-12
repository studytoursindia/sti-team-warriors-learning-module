import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'reactstrap';

const Wrapper = styled.div`
    /* text-align: center; */
    padding: 20px;
    display: flex;
    box-shadow: 1px 2px 4px 0px #eaeaea;
`;

const MyProfileCard = () => {
    return (
        <Wrapper>
            <img
                alt="avatar"
                src="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
                style={{ width: 80, height: 80, borderRadius: '50%' }}
            />
            <Row className="ml-3 text-center">
                <Col xs={12}>
                    <p className="mb-0">
                        <strong>SAGAR PATEL</strong>
                    </p>
                    <p className="mb-0">SP21011</p>
                    <Button size="sm" color="warning">
                        View Profile
                    </Button>
                </Col>
            </Row>

            <div class="row">
                <div className="col-sm-3"></div>
            </div>
        </Wrapper>
    );
};

export default MyProfileCard;
