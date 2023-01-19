import styled from 'styled-components';

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  width: 100%;
  height: 4rem;
  background-color: #474644;
`;

export const Title = styled.h3`
  font-size: 22pt;
  color: #ff4757;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const Li = styled.li`
  a {
    font-size: 16pt;
    color: #74726f;
    font-weight: bold;
    cursor: pointer;
  }

  a:hover {
    transition: all 0.2s ease;
    color: #bbbbbb;
  }
`;
