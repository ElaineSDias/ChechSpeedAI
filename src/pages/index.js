import React from 'react';
import * as S from './styles'
import Navbar from '../components/navbar'
import Initial from './sections/initial';
import Solutions from './sections/solutions';
import Customers from './sections/customers';
import Price from './sections/price';
import Contact from './sections/contact';
const HomePage = () => {
    return (
    
            <S.Container>
                <Navbar />
                <Initial/>
                <Solutions/>
                <Customers/>
                <Price/>
                <Contact/>
            </S.Container>

    )
}

export default HomePage