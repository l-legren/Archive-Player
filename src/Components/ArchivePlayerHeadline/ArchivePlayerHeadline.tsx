import React from "react";
import {
    InputHeadline,
    HeadlineWrapper,
    InputWrapper,
    InputField,
    SectionWrapper,
    InputTitle
} from "./styles";

const InputSection: React.FC = () => {
    return (
        <SectionWrapper>
            <HeadlineWrapper>
                <InputHeadline>player archive</InputHeadline>
            </HeadlineWrapper>
            <InputWrapper>
                <InputTitle>
                    look for your favourite player
                </InputTitle>
                <InputField />
            </InputWrapper>
        </SectionWrapper>
    );
};

export default InputSection;
