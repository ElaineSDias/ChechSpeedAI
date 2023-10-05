import React from 'react';
import * as S from './styles';
import Card from '../../../components/card';
import { Listsolutions } from '../../../utils/listSolutions';
import Button from "../../../components/button"
const Solutions = () => {
    return (
        <S.Container id="solutions">
            <S.ContentText>
                <S.Title>
                    Soluções
                </S.Title>
                <S.Text>
                    Treinada em mais de 500.000 horas de áudios, transcritos por humanos de uma ampla variedade de idades, nacionalidades,
                    sotaques e níveis de instruções A API é comercializada no modelo SAAS (software as a service).
                </S.Text>
            </S.ContentText>
            <Button title="Comece agora"/>
            <S.ContentCards>
              {Listsolutions.map((item, index)=>(
                <Card title={item.title} text={item.text}/>
              ))}
            </S.ContentCards>
             
        </S.Container>
    )
}

export default Solutions