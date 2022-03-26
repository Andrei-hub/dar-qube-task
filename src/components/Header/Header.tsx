import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {activeTabSelector} from "appRedux/News/selectors";
import {setActiveTab} from "appRedux/News/actionCreators";
import { StyledHeader, Tabs } from './Header.styled'
import {PostType} from "types";

const Header = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector(activeTabSelector);
    const onClick = (tab: PostType) => dispatch(setActiveTab(tab));
    return (
        <StyledHeader >
            <Tabs className="tabs">
            {/*    <Tab active={activeTab.includes(PostType.NEWS)} onClick={() => onClick(PostType.NEWS)}>*/}
            {/*        News*/}
            {/*    </Tab>*/}
            {/*    <Tab*/}
            {/*        active={activeTab.includes(PostType.BOOKMARKS)}*/}
            {/*        onClick={() => onClick(PostType.BOOKMARKS)}*/}
            {/*    >*/}
            {/*        Bookmarks*/}
            {/*    </Tab>*/}
            </Tabs>
            {/*<div>*/}
            {/*    <Iput type="text" placeholder="Search" onChange={handleChange} />*/}
            {/*</div>*/}
        </StyledHeader>
    );
};

export default Header;