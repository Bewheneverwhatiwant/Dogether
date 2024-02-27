import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import CustomRow from '../../Components/Container/CustomRow';
import CustomCenter from '../../Components/Container/CustomCenter';
import StyledImg from '../../Components/Container/StyledImg';
import MyTODO_Banner from './MyTODO_Banner';
import TeamTODO_Banner from './TeamTODO_Banner';
import { OutletContext } from '../ForOutlet';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 20px;
  position: relative;
  background-color: #353535;
`;

const Title = styled.h1`
  font-size: 1rem;
  color: #F0F0F0;
`;

const TeamButton = styled.button`
background-color: transparent;
border: 1px solid #85E176;
color:  #85E176;
border-radius: 20px;
align-items: center;
justify-content: center;
padding: 0.2rem;
width: 8rem;
`;

const Component = () => {
  const setBackSettingValue = useContext(OutletContext);

  setBackSettingValue(true);

  // banners에서 소속된 팀 별로 배너 전부 출력 가능 !!
  // 본인 계정에는 이름 뒤에 '(나)'를 붙이고, 방장(팀 생성자)에게 표식을 다는 작업 필요 -> API 구축 후 할 일

  const banners = [
    {
      teamName: '코노모',
      reward: '주창 회식 쏘기',
      targetDate: moment('2024-03-03T24:00:00'),
      members: [
        { name: '이나영', logText: 'TODO-list 기록 보기', totalTodos: 20, doneArray: [true, true, false, false, false, false, false], isBoss: false, isMe: true },
        { name: '이수혁', logText: 'TODO-list 기록 보기', totalTodos: 26, doneArray: [true, true, true, true, false, false, false], isBoss: true, isMe: false },
        { name: '김재우', logText: 'TODO-list 기록 보기', totalTodos: 23, doneArray: [true, true, true, false, false, false, false], isBoss: false, isMe: false },
        { name: '정재웅', logText: 'TODO-list 기록 보기', totalTodos: 19, doneArray: [true, true, false, false, false, false, false], isBoss: false, isMe: false },
        { name: '임승민', logText: 'TODO-list 기록 보기', totalTodos: 15, doneArray: [true, false, false, false, false, false, false], isBoss: false, isMe: false },
      ],
    },

    {
      teamName: '우리 가족 !!',
      reward: '용돈 10만원',
      targetDate: moment('2024-03-06T24:00:00'),
      members: [
        { name: '이나영', logText: 'TODO-list 기록 보기', totalTodos: 15, doneArray: [true, true, true, true, true, false, false, false, false, false], isBoss: true, isMe: true },
        { name: '이용수', logText: 'TODO-list 기록 보기', totalTodos: 8, doneArray: [true, true, true, true, false, false, false, false, false, false,], isBoss: false, isMe: false },
        { name: '이솔민', logText: 'TODO-list 기록 보기', totalTodos: 5, doneArray: [true, true, false, false, false, false, false, false, false, false,], isBoss: false, isMe: false },
      ]
    }
  ];

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

        <CustomRow width='90%' justifyContent='space-between'>
          <TeamButton>Team 생성하기</TeamButton>
          <TeamButton>Team 입장하기</TeamButton>
        </CustomRow>

        {banners.map((banner, index) => (
          <TeamTODO_Banner key={index} {...banner} />
        ))}

      </PageContainer>
    </ContainerCenter>
  );
};

export default Component;
