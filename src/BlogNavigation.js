import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const BlogNavigation = () => (
    <Nav>
        <NavList>
            <NavItem><Link to="/home">Home</Link></NavItem>
            <NavItem><Link to="/course-register">과목 등록2</Link></NavItem>
            <NavItem><Link to="/Login">로그인</Link></NavItem>
            <NavItem><Link to="/online-profile">프로필</Link></NavItem>
            <NavItem><Link to="/scool-staus">학교 현황</Link></NavItem>
        </NavList>
        <NavList>
            <NavItem><Link to="/basic">Basic</Link></NavItem>
            
        </NavList>
    </Nav>
);

export default BlogNavigation

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
    width: 100px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`
