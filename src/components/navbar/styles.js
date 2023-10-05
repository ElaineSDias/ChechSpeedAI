import styled from "styled-components";


export const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
heigth: 100px;
padding: 20px 0 20px 0;
position: sticky;
top: 0;
background-color: rgba( 0, 0, 0, 0.4 );
z-index: 2;
box-shadow: 0px 10px 10px rgba( 0, 0, 0, 0.4 );

`
export const ContainerLogo = styled.div`
width: 30%
display: flex;
align-items:center;
justify-content: center;
padding-left: 20px
`
export const ContainerMenu = styled.div`
width: 50%
`
export const ContentDrawer = styled.div`
display: none;

@media(max-width: 768px){
    display: flex
}

`
export const ContentLinks = styled.div`
display: flex;
align-items:center;
justify-content: center;
width: 100%;

@media(max-width: 768px){
    display: none
}
`
export const Nav = styled.nav`
width: 60%;

`
export const List = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style-type: none;

`
export const Link = styled.a`
font-size: 24px;
font-weight: 500;
color:#A4A4A4;
text-decoration: none;

&:hover {
color: #ffffff
}


`


