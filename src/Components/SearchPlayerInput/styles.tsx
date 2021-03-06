import styled from "styled-components";

export const SectionWrapper = styled.div`
    position: relative;
    top: 55px;
    height: calc(100% - 55px);
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid ${({ theme }) => theme.colors.light1};
`;

export const InputTitle = styled.h4`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 0.8rem;
    }
`;

export const FieldWrapper = styled.div`
    display: flex;
`;

export const InputButton = styled.button`
    width: 80px;
    height: 50px;
    font-size: 1.8rem;
    border-radius: 0%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};
    margin-left: 15px;
    border: none;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 50px;
        height: 30px;
        font-size: 1rem;
    }

    :hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const InputField = styled.input`
    width: 200px;
    height: 50px;
    font-size: 1.6rem;
    border-radius: 0%;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 150px;
        height: 30px;
        font-size: 1rem;
    }
`;

export const NoErrorMessage = styled.div`
    height: 40px;
`;

export const ErrorMessage = styled.p`
    padding: 10px;
    margin-top: 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};
`;

export const NotAvailableWrapper = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
`;

export const NotAvailableText = styled.h2`
    text-transform: uppercase;
    margin-top: 50px;
    font-size: 3rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.2rem;
    }
`;

export const EmptyInfo = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
`;
