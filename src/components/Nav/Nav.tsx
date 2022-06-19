import styled, {} from "styled-components";

export const StylesContainer = styled.nav`
    background-color: var(--global-bg-card);
    padding: .5em;
    display: flex;
    justify-content: space-between;
    box-shadow: var(--global-box-shadow);
    border-radius: var(--global-border-radius);

    div {
        display: flex;
        align-items: center;
        gap: .5em;

        img {
            width: 100%;
            max-width: 5em;
            pointer-events: none;
        }

        @media (prefers-reduced-motion: no-preference) {
            img {
                animation: App-logo-spin infinite 20s linear;
            }
        }

        span{
        }
    }
    

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`