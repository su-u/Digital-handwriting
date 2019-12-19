import React from 'react';
import styled from "styled-components";

interface Props {
    inlineText: string;
}

const Button: React.FC<Props> = (props: Props) => {
    const { inlineText } = props;
    return (
        <ButtonStyle>
            {inlineText}
        </ButtonStyle>
    );
};

const ButtonStyle = styled.div`
    border: 2px solid green;
    border-radius: 5px;
    background-color: green;
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
        background-color: #084c08;
        border: 1px solid #084c08;
    }
`;

export default Button;