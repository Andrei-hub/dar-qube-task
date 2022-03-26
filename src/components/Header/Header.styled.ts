import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 40px 0;
`
export const Tabs = styled.div`
  display: flex;
  column-gap: 20px;
`;