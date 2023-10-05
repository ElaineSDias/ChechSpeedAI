import styled from "styled-components";

export const Button = styled.button`
width: 200px;
height: 50px;
background-image: linear-gradient(101deg,#7401DF, #58D3F7);
border: none;
border-radius: 10px;
color: rgb(0,0,0);
font-size: 22px;
font-weight: 600;
letter-spacing: 1px; 
box-shadow: 0px 5px 8px rgba(255,255,255,0.5);
cursor: pointer;
transition: all 0.5s ease-out;
&:hover{
  background-image: linear-gradient(101deg,#58D3F7 , #7401DF);
  font-size: 24px;
  width: 220px
}

`