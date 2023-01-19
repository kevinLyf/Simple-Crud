import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 60vh;
`;

export const Title = styled.h3`
  text-align: center;
  margin: 3rem 0;
  font-size: 28pt;
  color: #fff;
`;

export const Form = styled.form`
  width: 650px;
  max-width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 0.4rem 0;
`;

export const Label = styled.label`
  font-size: 14pt;
  color: #fafafa;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.6rem;
  border-radius: 5px;
  border: none;
  padding: 0rem 1rem;
  color: #b8b8b8;
  font-weight: bold;
  font-size: 12pt;
  background-color: #74726f;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  height: 2.8rem;
  color: #fff;
  font-size: 16pt;
  font-weight: bold;
  background-color: #ff4757;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    transition: all .2s ease;
    background-color: #E0404D;
  }
`;
