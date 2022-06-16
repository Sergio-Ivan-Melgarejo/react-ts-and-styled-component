import styled from "styled-components";

export const TaskFormStyle = styled.form`
    background-color: var(--global-bg-card);
    border-radius: var(--global-border-radius);
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    gap: .5em;

    h2{
        font-size: 1.4em;
        width: 100%;
    }

    input,
    textarea,
    button{
        width: 100%;
        padding: .75em;
        border-radius: var(--global-border-radius);
        border: none;
        font-size: .9em;
        background-color: var(--global-bg);
        color: var(--global-text-color);
        resize: none;
    }

    button{
        cursor: pointer;
        transition: background .3s ease-in;
    }

    button:hover{ 
        background: linear-gradient(120deg, var(--global-blue-opacity),var(--global-red-opacity));
    }

    @media screen and (min-width: 40em) {
        input,
        textarea,
        button{
            flex: 1 1 1px;
        }
    }

`