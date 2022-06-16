import {createGlobalStyle, ThemeProvider} from 'styled-components';

// GlobalStyle _______________________________________

interface GlobalStyleProps {
  bgColor: string,
  bgCardColor: string,
  textColor: string,
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
    --global-bg-card:${({theme}) => theme.bgCardColor};
    --global-text-color:${({theme}) => theme.textColor};
    --global-box-shadow: 0em .5em 1em ${({theme}) => theme.shadowColor};
  }

  body{
    background-color: var(--global-bg);
    color: var(--global-text-color);
    min-height: 100vh;
  }
`

// ThemeProvider _______________________________________

const light = {
  bgColor:"#fff",
  BgCardColor:"#fafafa",
  textColor:"#313131",
  shadowColor:"#00000050"
}
const dark = {
  bgColor:"#121212",
  bgCardColor:"#232323",
  textColor:"#fafafa",
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