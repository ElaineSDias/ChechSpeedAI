import React from "react";
import * as S from "./styles"


const Beginner = () => {
    return (
        <S.Container>
            <S.Title>
                Beginner
            </S.Title>
            <S.SubTitle>
                Transcrição de Áudio Assíncrono
                <S.Text>
                    <span className="text-mim">120 minutos</span>  (R$0,20 / minuto excedente)
                </S.Text>
            </S.SubTitle>
            <S.SubTitle>
                Transcrição de Áudio em tempo real
                <S.Text>
                    <span className="text-mim">90 minutos</span>  (R$0,40 / minuto excedente)
                </S.Text>
            </S.SubTitle>
            <S.SubTitle>
                Identificação de Idiomas em áudios
                <S.Text>
                    <span className="text-mim">200 minutos</span>  (R$0,05 / minuto excedente)
                </S.Text>
            </S.SubTitle>
            <S.SubTitle>
                Análise de sentimento a partir do áudio
                <S.Text>
                    <span className="text-mim">120 minutos</span>  (R$0,40 / minuto excedente)
                </S.Text>
            </S.SubTitle>
            <S.TextValue>
                R$29,00<span className="value">/mês</span>
            </S.TextValue>
            <S.TextP >ou</S.TextP>
            <S.TextValue>
                R$328,00<span className="value">/ano</span>
            </S.TextValue>

        </S.Container >
    )
}

export default Beginner