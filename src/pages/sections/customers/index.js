import React from "react";
import * as S from "./styles";
import { listPartners } from "../../../utils/listPartners";

const Customers = ()=>{
    return(
        <S.Container id="custumers">
            <S.ContentText>
                <S.Title>Clientes</S.Title>
                <S.Text>Conheça alguns de nossos parceiros.</S.Text>
            </S.ContentText>
            <S.ContentPartners>
               {listPartners.map((item, index)=>(
                <S.Image src={item.source} key={index} alt="logo parceiros"/>
               ))}
            </S.ContentPartners>
        </S.Container>
    )
}
export default Customers