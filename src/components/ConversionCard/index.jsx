import * as S from './style'
import { Roboto } from 'next/font/google';
const robotoScript = Roboto({ subsets: ['latin'], weight: ["300","400", "500", "700"], display: 'swap'});


const ConversionCard = ({data}) => {
    return (  
        <>
            <S.Container style={robotoScript.style}>
                <S.Title>{data.title}</S.Title>
                <S.Text>{data.text}</S.Text>
                <S.Button value="Try it" type="button">Try it</S.Button>
            </S.Container>
        </>
    );
}
 
export default ConversionCard;