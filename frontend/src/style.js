import styled from "styled-components";

export const Container = styled.div`
    max-width: 742px;
    height: 100%;
    padding: 0 1rem;
`;

export const Title = styled.h1`
    font-size: 56px;
    color: #FF4757;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.6rem;
`;

export const Form = styled.form`
    max-width: 742px;
    height: 118px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
`

export const Input = styled.input`
    width: 100%;
    height: 51px;
    padding: 13px 15px;
    color: #B8B8B8;
    font-size: 21px;
    font-weight: bold;
    background-color: #74726F;
    border-radius: 5px;
`

export const ButtonCreate = styled.button`
    width: 100%;
    height: 51px;
    border-radius: 5px;
    background-color: #FF4757;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    grid-area: E;
    &:hover {
        transition: all .2s ease-in-out;
        background-color: #E9414F;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
    border-top: 4px solid #474644;
    margin-top: 18rem;
    padding-top: 1rem;
`;