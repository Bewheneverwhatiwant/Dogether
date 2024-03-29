import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../Container/StyledImg';
import CustomRow from '../Container/CustomRow';

const HeaderContainer = styled.header`
position: fixed;
top: 0;
width: 100%;
z-index: 99;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;

    background-color: #353535;
    color: white;

    // border-bottom: 2px solid transparent;
    // box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    // transition: border-color 0.3s ease;
`;

const HeaderButton = styled.button`
background-color: transparent;
font-size: 10px;
color: white;
text-align: center;
justify-content: center;
border: none;
width: 100px;
`;

export default function Header({ $background }) {

    const navigate = useNavigate();

    const Back = () => {
        navigate('/');
    }

    const SignIn = () => {
        navigate('/login');
    }

    return (
        <>
            {$background ? (
                <HeaderContainer>
                    <CustomRow width='100%' justifyContent='flex-end'>
                        <HeaderButton onClick={SignIn}>LOG IN</HeaderButton>
                    </CustomRow>
                </HeaderContainer>
            ) : (
                <HeaderContainer>
                    <StyledImg src={'icon_logo.png'} width='30px' height='30px' onClick={Back} />
                </HeaderContainer>
            )}
        </>
    );
};