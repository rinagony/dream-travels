import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const SearchBar = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: 20rem;
  border-radius: 1.5rem;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.colors.semiGray};
  input {
    padding: 8px;
    margin-right: 8px;
    font-size: 1rem;
    border: none;
    outline: none;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.3rem;
  }
  h5 {
    font-size: 1.5rem;
    margin: 0.3rem;
    font-weight: 500;
  }
`;

interface SearchHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <Heading>
      <h2>The places you dream of</h2>
      <h5>Let's live new adventures!</h5>
      <SearchBar>
        <input
          type="text"
          placeholder="Search trips"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="filled" onClick={onSearch}>Search</Button>
      </SearchBar>
    </Heading>
  );
};

export default SearchHeader;