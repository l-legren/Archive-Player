import React from "react";
import {
    InputHeadline,
    HeadlineWrapper,
    InputWrapper,
    InputField,
    SectionWrapper
} from "./styles";

const InputSection: React.FC = () => {
    return (
        <SectionWrapper>
            <HeadlineWrapper>
                <InputHeadline>look for your favourite player</InputHeadline>
            </HeadlineWrapper>
            <InputWrapper>
                <InputField />
            </InputWrapper>
        </SectionWrapper>
    );
};

export default InputSection;
