import styled from "styled-components";

export const SectionWrapper = styled.div`
    position: relative;
    top: 55px;
    display: flex;
    flex-direction: column;
`;

export const HeadlineWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 100px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 5px solid ${({ theme }) => theme.colors.light1};

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        padding: 60px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 50px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 25px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        padding: 10px;
    }
`;

export const InputHeadline = styled.h3`
    text-transform: uppercase;
    font-size: 3rem;
    cursor: default;
    font-family: "Train One", cursive;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        font-size: 2.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 1.2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: 1rem;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 50px;
    background-color: ${({ theme }) => theme.colors.dark1};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputField = styled.input`
    width: 200px;
    height: 50px;
    font-size: 30px;
    border-radius: 0%;
`;
