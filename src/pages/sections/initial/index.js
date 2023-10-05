import React from 'react';
import * as S from './styles';
import Button from '../../../components/button';

const Initial = () => {
    return (

        <S.ContainerBanner id='initial'>
            <S.ContentText>

                <S.Title>
                    Converta fala em textos
                </S.Title>
                <S.Text>
                    O <span className='text'>CheckSpeech AI</span> é um conjunto de APIs de conversão de fala em textos,
                    bem como a interpretação do sentimento dominante nos dizeres.
                </S.Text>
                <Button title='Saiba mais'/>
            </S.ContentText>
        </S.ContainerBanner>

    )
}

export default Initial