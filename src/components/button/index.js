
import React from "react";
import * as S from './styles';

const Button = (props)=>{
    const {
        href,
        title
    } = props
return(
    <S.Button href={href}>{title}</S.Button>

)
}

export default Button