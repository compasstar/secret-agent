import styled from 'styled-components';
import ImageContainer from '../../components/ImageContainer.tsx';
import { useState } from 'react';

export default function Scene2() {

  const dialogues = ['코끼리가 정답이 아니라니 이건 분명 무언가 착오가 있던 게 분명해요. ' +
  '저는 대체불가능한 인력... 아니 코력이라고요. (킁킁) 시크릿요원의 냄새가 남아있어요! 제가 기가막히게 냄새하나는 잘 맡거든요. 제 코를 보세요.',
    <StyledEmphasis>코 길이와 후각은 상관없지 않을까...?</StyledEmphasis>,
    '냄새가 향하는 곳을 찾았어요! (유년부실로 향한다)'
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