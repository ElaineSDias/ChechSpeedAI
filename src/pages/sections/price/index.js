import React from "react";
import * as S from './styles'
import Beginner from "../../../components/cardPrice/beginner";
import Business from "../../../components/cardPrice/business";
import Enterprise from "../../../components/cardPrice/enterprise";
import { Stepper, Step, StepButton } from '@mui/material';

const steps = [
    {
        id: 0,
        label: 'Beginner',
        description: <Beginner />,
    },
    {
        id: 1,
        label: 'Business',
        description:
            <Business />
    },
    {
        id: 2,
        label: 'Enterprise',
        description: <Enterprise />,
    },
];
export const Price = () => {

    const [activeStep, setActiveStep] = React.useState(0);




    const handleStep = (step) => () => {
        setActiveStep(step);
    };



    return (
        <S.Container id="price">
            <S.ContentText>
                <S.Title>
                    Preços
                </S.Title>
            </S.ContentText>
            <S.ContentPlans>
                <S.ContentCardText>

                    <S.Text>
                        Conheça nossos planos e preços
                    </S.Text>
                    <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (

                          
                                <S.ContentStep  onClick={handleStep(index)}>
                                    <S.step>
                                        {index + 1}
                                    </S.step>
                                    <S.Text>{label.label}</S.Text>

                                </S.ContentStep>
                        

                        ))}
                    </Stepper>


                </S.ContentCardText>
                <S.ContentCard>
                    {steps.map((label, index) => (
                        <>
                            {activeStep === index ? (
                                <div>

                                    {label.description}
                                </div>
                            ) : (
                                null
                            )}
                        </>
                    ))}
                </S.ContentCard>
            </S.ContentPlans>
        </S.Container>
    )
}
export default Price