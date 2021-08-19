import React, { useEffect } from "react";

// Local Imports
import {
    PlayerCard,
    PlayerImage,
    ResultWrapper,
    InfoWrapper,
    Age,
    Team,
    Role,
} from "./styles";
import { PlayerProfile } from "../SearchPlayerInput/SearchPlayerInput";

interface PlayerProfileProps {
    data: PlayerProfile;
}

const PlayerInfo: React.FC<PlayerProfileProps> = ({ data }) => {
    useEffect(() => {
        console.log("Data inside", data);
    }, [data]);

    return (
        <ResultWrapper>
            <PlayerCard>
                <PlayerImage src={data.picture} />
                <InfoWrapper>
                    <Age>{`Age: ${data.age}`}</Age>
                    <Role>{`Role: ${data.role}`}</Role>
                    <Team>{`Team: ${data.team}`}</Team>
                </InfoWrapper>
            </PlayerCard>
        </ResultWrapper>
    );
};

export default PlayerInfo;
