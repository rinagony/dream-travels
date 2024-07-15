import { useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { fetchTrips } from "../../redux/trips";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

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
