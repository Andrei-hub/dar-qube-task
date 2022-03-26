import React from 'react';
import { NavLink } from 'react-router-dom';
import { BOOKMARKS_PATH, NEWS_PATH } from "constants/api";
import { StyledHeader, Navigation } from './Header.styled'

const Header = () => {
const handleActive = (isActive:boolean):string => (isActive ? 'active' : 'inactive');
    return (
        <StyledHeader>
            <Navigation>
                    <NavLink to={NEWS_PATH} className={({ isActive }) => handleActive(isActive)}>News</NavLink>
                    <NavLink to={BOOKMARKS_PATH} className={({ isActive }) => handleActive(isActive)}>Bookmarks</NavLink>
            </Navigation>

            {/*<div>*/}
            {/*    <Iput type="text" placeholder="Search" onChange={handleChange} />*/}
            {/*</div>*/}
        </StyledHeader>
    );
};

export default Header;