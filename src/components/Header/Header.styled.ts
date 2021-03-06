import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.secondaryColor};
	display: flex;
	ul {
		padding: 0;
		margin: 26px 0;
	}
      @media (max-width: 767px) {
        flex-wrap: wrap;
        padding-bottom: 20px;
        ul {
          margin: 18px 0;
        }
      }
`;
export const Navigation = styled.ul`
	display: flex;
	column-gap: 20px;

	a {
		color: white;
		cursor: pointer;
		font-weight: bold;
		font-size: 28px;
		text-decoration: none;
		&.active {
		}
		&.inactive {
			opacity: 0.5;
		}
	}
`;
export const SearchContainer = styled.div`
	display: flex;
	margin: auto 0 auto auto;
    position: relative;
    svg{
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 10px;
    }
      @media (max-width: 767px) {
        width: 100%;
      }
`;

export const Search = styled.input`
	color: #686868;
	height: 30px;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	background: #191818;
	border: 0;
    border-radius: 3px;
	padding: 8px 8px 8px 30px;
	outline: none;

	@media (max-width: 480px) {
		width: 100%;
	}
`;
