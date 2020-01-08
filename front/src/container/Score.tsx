import React from 'react';
import styled from 'styled-components';
import { QuestionType } from '@/type/QuestionType';

interface Props {
    question: QuestionType[];
}

const ScoreContainer: React.FC = (props: Props) => {
    const { question } = props;
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
