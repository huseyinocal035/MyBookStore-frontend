import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background: darkorange;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIcon = styled(Link)`
  margin-left: 16rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #252831;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar;