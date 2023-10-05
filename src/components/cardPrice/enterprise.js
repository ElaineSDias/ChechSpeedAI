import React from "react";
import * as S from "./styles"
import Button from "../button";


const Enterprise = () => {
    return (
        <S.Container>
            <S.Title>
                Enterprise
            </S.Title>
            <S.SubTitle>
                Preços especiais para grandes volumes.

            </S.SubTitle>
            <S.SubTitle>
                Prioridade no suporte técnico.

            </S.SubTitle>
            <S.SubTitle>
                Gestor de conta dedicado.

            </S.SubTitle>
            <S.TextValue>
                A combinar
            </S.TextValue>
            <S.contentButton>

                <Button title="Contato" />
            </S.contentButton>
        </S.Container >
    )
}

export default Enterprise