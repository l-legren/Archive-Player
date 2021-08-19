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
`;

export const PlayerImage = styled.img`
    width: 150px;
    height: 150px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
`;

export const Age = styled.h4`
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};
`;

export const Role = styled.h4`
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};
`;

export const Team = styled.h4`
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark1};
`;
