import styled from "styled-components";

export const TaskListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 1em;
    align-items: start;

    .container{
        height: 8em;
        border-radius: var(--global-border-radius);
        background-color: var(--global-bg-card);
    }
`