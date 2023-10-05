import React from "react";
import * as S from './styles';
import InputMask from "react-input-mask";
const Input = props => {
    const {
        placeholder,
        label,
        value,
        onChange,
        mask,
        type
    } = props

    return (
        <S.Content>
            <S.Title>{label}</S.Title>
            <InputMask type={type} placeholder={placeholder} value={value} onChange={onChange} className="input" mask={mask}/>
        </S.Content>

    )
}
export default Input