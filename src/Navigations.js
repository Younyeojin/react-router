import React from 'react';
import styled from 'styled-components';

const Navigations = () => (
    <Nav>
        <NavList>
            <NavItem>소개</NavItem>
            <NavItem>게시판</NavItem>
            <NavItem>연락</NavItem>
            <NavItem>메뉴1</NavItem>
            <NavItem>메뉴2</NavItem>

        </NavList>
    </Nav>
);

export default Navigations

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: 60px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`
