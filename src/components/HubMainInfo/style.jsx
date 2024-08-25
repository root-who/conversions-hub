import styled, {keyframes, css} from 'styled-components'
import { GoPackage } from "react-icons/go";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    row-gap: 20px;
`

const first = keyframes`
    0% {
        transform: translateY(0) translateX(0);
    }
    33% {
        transform: translateY(-45px) translateX(40px);
    }
    66% {
        transform: translateY(0px) translateX(80px);
    }
    100% {
        transform: translateY(0) translateX(0);
    }
`
const second = keyframes`
    0% {
        transform: translateY(-45px) translateX(0);
    }
    33% {
        transform: translateY(0px) translateX(40px);
    }
    66% {
        transform: translateY(0) translateX(-40px);
    }
    100% {
        transform: translateY(-45px) translateX(0);
    }
`
const third = keyframes`
    0% {
        transform: translateY(0) translateX(0);
    }
    33% {
        transform: translateY(0) translateX(-80px);
    }
    66% {
        transform: translateY(-45px) translateX(-40px);
    }
    100% {
        transform: translateY(0) translateX(0);
    }
`

export const FirstIcon = styled(GoPackage)`
    animation: ${first} 2s infinite;
    font-size: 30px;
    color: #0B3D91;
    stroke-width: 1;
`
export const SecondeIcon = styled(GoPackage)`
    animation: ${second} 2s infinite;
    transform: translateY(-45px);
    font-size: 30px;
    color:  #0AFF99;
    stroke-width: 1;
`
export const ThirdIcon = styled(GoPackage)`
    animation: ${third} 2s infinite;
    font-size: 30px;
    color: #111111;
    stroke-width: 1;
`

export const IconWrapper = styled.div`
    display: flex;
    column-gap: 10px;
    justify-content: center;
`

export const Info = styled.h1`
    text-align: center;
    font-size: 26px;
    font-weight: 500;
`

export const Description = styled.span`
    text-align: justify;
    width: 400px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
    color: #9a9a9a;
`
