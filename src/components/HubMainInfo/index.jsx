import * as S from "./style"
import { Roboto } from 'next/font/google';
const robotoScript = Roboto({ subsets: ['latin'], weight: ["100","300","400", "500", "700"], display: 'swap'});

const  HubMainInfo= ({data}) => {
    const iconFontSize = 30

    
    return (  
        <>
            <S.Container style={robotoScript.style}>
                <S.IconWrapper>
                    <S.FirstIcon/>
                    <S.SecondeIcon/>
                    <S.ThirdIcon/>
                </S.IconWrapper>
                <S.Info>{data.info}</S.Info>
                <S.Description>{data.description}</S.Description>
            </S.Container>
        </>
    );
}
 
export default HubMainInfo;