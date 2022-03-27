import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.secondaryColor};
  display: flex;
  ul{
    padding: 0;
    margin: 26px 0;
  }
`
export const Navigation = styled.ul`
  display: flex;
  column-gap: 20px;
 
  a {
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 28px;
    text-decoration: none;
    &.active{
    }
    &.inactive{
    opacity: 0.5
    }
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  margin: auto 0 auto auto;
`;

export const Search = styled.input`
  color: #686868;
  height: 30px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  background: #191818;
  border: 0;
  padding: 8px;
  outline: none;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
