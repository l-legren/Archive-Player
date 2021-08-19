import React, {useState} from "react";
import {
    InputHeadline,
    HeadlineWrapper,
    InputWrapper,
    InputField,
    SectionWrapper,
    InputTitle,
    FieldWrapper,
    InputButton
} from "./styles";

const InputSection: React.FC = () => {

    const [searchPlayer, setSearchPlayer] = useState("")

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPlayer(e.target.value)
    }

    const handleSubmit = () => {
        console.log("clicking", searchPlayer)
    }

    return (
        <SectionWrapper>
            <HeadlineWrapper>
                <InputHeadline>player archive</InputHeadline>
            </HeadlineWrapper>
            <InputWrapper>
                <InputTitle>look for your favourite player</InputTitle>
                <FieldWrapper>
                    <InputField type="text" placeholder="ENTER PLAYER" value={searchPlayer} onChange={onInputChange}/>
                    <InputButton onClick={handleSubmit} >GO!</InputButton>
                </FieldWrapper>
            </InputWrapper>
        </SectionWrapper>
    );
};

export default InputSection;
