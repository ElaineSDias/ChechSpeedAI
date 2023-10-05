import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
  rotate: 0deg;
}
25% {
  rotate: y 90deg;
  scale: 0.5;
}
50% {
  rotate: 180deg;
}
75% {
  rotate: x 270deg;
  border-radius: 50%;
}
100% {
  rotate: 360deg;
}
`

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5rem;
heigth: 100%;
`
export const ContentText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.h1`
font-size: 6rem;
text-shadow: 0.1em 0.1em 0.2em rgba( 255, 255, 255, 0.4 );
margin-top:6rem
`
export const Text = styled.h2`
font-size: 1.3rem;
font-weight: 400;

`
export const ContentPartners = styled.div`
transition: 0.5s ease-in-out;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top: 100px
`
export const Image = styled.img`
width: 400px;
animation: ${rotate} 20s linear infinite;
filter: grayscale(1);

`
