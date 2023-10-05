import React from "react";
import * as S from "./styles"


const Business = () => {
    return (
        <S.Container>
        <S.Title>
        Business
        </S.Title>
        <S.SubTitle>
            Transcrição de Áudio Assíncrono
            <S.Text>
                <span className="text-mim">220 minutos</span>  (R$0,15 / minuto excedente)
            </S.Text>
        </S.SubTitle>
        <S.SubTitle>
            Transcrição de Áudio em tempo real
            <S.Text>
                <span className="text-mim">120 minutos</span>  (R$0,40 / minuto excedente)
            </S.Text>
        </S.SubTitle>
        <S.SubTitle>
            Identificação de Idiomas em áudios
            <S.Text>
                <span className="text-mim">500 minutos</span>  (R$0,03 / minuto excedente)
            </S.Text>
        </S.SubTitle>
        <S.SubTitle>
            Análise de sentimento a partir do áudio
            <S.Text>
                <span className="text-mim">200 minutos</span>  (R$0,35 / minuto excedente)
            </S.Text>
        </S.SubTitle>
        <S.TextValue>
                R$44,00<span className="value">/mês</span>
            </S.TextValue>
            <S.TextP >ou</S.TextP>
            <S.TextValue>
                R$499,00<span className="value">/ano</span>
            </S.TextValue>
    </S.Container >
    )
}

export default Business