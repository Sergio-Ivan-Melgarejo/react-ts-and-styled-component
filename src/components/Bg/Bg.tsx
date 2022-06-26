import styled from "styled-components";

export const StylesContainer = styled.div`
    height: 21em;
    border-bottom-left-radius: var(--global-border-radius);
    border-bottom-right-radius: var(--global-border-radius);
    overflow: hidden;
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100em;
    /* border: 1px solid var(--global-bg-card); */
    background-color: var(--global-bg-card);

    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    div{
        background: linear-gradient(120deg, var(--global-blue-opacity),var(--global-red-opacity));
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }
`