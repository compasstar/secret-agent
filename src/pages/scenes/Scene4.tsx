import styled from 'styled-components';
import ImageContainer from '../../components/ImageContainer.tsx';
import { useState } from 'react';

export default function Scene4() {

  const dialogues = ['이렇게나 친환경적으로 주문을 하다니 대단한데요! 전설의 레전드 시크릿요원과 버금가는데요? (킁킁) 냄새가 나요! 틀림없어요. 지금 유치부실에 있어요! (유치부실로 향한다. 비멀번호: 시크릿요원의정체)',
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