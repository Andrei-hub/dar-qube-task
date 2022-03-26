import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import News from "../News";
import {BOOKMARKS_PATH, NEWS_PATH} from "constants/api";

const Main = () => {

    return (
                <Routes>
                    {/*<Route path={HOME_PATH} element={'test'} />*/}
                    <Route path={NEWS_PATH} element={ <News />} />
                    <Route path={BOOKMARKS_PATH} element={'second'} />
                    <Route
                        path="*"
                        element={<Navigate to={NEWS_PATH} replace />}
                    />
                </Routes>
    );
};

export default Main;