import styled from 'styled-components';

export const CardContainer = styled('article')<{ imgUrl: string; isPrimary: boolean; height: string }>`
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, #05141b 75.5%), url(${(props) => props.imgUrl});
	background-size: cover;
	max-width: ${(props) => (props.isPrimary ? '478px' : '280px')};
	border-radius: 6px;
	padding: 28px 25px 30px;
	height: ${(props) => props.height};
	width: 100%;
`;
export const Header = styled.header`
	display: flex;
`;
export const Tag = styled.span`
	font-size: 10px;
	color: ${({ theme }) => theme.tag};
	border: 1px solid #fff;
	border-radius: 30px;
	padding: 5px 15px;
`;
export const Latest = styled.div`
	margin: auto 0 auto auto;
	font-size: 8px;
	font-weight: 700;
	text-transform: uppercase;
	width: 90px;
	height: 16px;
	padding: 4px 0;
	background-color: ${({ theme }) => theme.danger};
`;
export const Content = styled.div`
	margin-top: auto;
	a {
		text-decoration: none;
		font-size: 20px;
		line-height: 28px;
		color: ${({ theme }) => theme.link};
		&:hover {
			span {
				opacity: 0.5;
			}
		}
	}
`;
export const Headline = styled.span`
	overflow: hidden;
	text-align: left;
	width: 100%;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;
export const Summary = styled.span`
	padding-top: 5px;
	overflow: hidden;
	text-align: left;
	font-size: 12px;
	line-height: 20px;
	opacity: 0.5;
	width: 100%;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;
export const Footer = styled.div`
	display: flex;
	padding-top: 20px;
`;
export const Date = styled.div`
	font-size: 12px;
	opacity: 0.75;
	display: inline-block;
	line-height: 22px;
	vertical-align: middle;
`;
export const BookmarkIcon = styled.div`
	opacity: 0.5;
	cursor: pointer;
	margin-left: auto;
`;
export const Text = styled.div`
	font-size: 12px;
	font-weight: 700;
	display: block;
	margin: auto 11px;
`;
export const Read = styled.div`
	a {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-content: center;
		margin-right: 35px;
		svg {
			margin: auto;
		}
		&:hover {
			svg {
				path {
					fill: ${({ theme }) => theme.primaryColor};
				}
			}

			div {
				opacity: 0.5;
			}
		}
	}
`;
