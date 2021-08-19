import styled from "styled-components";

export const ResultWrapper = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const PlayerCard = styled.div`
    display: flex;
    margin: 50px auto;
    width: 50%;
    padding: 50px;
    background-color: ${({ theme }) => theme.colors.dark1};

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 60%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 70%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        align-items: start;
        width: 80%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 90%;
    }
`;

export const PlayerImage = styled.img`
    width: 250px;
    height: 250px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 200px;
        height: 200px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 20px 0 0 0;
    }
`;

export const Age = styled.h4`
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: 0.8rem;
    }
`;

export const Role = styled.h4`
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: 0.8rem;
    }
`;

export const Team = styled.h4`
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: 0.8rem;
    }
`;
