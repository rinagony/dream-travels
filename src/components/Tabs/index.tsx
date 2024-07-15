import React, { useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const TabHeaders = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.semiGray};
  justify-content: center;
  width: fit-content;
  border-radius: 2rem;
  margin-bottom: 1rem;
  padding: 2px 12px;
`;

const TabHeader = styled.button<{ isactive: string }>`
  padding: 12px;
  font-size: 1rem;
  border: none;
  background-color: ${({ isactive, theme }) =>
    isactive === "true" ? theme.colors.semiWhite : theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContainer>
      <TabHeaders>
        {tabs.map((tab, index) => (
          <TabHeader
            key={index}
            isactive={(index === activeTab).toString()}
            onClick={() => setActiveTab(index)}
            as="div"
          >
            {tab.label}
          </TabHeader>
        ))}
      </TabHeaders>
      {tabs[activeTab].content}
    </TabsContainer>
  );
};

export default Tabs;
