import styled from 'styled-components';

export const PaginationContainer = styled('div')`
	grid-column: 1/-1;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
export const PaginationNumber = styled('div')`
	display: flex;
	font-size: 12px;
	font-weight: normal;
`;
export const Range = styled('div')`
	opacity: 1;
	margin-right: 7px;
`;
export const Amount = styled('div')`
	opacity: 0.5;
`;
export const ButtonWrapper = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
export const Button = styled('button')`
	cursor: pointer;
	width: 116px;
	text-transform: uppercase;
	padding: 7px 0;
	font-weight: 700;
	font-size: 10px;
	background: #3c3c3c;
	color: #fff;
	border-radius: 60px;
	border: none;
	&:focus {
		outline: 0;
	}
	&:hover {
		opacity: 0.5;
	}
`;
