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
        bottom: 1em;
    }
`

const closeCard = keyframes`
    100%{
        transform: translate(-50%,100%);
    }
`

export const ModalCardStyle = styled.div<{open: boolean}>`
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
        height: calc(100% - 5em);
        min-height: 20em;
        border-radius: var(--global-border-radius);
        font-size: 1.2em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        border-style: solid;
        border-width: 1px;
        border-color: var(--global-blue-opacity) var(--global-red-opacity) var(--global-red-opacity) var(--global-blue-opacity);
        box-shadow: -.5em -.5em 2em var(--global-blue-opacity),
                    .25em .25em 1em var(--global-red-opacity);
        transform: ${({open}) => open ? "translate(-50%,100%)" : "translate(-50%,0)"} ;
        animation: ${({open}) => open ? appearCard : closeCard} .5s ease-in forwards;
    
        span, p, h3, button {
            background: var(--global-bg);
            padding: .5em;
            border-radius: var(--global-border-radius);
            font-size: 1em;
        }

        h3, span{
            flex: 1 1 1px;
        }

        p{
            flex: 3 1 1px;
        }

        div{
            display: flex;
            gap: 1em;

            button{
                flex: 1 1 1px;
                color: var(--global-seconday-text-color);
                border: var(--global-seconday-text-color) 1px solid;
                cursor: pointer;
                transition: color .3s ease-in, border-color .3s ease-in;
            }

            // close button
            .close{
                max-width: 5em;
                transition: background-color .3s ease-in, color .3s ease-in, border-color .3s ease-in;
            }

            .close:hover{
                background-color: var(--global-red);
                color: var(--global-text-color);
                border-color: var(--global-text-color);
            }
            
            // delete button
            .delete:hover{
                color: var(--global-red);
                border-color: var(--global-red);
            }

            // delete Edit
            .edit:hover{
                color: var(--global-blue);
                border-color: var(--global-blue);
            }
        }

/* 
  &.open .card{
    color: var(--global-text-color);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    max-width: 600px;
    height: 90%;
    max-width: 600px;
    font-size: 1.5em;
  }
  
  &.open h3{
    order: 2;
    border: 1px solid var(--global-seconday-text-color);
    border-radius: var(--global-border-radius);
    padding: .3em;
    flex: 1 1 1px;
  }

  &.open span{
    order: 1;
    border: 1px solid var(--global-seconday-text-color);
    border-radius: var(--global-border-radius);
    padding: .3em;
  }
  
  &.open p{
    order: 3;
    border: 1px solid var(--global-seconday-text-color);
    border-radius: var(--global-border-radius);
    padding: .3em;
    flex: 4 1 1px;
  } */








    }

    // background
    .bg{
        background: #00000099;
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
`