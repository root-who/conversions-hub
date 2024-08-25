
import ConversionCard from "../ConversionCard";
import {Container} from "./style"

const  ConversionCardList= ({conversors}) => {
    return (
        <>
        <Container>
        {
            conversors.map((value, key)=>(
                <ConversionCard key={key} data={value}/>
            ))
        }
        </Container>
        </>
    );
}
 
export default ConversionCardList;