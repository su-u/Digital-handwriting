import React from 'react';
import styled from 'styled-components';

interface Props {
    img: string[];
}

const ScoreContainer: React.FC = () => {
    return (
        <Wrapper>
            <PageTitle>結果</PageTitle>
            <ScoreWrapper></ScoreWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
`;

const PageTitle = styled.h1`
    margin: 20px auto;
    text-align: center;
`;

const ScoreWrapper = styled.div``;

export default ScoreContainer;
