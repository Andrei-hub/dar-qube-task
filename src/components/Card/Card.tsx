import { FC } from 'react';
import {
	CardContainer,
	Header,
	Content,
	Footer,
	Date,
	BookmarkIcon,
	Read,
	Tag,
	Latest,
	Text,
	Headline,
	Summary,
} from './Card.styled';
import { ReactComponent as Inactive } from 'assets/img/bookmark.svg';
import { ReactComponent as Active } from 'assets/img/bookmarkActive.svg';
import { ReactComponent as ArrowSvg } from 'assets/img/arrow.svg';
import { Post } from 'types';
import { toDate } from 'utils/date';
import { useDispatch, useSelector } from 'react-redux';
import { setBookMark } from 'appRedux/News/actionCreators';
import { bookmarksSelector } from '../../appRedux/News/selectors';

interface Props {
	card: Post;
	isPrimary?: boolean;
	height: string;
}

const Card: FC<Props> = ({ card, isPrimary, height }) => {
	const dispatch = useDispatch();
	const bookmarks = useSelector(bookmarksSelector);
	const isActive = (id: number): boolean => bookmarks.includes(id);
	const handleChange = (id: number) => {
		dispatch(setBookMark(id));
	};

	return (
		<CardContainer imgUrl={card.image} isPrimary height={height}>
			<Header>
				<Tag>{card.related}</Tag>
				{isPrimary && <Latest>Latest Research</Latest>}
			</Header>
			<Content>
				<a href={card.url} target="_blank">
					<Headline>{card.headline}</Headline>
					<Summary>{card.summary}</Summary>
				</a>
				<Footer>
					{isPrimary && (
						<Read>
							<a href={card.url} target="_blank">
								<ArrowSvg />
								<Text>Read the research</Text>
							</a>
						</Read>
					)}
					<Date>{toDate(card.datetime, 'd MMM')}</Date>
					<BookmarkIcon onClick={() => handleChange(card.id)}>
						{isActive(card.id) ? <Active /> : <Inactive />}
					</BookmarkIcon>
				</Footer>
			</Content>
		</CardContainer>
	);
};

export default Card;
