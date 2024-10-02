import styled from 'styled-components';
import ImageContainer from '../../components/ImageContainer.tsx';
import { useState } from 'react';

export default function Scene3() {

  const dialogues = ['지구에 꼭 필요한 다섯가지 생물을 아는 것을 넘어 분리수거도 잘하고 성경말씀까지 암기하고 있다고요…? 어떻게 된 거에요? 정말 대단한데요? 이정도면 시크릿요원 뺨 치겠어요!',
    <StyledEmphasis>...</StyledEmphasis>,
    '시크릿요원의 냄새가 가까워지고 있어요. (피아노방으로 향한다)'];

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