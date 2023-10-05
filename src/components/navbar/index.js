import React, { useState } from "react";
import Logo from "../logo";
import * as S from "./styles";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer } from "@mui/material";


const Menu = (props) => {
    const listMenu = [
  
        { href: "#solutions", name: "Soluções" },
        { href: "#custumers", name: "Clientes" },
        { href: "#price", name: "preços" },
        { href: "#contact", name: "Contato" }
    ];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const list = (
        <Box sx={{ width: 250, height: 500, backgroundColor: '#ffffff' }}>
            <h1>teste</h1>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;


    const menu = (

        <S.Nav>
            <S.List>
                {listMenu.map((item, index) => (
                    <li><S.Link href={item.href}>{item.name}</S.Link></li>

                ))}
            </S.List>
        </S.Nav>

    )

    return (
        <S.Menu>
            <S.ContainerLogo>
                <Logo />

            </S.ContainerLogo>
            <S.ContainerMenu
            >

                <S.ContentLinks>
                    {menu}
                </S.ContentLinks>

                <S.ContentDrawer >
                    <Button onClick={handleDrawerToggle}><MenuIcon /></Button>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}

                    >
                        {list}
                    </Drawer>


                </S.ContentDrawer>
            </S.ContainerMenu
            >
        </S.Menu>
    )
}

export default Menu