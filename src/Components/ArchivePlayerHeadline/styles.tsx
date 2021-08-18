import styled from "styled-components";

export const InputWrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${({theme}) => theme.colors.secondary};

`

export const InputHeadline = styled.h3`
    text-transform: uppercase;
    font-size: 4rem;
    cursor: default;
    font-family: "Train One", cursive;
`;