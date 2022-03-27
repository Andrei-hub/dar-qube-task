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
import { bookmarksSelector } from 'appRedux/News/selectors';

interface Props {
	post: Post;
	isPrimary?: boolean;
	height: string;
}

const Card: FC<Props> = ({ post, isPrimary, height }) => {
	const dispatch = useDispatch();
	const bookmarks = useSelector(bookmarksSelector);
	const isActive = (id: number): boolean => bookmarks.includes(id);
	const handleChange = (id: number) => {
		dispatch(setBookMark(id));
	};

	return (
		<CardContainer imgUrl={post.image} isPrimary height={height}>
			<Header>
				<Tag>{post.related}</Tag>
				{isPrimary && <Latest>Latest Research</Latest>}
			</Header>
			<Content>
				<a href={post.url} target="_blank">
					<Headline>{post.headline}</Headline>
					<Summary>{post.summary}</Summary>
				</a>
				<Footer>
					{isPrimary && (
						<Read>
							<a href={post.url} target="_blank">
								<ArrowSvg />
								<Text>Read the research</Text>
							</a>
						</Read>
					)}
					<Date>{toDate(post.datetime, 'd MMM')}</Date>
					<BookmarkIcon onClick={() => handleChange(post.id)}>
						{isActive(post.id) ? <Active /> : <Inactive />}
					</BookmarkIcon>
				</Footer>
			</Content>
		</CardContainer>
	);
};

export default Card;
