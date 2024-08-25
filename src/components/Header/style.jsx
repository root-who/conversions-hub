import Link from "next/link"
import styled from "styled-components"

export const Container  = styled.header`
    display: flex;
    justify-content: space-between;
    padding:20px 30px;
    align-items: center;
    
`

export const LinkContainer = styled(Link)`
    display: flex;
    text-decoration: none; 
    color: inherit;
    align-items: center;
`

export const Left = styled.div`
    display: flex;
    cursor: pointer;
    
`

export const Right = styled.div`
    display: flex;
    column-gap: 15px;
    align-items: center;
`

export const ButtonTheme = styled.button`
    display: flex;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    background-color: inherit;
    padding: 5px;
    cursor: pointer;
`
