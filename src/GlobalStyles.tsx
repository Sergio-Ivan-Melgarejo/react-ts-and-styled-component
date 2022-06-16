import {createGlobalStyle, ThemeProvider} from 'styled-components';

// GlobalStyle _______________________________________

interface GlobalStyleProps {
  bgColor: string,
  bgCardColor: string,
  textColor: string,
  secondaryTextColor: string,
  shadowColor: string
}

const GlobalStyle = createGlobalStyle<{theme:GlobalStyleProps}>`
  *,*::after,*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root{
    --global-bg: ${({theme}) => theme.bgColor}; 
    --global-bg-card: ${({theme}) => theme.bgCardColor};
    --global-text-color: ${({theme}) => theme.textColor};
    --global-seconday-text-color: ${({theme}) => theme.secondaryTextColor};
    --global-box-shadow: 0em .5em 1em ${({theme}) => theme.shadowColor};
    --global-red: #ca4343;
    --global-red-opacity: #ca434399;
    --global-blue: #2220cc;
    --global-blue-opacity: #2220cc99;
    --global-border-radius: 5px;
  }

  body{
    background-color: var(--global-bg);
    color: var(--global-text-color);
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .relative{
    position: relative;
  }

  .hidden{
    overflow: hidden;
  }
`

// ThemeProvider _______________________________________

const light = {
  bgColor:"#fff",
  BgCardColor:"#fafafa",
  textColor:"#313131",
  secondaryTextColor: "#535353",
  shadowColor:"#00000050"
}
const dark = {
  bgColor:"#181824",
  bgCardColor:"#24263b",
  textColor:"#fafafa",
  secondaryTextColor: "#aaaaaa",
  shadowColor:"#00000050"
}
interface PropsThemeForGlobalStyled {
  children: any
}

export const ThemeForGlobalStyled = ( {children} : PropsThemeForGlobalStyled ) => {
    return (
        <ThemeProvider theme={dark}>
            {children}
            <GlobalStyle />
        </ThemeProvider>
    )
}