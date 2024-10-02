import styled from 'styled-components';
import ImageContainer from '../../components/ImageContainer.tsx';
import { useState } from 'react';

export default function Scene5() {

  const dialogues = [<StyledEmphasis>이곳에 있다면서?</StyledEmphasis>,
    '네 맞아요. 바로 앞을 보세요. 에코허그팀의 시크릿요원이 있잖아요.',
    <StyledEmphasis>거울을 바라본다</StyledEmphasis>,
    '에코허그팀의 시크릿요원은 바로 당신이에요.',
    '당신이 지구에서 절대 사라져선 안되는 생물들을 알았던 것도, 분리수거를 완벽하게 수행했던 것도, 창세기 말씀을 기억하던 것도, 커피주문을 철저하게 했던 것도 모두 당신이 시크릿요원이었기 때문이에요!' +
    '당신은 누구보다 환경에 대해 잘 알고 친환경을 실천하고 있어요. 당신은 처음부터 에코허그팀의 일원이었던 것이에요.',
    '여태까지 제가 안내한 것들은 당신이 자신이 에코허그팀의 일원임을 기억하게 하기 위해 준비한 활동이었어요. 시크릿요원님! 제가 준비한 활동들을 모두 무사히 완수해주셔서 감사해요. 앞으로도 시크릿요원님의 자리에서 친환경 활동을 이어나가주실건가요?',
    <StyledEmphasisContainer>
      <StyledEmphasis>
        당연하지
      </StyledEmphasis>
      <StyledEmphasis>
        물론이지
      </StyledEmphasis>
      <StyledEmphasis>
        두말이면 잔소리지
      </StyledEmphasis>
      <StyledEmphasis>
        나는 모든 생물을 다스리는 자이자 주님의 자식이니 그렇게 하겠소
      </StyledEmphasis>
    </StyledEmphasisContainer>
    ,
    '당신의 앞날을 응원합니다! 피아노방으로 돌아가면 상품이 준비되어있으니 받아가세요. THANK YOU.'
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
    width: 80%;
    text-align: center;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        background-color: lightblue;
    }
`;

const StyledEmphasisContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;