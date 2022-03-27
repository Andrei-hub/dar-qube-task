import React from 'react';
import Pagination from '../Pagination';
import { useSelector } from 'react-redux';
import { dataSelector, latestNewsSelector } from 'appRedux/News/selectors';
import Card from '../Card';
import { NewsContainer, CardContainer, LatestResearch } from './News.styled';
import usePagination from 'utils/usePagination';
import { Empty } from '../Status';

const News = () => {
	const news = useSelector(dataSelector);
	const latestNews = useSelector(latestNewsSelector);
	const { currentData, rangeOf, totalItems, next, prev } = usePagination(news, 6);

	return (
		<NewsContainer>
			<LatestResearch>{latestNews && <Card card={latestNews} isPrimary height={'628px'} />}</LatestResearch>
			{news.length ? (
				<CardContainer>
					{currentData().map((el) => (
						<Card key={el.id} card={el} height={'425px'} />
					))}
					<Pagination range={rangeOf} total={totalItems} prevPage={() => prev()} nexPage={() => next()} />
				</CardContainer>
			) : (
				<Empty type={'Nothing to show'} />
			)}
		</NewsContainer>
	);
};

export default News;
