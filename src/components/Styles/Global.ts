import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  .App {
    max-width: 1439px;
    padding: 40px 30px;
    margin: auto;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`

export default GlobalStyles