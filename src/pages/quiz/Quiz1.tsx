import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz1() {

  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (answer === '에코끼리') {
      navigate('/scene2');
    } else {
      alert('정답이 아닙니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <AnswerContainer
        placeholder="입장퀴즈!"
        value={answer}
        onChange={handleInputChange}
      ></AnswerContainer>
      <ButtonContainer onClick={handleSubmit}>정답맞추기</ButtonContainer>
    </Container>
  );
}

// ---------- CSS --------------
const Container = styled.div`
    height: 100vh;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;
`;

const AnswerContainer = styled.input`
    width: 80%;
    height: 10vh;
    border-style: solid;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
`;

const ButtonContainer = styled.button`
    width: 50%;
    height: 8vh;
    background-color: cadetblue;
    color: white;
    border-radius: 10px;
    border-style: none;
    font-size: 20px;
`;