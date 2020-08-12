import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 250px;
    height: 100%;
    text-align: center;
    transition: 0.5s;
    overflow-x: hidden;
    background-color: #fff;
`;

const Backdrop = styled.div`
    z-index: 9999;
    width: ${props => (props.drawerState ? '100%' : '0px')};
    height: 100%;
    top: 76;
    background-color: #00000080;
`;

const Sidebar = props => {
    return (
        <Backdrop drawerState={props.drawerState}>
            <SidebarContainer>
                <img
                    src="https://deepsoundscript.com/upload/photos/2020/05/unqZSn4Aflef7MGKLzZS_25_b22ab6bb4f9f67da2eb84701a8ea3ab5_image.jpg"
                    width="100px"
                    height="100px"
                    style={{ borderRadius: '50%' }}
                />
            </SidebarContainer>
        </Backdrop>
    );
};

export default Sidebar;
