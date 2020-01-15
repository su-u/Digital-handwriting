import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';
import * as QuestionActions from '@/actions/Question';

interface Props {
  question_actions: typeof QuestionActions;
}

const App = (props: Props) => {
  const { question_actions } = props;
  question_actions.InitQuestion();
  return (
    <>
      <TextWrapper>
        <h1>はじめに</h1>
        <p>みなさん。マウスで手書きはお好きですか？</p>
        <p>うまく書ける人はそう多くないと思います。</p>
        <p>そんなあなたのマウス手書き力。測定します。</p>
        <h2>ルール</h2>
        <ul>
          <li>問題は3問あります。</li>
          <li>問題と同じテキストを白いキャンバスに書いてください</li>
          <li>書き終わったら「次へ」を押してください。</li>
          <li>キャンバスに収まらない場合は、書いてある文字のみで判定されます。</li>
          <li>判定はAIが公平に行います。ノークレームでお願いします。</li>
        </ul>
      </TextWrapper>
      <Button.Red inlineText={'はじめる'} to={'/question/0'} />
    </>
  );
};

const TextWrapper = styled.div`
  margin: 0 auto 70px auto;
  width: 80%;
`;

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    question_actions: bindActionCreators(QuestionActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(App);
