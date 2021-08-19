import React, { useState } from "react";
import PlayerInfo from "../PlayerInfo/PlayerInfo";

// Local Imports
import {
    InputHeadline,
    HeadlineWrapper,
    InputWrapper,
    InputField,
    SectionWrapper,
    InputTitle,
    FieldWrapper,
    InputButton,
    EmptyInfo,
    NotAvailableWrapper,
    NotAvailableText,
} from "./styles";

export interface PlayerProfile {
    age: string;
    picture: string;
    role: string;
    team: string;
}

const InputSection: React.FC = () => {
    const [searchPlayer, setSearchPlayer] = useState("");
    const [result, setResult] = useState<PlayerProfile>();
    const [playerAvailable, setPlayerAvailable] = useState(true);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const lowercasePlayer: string = e.target.value.toLowerCase();
        setSearchPlayer(lowercasePlayer);
    };

    const handleSubmit = async () => {
        const profileId: string = await fetch(
            `https://web-sandbox.onefootball.com/assignments/player/data/${searchPlayer}.json`
        )
            .then((res) => res.json())
            .then((res) => {
                if (res.active === "true") {
                    return res["profile-id"];
                } else {
                    setPlayerAvailable(false);
                }
            })
            .catch((error) => {
                console.error("Error fetching data", error);
                setPlayerAvailable(false);
            });

        if (profileId) {
            setPlayerAvailable(true);
            const playerInfo: PlayerProfile = await fetch(
                `https://web-sandbox.onefootball.com/assignments/player/profile/${profileId}`
            )
                .then((res) => res.json())
                .then((res) => res.profile);
            setResult(playerInfo);
        }

        setSearchPlayer("");
    };

    return (
        <SectionWrapper>
            <HeadlineWrapper>
                <InputHeadline>player archive</InputHeadline>
            </HeadlineWrapper>
            <InputWrapper>
                <InputTitle>look for your favourite player</InputTitle>
                <FieldWrapper>
                    <InputField
                        type="text"
                        placeholder="ENTER PLAYER"
                        value={searchPlayer}
                        onChange={onInputChange}
                    />
                    <InputButton onClick={handleSubmit}>GO!</InputButton>
                </FieldWrapper>
            </InputWrapper>
            {playerAvailable && result ? (
                <PlayerInfo data={result} />
            ) : !playerAvailable ? (
                <NotAvailableWrapper>
                    <NotAvailableText>Player not available</NotAvailableText>
                </NotAvailableWrapper>
            ) : (
                <EmptyInfo />
            )}
        </SectionWrapper>
    );
};

export default InputSection;
