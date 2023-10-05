import styled from "styled-components";
import Banner from "../../../assests/imagens/Vector_2648.jpg"

export const ContainerBanner = styled.div`
background:url(${Banner});
width: 100%;
height: 800px;
background-size: cover;
background-repeat: no-repeat;
margin-top:100px;
box-shadow: 0px 10px 10px rgba( 255, 255, 255, 0.4 );
`

export const ContentText = styled.div`
position: absolute;
top: 200px;
right: 50px;
width: 40%;
`
export const Title = styled.h1 `
font-size: 5rem;
text-shadow: 0.1em 0.1em 0.2em rgba( 255, 255, 255, 0.4 );
`
export const Text = styled.h2 `
font-size: 2rem;
color: #848484;
font-weight: 400;

.text{
    background: -webkit-linear-gradient(#7401DF, #58D3F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
`