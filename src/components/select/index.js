import React from 'react';
import * as S from './styles';

const InputSelect = props => {


    const {

        label,
        value,
        onChange,
        options

    } = props

    return (
        <S.Content>
            <S.Title>{label}</S.Title>
              
            <select value={value} onChange={onChange} className='input'>
                <option selected="selected" data-image="https:////upload.wikimedia.org/wikipedia//commons//thumb//9//9a//Flag_of_Afghanistan.svg//23px-Flag_of_Afghanistan.svg.png">Test</option>
            </select>
        </S.Content>
    )
}

export default InputSelect
