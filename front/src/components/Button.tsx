import React from 'react';
import styled from 'styled-components';

interface Props {
    inlineText: string;
}

const Button = {
    Red: (props: Props) => {
        const { inlineText } = props;
        return (
            <ButtonStyle color={'red'} hoverColor={'#c50000'}>
                {inlineText}
            </ButtonStyle>
        );
    },
    Black: (props: Props) => {
        const { inlineText } = props;
        return (
            <ButtonStyle color={'black'} hoverColor={'Black'}>
                {inlineText}
            </ButtonStyle>
        );
    },
};

interface ButtonProps {
    color: string;
    hoverColor: string;
}

const ButtonStyle = styled.div<{ props: ButtonProps }>`
    border: 2px solid ${props => props.color};
    padding: 20px;
    text-align: center;
    line-height: 20px;
    color: white;
    width: 100px;
    height: 20px;
    cursor: pointer;
    left: calc(50% - 100px / 2);
    top: calc(50% - 20px / 2);
    font-weight: bold;
    font-size: 27px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.color};
    &:hover {
        background-color: ${props => props.hoverColor};
        border-color: ${props => props.hoverColor};
    }
`;

export default Button;
