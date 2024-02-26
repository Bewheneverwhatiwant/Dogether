import React, { useState } from 'react';
import styled from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import StyledImg from '../../Components/Container/StyledImg';
import CustomFont from '../../Components/Container/CustomFont';

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  gap: 15px;
  border-radius: 20px;
  min-height: 20vh;
  width: 90%;
  background-color: #85E176;
`;

const TODO = styled.div`
  background-color: #49C635;
  color: white;
  width: 90%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const Reward = styled.div`
  background: linear-gradient(45deg, #6A69E5, #C15CC1);
  color: white;
  width: 90%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export default function Component() {

    return (
        <Banner>
            <CustomRow justifyContent='flex-start' width='100%'>
                <StyledImg src={'icon_team.png'} width='2rem' height='2rem' borderRadius='50px' />
                <CustomFont color='#353535' fontWeight='bold'>Team 코노모</CustomFont>
            </CustomRow>
            <CustomRow width='100%' justifyContent='flex-start' gap='0.1rem'>
                <CustomFont>D-DAY 까지</CustomFont>
            </CustomRow>
            <Reward>
                <CustomRow width='100%' justifyContent='flex-start' gap='0.1rem'>
                    <StyledImg src={'icon_crown.png'} width='1rem' height='1rem' />
                    <CustomFont>Reward:</CustomFont>
                </CustomRow>
                <CustomFont fontWeight='bold'>주창 회식 쏘기</CustomFont>
            </Reward>
            <CustomColumn gap='10px' width='100%' alignItems='center'>
                <TODO>
                    <CustomRow width='100%' justifyContent='flex-start'>
                        <CustomFont font='1rem'>이수혁</CustomFont>
                    </CustomRow>
                </TODO>
                <TODO>
                    <CustomRow width='100%' justifyContent='flex-start'>
                        <CustomFont font='1rem'>김재우</CustomFont>
                    </CustomRow>
                </TODO>
                <TODO>
                    <CustomRow width='100%' justifyContent='flex-start'>
                        <CustomFont font='1rem'>정재웅</CustomFont>
                    </CustomRow>
                </TODO>
                <TODO>
                    <CustomRow width='100%' justifyContent='flex-start'>
                        <CustomFont font='1rem'>임승민</CustomFont>
                    </CustomRow>
                </TODO>
            </CustomColumn>
        </Banner>
    );
}
