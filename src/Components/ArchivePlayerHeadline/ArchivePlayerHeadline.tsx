import React, { useState } from "react";
import {
    InputHeadline,
    HeadlineWrapper,
    InputWrapper,
    InputField,
    SectionWrapper,
    InputTitle,
    FieldWrapper,
    InputButton,
    ResultWrapper,
} from "./styles";

interface PlayerProfile {
    age: string;
    picture: string;
    role: string;
    team: string;
}

const InputSection: React.FC = () => {
    const [searchPlayer, setSearchPlayer] = useState("");
    const [result, setResult] = useState<PlayerProfile>();

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPlayer(e.target.value);
    };

    const handleSubmit = async () => {
        const profileId = await fetch(
            `https://web-sandbox.onefootball.com/assignments/player/data/${searchPlayer}.json`
        )
            .then((res) => res.json())
            .then((res) => res["profile-id"]);

        const playerInfo = await fetch(
            `https://web-sandbox.onefootball.com/assignments/player/profile/${profileId}`
        ).then((res) => res.json());
        setResult(playerInfo.profile);
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
            <ResultWrapper></ResultWrapper>
        </SectionWrapper>
    );
};

export default InputSection;
