import styled from 'styled-components'


export const Container = styled.div`
 width: 380px;
 height: 500px;
 background-color: rgba( 0, 0, 0, 0.9 );
 border: 3px solid rgba( 255, 255, 255, 0.4 );
 border-radius: 10%;
 box-shadow: 5px 6px 6px rgba( 255, 255, 255, 0.4 );
 padding: 20px;

`
export const Title = styled.h2`
font-size: 30px;

`
export const SubTitle = styled.p`
font-size: 20px;
margin:0;
text-align: start;
margin-bottom:20px
`

export const Text = styled.p`
font-size: 18px;
color: #848484;
margin:0;


.text-mim{
    font-weight: 600;
}
`
export const TextValue = styled.p`
 font-size:35px;
 font-weight: 700;
 margin: 0;
 background: -webkit-linear-gradient(#7401DF, #58D3F7);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 .value{
    font-size: 25px;
    font-weight: 400;
 }
`
export const TextP = styled.p`
 font-size:18px;
 margin: 0;

`
export const contentButton =styled.div`
margin-top: 50px;
`