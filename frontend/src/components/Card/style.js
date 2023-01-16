import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 224.67px;
  height: 226px;
  border-radius: 5px;
  background-color: #74726f;
  padding: 28px 20px;
`;

export const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;