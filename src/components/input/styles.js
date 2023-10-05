import styled from 'styled-components';

export const Content = styled.div`
width: 100%;
display:  flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 20px;
text-align: start;

.input{
    width: 80%;
    height: 50px;
    border-radius: 7px
}
.input::placeholder {
  padding-left: 20px
  }
`

export const Title = styled.h4`
color: #ffffff;
width: 80%;
text-align: flex-start;
line-height: 0.1px
`