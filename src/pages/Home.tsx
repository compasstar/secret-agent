import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer.tsx';

export default function Home() {

  const dialogue1 = '에코허그팀의 시크릿요원이 사라졌습니다. 그는 전설의 레전드요원으로 환경에 관한 것이라면, 지식적으로도 모르는 게 없고 해보지 않은 활동이 없다고 합니다. 그런 그가 불현듯 사라졌습니다. 한 통의 편지만을 남기고 말이죠…';
  // const dialogue1 = '지구가 위험해!';
  // const dialogue1 = '그는 어디로 떠난 것일까요? 에코허그팀에는 그가 필요합니다. 당신을 도울 파트너와 함께 에코허그팀의 시크릿요원을 찾아주세요!';


  return (
    <Container>
      <ImageContainer src="vite.svg" />
      <DialogueContainer>
        {dialogue1}
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