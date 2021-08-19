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
    ErrorMessage,
    NoErrorMessage,
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
    const [errorFetching, setErrorFetching] = useState(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const lowercasePlayer: string = e.target.value.toLowerCase();
        setSearchPlayer(lowercasePlayer);
    };

    const handleSubmit = async () => {
        const profileId: string = await fetch(
            `https://web-sandbox.onefootball.com/assignments/player/data/${searchPlayer}.json`
        )
            .then((res) => res.json())
            .then((res) => res["profile-id"])
            .catch((error) => {
                console.error("Error fetching data", error);
                setErrorFetching(true);
            });

        if (profileId) {
            const playerInfo: PlayerProfile = await fetch(
                `https://web-sandbox.onefootball.com/assignments/player/profile/${profileId}`
            )
                .then((res) => res.json())
                .then((res) => res.profile);
            setResult(playerInfo);
            setErrorFetching(false);
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
                {errorFetching ? (
                    <ErrorMessage>Please enter a valid name</ErrorMessage>
                ) : (
                    <NoErrorMessage />
                )}
            </InputWrapper>
            {result ? <PlayerInfo data={result} /> : <EmptyInfo />}
        </SectionWrapper>
    );
};

export default InputSection;
