import { FC } from 'react';
import { ButtonWrapper, Button, PaginationContainer, Range, Amount, PaginationNumber } from './Pagination.styled';

interface Props {
	total: number;
	range: string;
	prevPage: () => void;
	nexPage: () => void;
}

const Pagination: FC<Props> = ({ total, range, prevPage, nexPage }) => {
	return (
		<PaginationContainer>
			<PaginationNumber>
				<Range>{range}</Range>
				<Amount>out of {total}</Amount>
			</PaginationNumber>

			<ButtonWrapper>
				<Button onClick={prevPage}>previous</Button>
				<Button onClick={nexPage}>next</Button>
			</ButtonWrapper>
		</PaginationContainer>
	);
};

export default Pagination;
