import React from 'react';
import styled from "styled-components";

interface Props {
    inlineText: string;
}

const Button = {
    Red: (props: Props) => {
        const { inlineText } = props;
        return <RedButton>{inlineText}</RedButton>
    }
}

const ButtonStyle = styled.div`
    border: 2px solid;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    line-height: 30px;
    color: white;
    width: 150px;
    height: 30px;
    cursor: pointer;
    top: calc(50% - 30px / 2);
    left: calc(50% - 150px / 2);
    font-weight: bold;
    font-size: 27px;
    &:hover {
        border: 1px solid;
    }
`;

const RedButton = styled(ButtonStyle)`
    background-color: red;
    border-color: red;
    &:hover {
        border-color: red;
    }
`;



export default Button;