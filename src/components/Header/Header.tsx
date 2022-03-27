import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { BOOKMARKS_PATH, NEWS_PATH } from "constants/api";
import { StyledHeader, Navigation,SearchContainer, Search } from './Header.styled'
import {setSearchParams} from "../../appRedux/News/actionCreators";
import {useDispatch} from "react-redux";
import {useDebounce} from "../../utils/useDebounce";

const Header = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 700);

    const handleActive = (isActive:boolean):string => (isActive ? 'active' : 'inactive');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  setSearchTerm(e.target.value);

    useEffect(() => {
        dispatch(setSearchParams(searchTerm));
        },[debouncedSearchTerm]);

    return (
        <StyledHeader>
            <Navigation>
                    <NavLink to={NEWS_PATH} className={({ isActive }) => handleActive(isActive)}>News</NavLink>
                    <NavLink to={BOOKMARKS_PATH} className={({ isActive }) => handleActive(isActive)}>Bookmarks</NavLink>
            </Navigation>

            <SearchContainer>
                <Search type="text" placeholder="Search" onChange={handleChange} />
            </SearchContainer>
        </StyledHeader>
    );
};

export default Header;