import styled from "styled-components";

const Image = styled.img`
  max-height: 16rem;
  object-fit: cover;
  border-radius: 2rem 0 0 2rem;
  margin-right: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

export { Image };