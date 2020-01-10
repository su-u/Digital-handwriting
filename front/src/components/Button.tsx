import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  inlineText: string;
  to?: string;
}

const Button = {
  Red: ({inlineText, to = ''}: Props) => {
    return (
      <ButtonWrapper>
        <Link to={`${to}`}>
          <ButtonStyle color={'red'} hoverColor={'#c50000'}>
            {inlineText}
          </ButtonStyle>
        </Link>
      </ButtonWrapper>
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
  Green: (props: Props) => {
    const { inlineText } = props;
    return (
      <ButtonStyle color={'green'} hoverColor={'green'}>
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
  cursor: pointer;
  font-weight: bold;
  font-size: 27px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.color};
  &:hover {
    background-color: ${props => props.hoverColor};
    border-color: ${props => props.hoverColor};
  }
`;

const ButtonWrapper = styled.div`
  > a {
    text-decoration: none;
  }
`;

export default Button;
