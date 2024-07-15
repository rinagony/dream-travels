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

const Header = () => {
  const handleOnCreateNewTrip = () => {
    console.log("Create new trip");
  };

  return (
    <HeaderContainer>
      <LogoSvg />
      <Button variant="transparent" onClick={handleOnCreateNewTrip}>
        Create new trip
      </Button>
    </HeaderContainer>
  );
};

export default Header;
