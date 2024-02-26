import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { OutletContext } from '../ForOutlet';

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
    gap: 10px;
    position: relative;
    background-color: #353535;
`

export default function Component() {

  const setBackSetting = useContext(OutletContext);

  setBackSetting(true);

  return (
    <ContainerCenter>
      <PageContainer>
        메인페이지
      </PageContainer>
    </ContainerCenter>
  );
};