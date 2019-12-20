import React from 'react';
import styled from "styled-components";

interface Props {
    inlineText: string;
}

const Button = {
    Red: (props: Props) => {
        const { inlineText } = props;
        return <ButtonStyle color={'red'} hoverColor={'#c50000'}>{inlineText}</ButtonStyle>
    },
    Black: (props: Props) => {
        const { inlineText } = props;
        return <ButtonStyle color={'black'} hoverColor={'Black'}>{inlineText}</ButtonStyle>
    },
};

const ButtonStyle = styled.div<{color: string, hoverColor: string}>`
    border: 2px solid ${props => props.color};
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    line-height: 20px;
    color: white;
    width: 120px;
    height: 20px;
    cursor: pointer;
    left: calc(50% - 120px / 2);
    top: calc(50% - 20px / 2);
    font-weight: bold;
    font-size: 27px;
    background-color: ${props => props.color};
    &:hover {
      background-color: ${props => props.hoverColor};
      border-color: ${props => props.hoverColor};
    }
`;

export default Button;