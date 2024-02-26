import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomRow from '../../Components/Container/CustomRow';
import CustomColumn from '../../Components/Container/CustomColumn';
import StyledImg from '../../Components/Container/StyledImg';
import CustomFont from '../../Components/Container/CustomFont';

const Detail = styled.a`
  font-size: ${props => props.font || '0.8rem'};
  color: ${props => props.color || '#F0F0F0'};
`;

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

const Checkbox = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 1px solid white;
  border-radius: 0.2rem;
  position: relative;
  font-size: 1rem;
`;

const StyledCheckbox = styled(Checkbox)`
  &:checked + ${CheckboxLabel}::before {
    content: '✔';
    font-size: 1rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Component() {
    const [isChecked_1, setIsChecked_1] = useState(false);
    const [isChecked_2, setIsChecked_2] = useState(false);

    const [checkedCount, setCheckedCount] = useState(0); //TODO 체크된 개수

    useEffect(() => {
        // 체크된 개수 변경 시에 실행
        setCheckedCount([isChecked_1, isChecked_2].filter(item => item).length);
    }, [isChecked_1, isChecked_2]);

    const handleCheckboxChange = (isChecked, setIsChecked) => {
        const confirmAction = window.confirm('TODO를 수정하시겠습니까?');
        if (confirmAction) {
            setIsChecked(!isChecked);
        }
    };

    return (
        <Banner>
            <CustomRow gap='3px' width='100%' justifyContent='flex-start' paddingLeft='2rem;'>
                <CustomFont fontWeight='bold' font='1rem'>오늘 완료한 TODO: {checkedCount}</CustomFont>
                <StyledImg src={'icon_fire.png'} width='1rem' height='1rem' />
            </CustomRow>

            <CustomColumn gap='10px' width='100%' alignItems='center'>
                <TODO>
                    <CustomRow width='100%' justifyContent='space-between'>
                        <StyledCheckbox type="checkbox" id="check1" checked={isChecked_1} onChange={() => handleCheckboxChange(isChecked_1, setIsChecked_1)} />
                        <CheckboxLabel htmlFor="check1" />
                        <Detail font='1rem'>할 일</Detail>
                    </CustomRow>
                </TODO>
                <TODO>
                    <CustomRow width='100%' justifyContent='space-between'>
                        <StyledCheckbox type="checkbox" id="check2" checked={isChecked_2} onChange={() => handleCheckboxChange(isChecked_2, setIsChecked_2)} />
                        <CheckboxLabel htmlFor="check2" />
                        <Detail font='1rem'>할 일2</Detail>
                    </CustomRow>
                </TODO>

                <CustomRow justifyContent='flex-start' width='100%' paddingLeft='2rem;'>
                    <StyledImg src={'icon_plus.png'} width='0.8rem' height='0.8rem' borderRadius='50px' border='1px solid #F0F0F0' padding='0.2rem' />
                    <Detail color='#49C635'>TODO 추가/수정</Detail>
                </CustomRow>
            </CustomColumn>
        </Banner>
    );
}
