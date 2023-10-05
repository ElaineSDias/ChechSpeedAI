import React from "react";
import * as S from "./styles"


const Card = (props) => {
    const {
        title,
        text,
    } = props
    return (
       
            <S.ContainerCard>
                <S.Card>
                    <S.TitleCard>
                        {title}
                    </S.TitleCard>
                    <S.TextCard>

                        {text}
                    </S.TextCard>
                </S.Card>
            </S.ContainerCard>

    )
}

export default Card