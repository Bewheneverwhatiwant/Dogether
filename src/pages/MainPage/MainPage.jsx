import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { OutletContext } from '../ForOutlet';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import CustomCenter from '../../Components/Container/CustomCenter';
import StyledImg from '../../Components/Container/StyledImg';
import MyTODO_Banner from './MyTODO_Banner';
import TeamTODO_Banner from './TeamTODO_Banner';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`

const PageContainer = styled(ContainerCenter)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 8vh;
    gap: 20px;
    position: relative;
    background-color: #353535;
`

const Title = styled.h1`
font-size: 1rem;
color: #F0F0F0;
`;

export default function Component() {

  const setBackSetting = useContext(OutletContext);

  setBackSetting(true);

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomRow width='90%' justifyContent='flex-start' paddingLeft='0.1rem' gap='0.1rem'>
          <StyledImg src={'icon_pen.png'} width='2rem' height='2rem' />
          <CustomCenter>
            <Title>Today's My TODO-list</Title>
          </CustomCenter>
        </CustomRow>
        <MyTODO_Banner />
        <CustomRow width='90%' justifyContent='flex-start' paddingLeft='0.1rem' gap='0.1rem'>
          <StyledImg src={'icon_pen.png'} width='2rem' height='2rem' />
          <CustomCenter>
            <Title>My Team's TODO-list</Title>
          </CustomCenter>
        </CustomRow>
        <TeamTODO_Banner />
      </PageContainer>
    </ContainerCenter>
  );
};