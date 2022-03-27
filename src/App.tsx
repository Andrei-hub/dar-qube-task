import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkSetNews } from './appRedux/News/actionCreators';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { loadingNewsSelector } from './appRedux/News/selectors';
import { Loader } from './components/Status';

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector(loadingNewsSelector);
	const fetchNews = async () => dispatch(thunkSetNews());
	useEffect(() => {
		fetchNews().then(() => console.log('finished'));
	}, []);
	return (
		<>
			{isLoading && <Loader />}
			<div className="App">
				<Header />
				<Main />
			</div>
		</>
	);
}

export default App;
