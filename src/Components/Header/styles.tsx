import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.dark1};
    color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    height: 55px;
    width: 100%;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const HeaderContent = styled.div`
    max-width: ${({ theme }) => theme.breakpoints.lg};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const HeaderTitle = styled.h2`
    text-transform: uppercase;
    font-size: 2rem;
    cursor: default;
`