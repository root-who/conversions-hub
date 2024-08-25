import * as S from "./style"
import { TbSquareLetterJFilled } from "react-icons/tb";
import { TbSquareLetterPFilled } from "react-icons/tb";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";


const Header = () => {

    const [darkTheme, setdarkTheme] = useState(false)
    const simpleIconStyle = {
        fontSize:"30px"
    }
    const buttonThemeStyle = {
        fontSize:"22px",
        color:"#848484"

    }

    const themeIconRender = () => {
        if(darkTheme){
            return <LuMoon style={buttonThemeStyle}/>
        }
        return <LuSun style={buttonThemeStyle}/>
    }

    return (  
        <>
            <S.Container>
                <S.Left>
                    <S.LinkContainer href="/">
                        <TbSquareLetterJFilled style={simpleIconStyle}/>
                        <TbSquareLetterPFilled style={simpleIconStyle}/>
                    </S.LinkContainer>
                </S.Left>
                <S.Right>
                    <S.ButtonTheme onClick={()=>setdarkTheme(!darkTheme)}>
                        {themeIconRender()}
                    </S.ButtonTheme>
                    <S.LinkContainer href="https://github.com/root-who">
                        <FaGithub style={simpleIconStyle}/>
                    </S.LinkContainer>
                </S.Right>
            </S.Container>
        </>
    );
}
 
export default Header;