import React, { useEffect, useState } from "react";
import * as S from './styles';
import Input from "../../../components/input";
import Button from "../../../components/button";


const Contact = () => {

 
    return (
        <S.Container id="contact">
            <S.Title>Contato</S.Title>
            <S.ContentForm>
                <S.ContainerInput>
                    <Input label="NOME" type="text" />
                    <Input label="TELEFONE" type="tel" mask="(99) 9 9999-9999" />
                </S.ContainerInput>
                <S.ContainerInput>
                    <Input label="E-MAIL" type="email" />
                    <Input label="CONFIRMAR E-MAIL" type="email" />
                   </S.ContainerInput>


               <Button title='Enviar'/>
            </S.ContentForm>
        </S.Container>
    )
}
export default Contact