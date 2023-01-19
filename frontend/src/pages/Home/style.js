import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 60vh;
  padding: 0 1rem;
`;

export const Title = styled.h3`
  text-align: center;
  margin: 3rem 0;
  font-size: 28pt;
  color: #fff;
`;

export const Table = styled.table`
  width: 390px;
  max-width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  color: #fff;
  font-size: 13pt;
  background-color: #474644;
  border: 1px solid #74726f;
  padding: 0.2rem;
  @media (max-width: 716px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }
`;

export const Tbody = styled.tbody`
  background-color: #474640;

  tr {
    border-bottom: 1px solid #74726f;
  }

  td {
    border-left: 1px solid #74726f;
    border-right: 1px solid #74726f;
  }
`;

export const Td = styled.td`
  text-align: center;
  color: #fafafa;
  white-space: nowrap;
  padding: .6rem;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 716px) {
    ${(props) => props.onlyWeb && 'display: none;'}
  }
  font-size: 15px;
`;

