import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {thunkSetNews} from "./appRedux/News/actionCreators";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';

function App() {
    const dispatch = useDispatch();
    const fetchNews = async () => dispatch(thunkSetNews());
    useEffect(() => {fetchNews().then(() => console.log('loading news...'))},[])
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;