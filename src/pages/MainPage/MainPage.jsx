import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { OutletContext } from '../ForOutlet';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import StyledImg from '../../Components/Container/StyledImg';
import MyTODO_Banner from './MyTODO_Banner';

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
        <CustomRow width='90%' justifyContent='flex-start' paddingLeft='10px'>
          <Title>Today's My TODO-list</Title>
        </CustomRow>
        <MyTODO_Banner />
      </PageContainer>
    </ContainerCenter>
  );
};