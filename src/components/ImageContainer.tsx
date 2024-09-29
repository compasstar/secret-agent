import styled from 'styled-components';

interface Props {
  className?: string;
  src: string;
}

export default function ImageContainer({ className, src }: Props) {
  return (
    <Container className={className}>
      <Image src={src} />
    </Container>
  );
};


// -------------- CSS --------------
const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;


