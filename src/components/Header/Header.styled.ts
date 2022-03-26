import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 40px 0;
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
