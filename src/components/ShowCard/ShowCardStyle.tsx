import styled, {keyframes} from "styled-components";

const appear = keyframes`
    100%{
        transform: translateY(0%);
    }
`

const closeTop = keyframes`
    100%{
        transform: translateY(-100%);
    }
`

const closeBottom = keyframes`
    100%{
        transform: translateY(100%);
    }
`

const appearCard = keyframes`
    100%{
        transform: translateX(-50%);
    }
`

const closeCard = keyframes`
    100%{
        transform: translate(-50%,100%);
    }
`

export const ShowCardStyle = styled.div<{open: boolean}>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    // card
    form{
        position: absolute;
        bottom: 0;
        left: 50%;
        background-color: var(--global-bg-card);
        padding: 1em;
        width: 90%;
        max-width: 50em;
        height: calc(100% - 4em);
        min-height: 20em;
        border-radius: var(--global-border-radius) var(--global-border-radius) 0 0;
        font-size: 1.2em;
        
        transform: ${({open}) => open ? "translate(-50%,100%)" : "translate(-50%,0)"} ;
        animation: ${({open}) => open ? appearCard : closeCard} .3s ease-in forwards;
    }

    // background
    .bg{
        background-color: #00000090;
        position: absolute;
        left: 0;
        width: 100%;
        height: 50%;
    }

    .bg:nth-child(1){
        top: 0;
        transform: ${({open}) => open ? "translateY(-100%)" : "translateY(0%)"} ;
        animation: ${({open}) => open ? appear : closeTop} .3s ease-in forwards;
    }

    .bg:nth-child(2){
        bottom: 0;
        transform: ${({open}) => open ? "translateY(100%)" : "translateY(0%)"} ;
        animation: ${({open}) => open ? appear : closeBottom} .3s ease-in forwards;
    }

    // button
    button{
        background-color: var(--global-bg);
        color: var(--global-text-color);
        width: 4em;
        height: 4em;
        padding: 1em 1em 2em;
        border-radius: 0 0 2em 2em;
        border-style: solid;
        border-color: transparent var(--global-text-color) var(--global-text-color) var(--global-text-color);
        border-width: 1px;
        cursor: pointer;
        position: absolute;
        right: 1em;
        top: 0;
        transform: ${({open}) => open ? "translateY(-100%)" : "translateY(0)"} ;
        animation: ${({open}) => open ? appear : closeTop} .3s ease-in forwards;
        transition: background-color .3s ease-in;
    }

    button:hover{
        background-color: var(--global-red);
    }
`