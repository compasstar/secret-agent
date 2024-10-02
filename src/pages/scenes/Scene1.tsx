import styled from 'styled-components';
import ImageContainer from '../../components/ImageContainer.tsx';
import { useState } from 'react';

export default function Scene1() {

  const dialogues = ['에코허그팀의 시크릿요원이 사라졌습니다. 그는 전설의 레전드요원으로 환경에 관한 것이라면, 지식적으로도 모르는 게 없고 해보지 않은 활동이 없다고 합니다. 그런 그가 불현듯 사라졌습니다. 한 통의 편지만을 남기고 말이죠…',
    <StyledEmphasis>지구가 위험해!</StyledEmphasis>,
    '그는 어디로 떠난 것일까요? 에코허그팀에는 그가 필요합니다. 당신을 도울 파트너와 함께 에코허그팀의 시크릿요원을 찾아주세요!',
    '안녕하세요. 저는 당신을 도와 시크릿요원을 함께 탐색할 파트너 에코...끼리입니다. 제가 마지막으로 그를 본 곳을 기억하고 있어요! 그곳부터 수색해보죠! (고등부실로 향한다. 비밀번호: 에코끼리)'
  ];

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const handleNextDialogue = () => {
    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Container>
      <ImageContainer src="vite.svg" />
      <DialogueContainer onClick={handleNextDialogue}>
        {dialogues[currentDialogueIndex]}
      </DialogueContainer>
    </Container>
  );
}


//---------------- CSS ------------------------
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const DialogueContainer = styled.div`
    padding: 20px;
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    color: #333;
    font-size: 1.2rem;
    text-align: left;
    border-top: 1px solid #ddd;
`;

const StyledEmphasis = styled.span`
    color: #007BFF;
    font-style: italic;
    border-style: solid;
    border-radius: 15px;
    padding: 10px 20px 10px 20px;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        background-color: lightblue;
    }
`;