import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import StyledImg from '../../Components/Container/StyledImg';
import CustomFont from '../../Components/Container/CustomFont';
import moment from 'moment';

const BannerContainer = styled.div`
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

const ColoredContainer = styled.div`
  background: ${props => props.background};
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

const Done = styled.div`
  background: ${props => props.isDone ? 'linear-gradient(45deg, #6A69E5, #C15CC1)' : '#863434'};
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Log = styled.div`
  background: transparent;
  color: white;
  font-size: 0.5rem;
  border: 1px solid white;
  border-radius: 2rem;
  padding: 5px;
  width: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// 사용자의 이름, 'TODO-list 기록 보기' 버튼 생성
const MemberRow = ({ name, logText }) => {
    return (
        <CustomRow width='100%' justifyContent='space-between'>
            <CustomRow width='100%' justifyContent='flex-start' gap='0.2rem'>
                <CustomFont font='1rem'>{name}</CustomFont>
            </CustomRow>
            <Log>{logText}</Log>
        </CustomRow>
    );
};

// 사용자 별 열매, TODO-list 개수 반복 출력
const TodoRow = ({ doneArray, totalTodos }) => {
    return (
        <CustomColumn width='100%' justifyContent='flex-start' gap='0.5rem'>
            <CustomRow width='100%' justifyContent='flex-start' gap='0.2rem'>
                {doneArray.map((isDone, index) => (
                    <Done key={index} isDone={isDone} />
                ))}
            </CustomRow>
            <CustomRow width='100%' justifyContent='flex-start' gap='0.2rem'>
                <CustomFont>누적 TODO-list 개수:</CustomFont>
                <CustomFont fontWeight='bold'>{totalTodos}</CustomFont>
                {totalTodos > 0 && <StyledImg src={'icon_fire.png'} width='1rem' height='1rem' />}
            </CustomRow>
        </CustomColumn>
    );
};

// 팀 이름, 리워드, 날짜, 팀원들을 받아서 반복출력하는 배너
const Banner = ({ teamName, reward, targetDate, members }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const now = moment();
        const duration = moment.duration(moment(targetDate).diff(now));
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <BannerContainer>
            <CustomRow justifyContent='flex-start' width='100%'>
                <StyledImg src={'icon_team.png'} width='2rem' height='2rem' borderRadius='50px' />
                <CustomFont color='#353535' fontWeight='bold'>{`Team ${teamName}`}</CustomFont>
            </CustomRow>

            <ColoredContainer background='linear-gradient(45deg, #6A69E5, #C15CC1)'>
                <CustomRow width='100%' justifyContent='flex-start' gap='0.1rem'>
                    <StyledImg src={'icon_crown.png'} width='1rem' height='1rem' />
                    <CustomFont>Reward:</CustomFont>
                </CustomRow>

                <CustomFont fontWeight='bold'>{reward}</CustomFont>

                <CustomRow width='100%' justifyContent='flex-start' gap='0.1rem'>
                    <StyledImg src={'icon_crown.png'} width='1rem' height='1rem' />
                    <CustomFont>Whose:</CustomFont>
                </CustomRow>

                <CustomFont fontWeight='bold'>
                    {`${timeRemaining.days}일 ${timeRemaining.hours}시간 ${timeRemaining.minutes}분 ${timeRemaining.seconds}초 남음`}
                </CustomFont>
            </ColoredContainer>

            <CustomColumn gap='10px' width='100%' alignItems='center'>
                {members.map((member, index) => (
                    <ColoredContainer key={index} background='#49C635'>
                        <MemberRow {...member} />
                        <TodoRow {...member} />
                    </ColoredContainer>
                ))}
            </CustomColumn>
        </BannerContainer>
    );
};

export default Banner;
