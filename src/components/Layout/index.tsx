import styled from "styled-components";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const MainContent = styled.main`
  padding: 1rem;
  flex: 1;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {

  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
