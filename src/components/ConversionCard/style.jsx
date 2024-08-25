import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #DCDCDC;
    border-radius: 10px; 
    max-width: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    row-gap: 20px;
    cursor: pointer;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`

export const Title = styled.h2`
    font-size:20px;
    font-weight: 500;
`

export const Text = styled.span`
    font-size:16;
    line-height: 1.5; 
    color: #9a9a9a;
    font-weight: 200;
`

export const Button = styled.button`
    border: 1px solid #DCDCDC;
    border-radius: 5px; 
    padding: 10px;
    width: fit-content;
    padding: 8px 15px;
    background-color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
    }
`