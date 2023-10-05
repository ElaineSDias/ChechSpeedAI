import styled from "styled-components"


export const ContainerCard = styled.div`
padding: 3px;
background: linear-gradient(#7401DF 0%, #58D3F7 100%);
width: 350px;
height: 400px;
border-radius: 15px;
margin: 0 20px;
transition: all 0.5s ease-out;
&:hover{
    background: linear-gradient(#58D3F7 0%, #7401DF 100%);
    height: 410px;
}
`
export const Card =styled.div`
display: flex;
flex-direction: column;
height: 100%;
padding: 0 12px;
-webkit-box-align: center;
align-items: center;
border-radius: 15px;
background: rgba(0, 0, 0);
text-align: center;
`
export const TitleCard =styled.div`
font-size: 1.5rem;
font-weight: 600;
text-shadow: 0.1em 0.1em 0.2em rgba( 255, 255, 255, 0.4 );
margin-bottom: 20px;
padding-top:10px;
`
export const TextCard =styled.div`
font-size: 1.2rem;

`