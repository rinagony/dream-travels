import styled from "styled-components";
import LogoSvg from "../../assets/SVGs/Logo";
import Button from "../Button";

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.black};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

interface HeaderProps {
  onCreate: () => void;
}

const Header = ({onCreate}: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoSvg />
      <Button variant="transparent" onClick={onCreate}>
        Create new trip
      </Button>
    </HeaderContainer>
  );
};

export default Header;
