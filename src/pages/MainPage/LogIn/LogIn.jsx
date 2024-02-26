import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../../../Components/Container/StyledImg';
import { useContext } from 'react';
import { OutletContext } from '../../ForOutlet';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomFont from '../../../Components/Container/CustomFont';

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
    justify-content: center;
    gap: 10px;
    position: relative;
    background-color: #353535;
`

const LogInButton = styled.button`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #85E176;
border-radius: 20px;
border: none;
width: 6rem;
padding: 0.5rem;
`;

const Id = styled.input`
display: flex;
border: 1px solid #85E176;
background-color: transparent;
border-radius: 20px;
width: 15rem;
height: 2rem;
padding: 0.3rem;

&::placeholder {
  color: #D9D9D9;
}

&:active {
  outline: none;  // 클릭 시 기본적으로 적용되는 아웃라인 제거
}
`;

const Find = styled.button`
width: 6rem;
border: none;
background-color: transparent;
color: #85E176;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: underline;
`;


export default function Component() {

  const navigate = useNavigate();

  const SignUp = () => {
    navigate('/signup');
  }

  const setBackSetting = useContext(OutletContext);

  setBackSetting(false);

  return (
    <ContainerCenter>
      <PageContainer>

        <CustomColumn gap='5rem' width='100%' alignItems='center'>

          <CustomRow gap='10px' width='100%' alignItems='center'>
            <CustomFont color='white' font='1.5rem'>we DO-to-gether.</CustomFont>
          </CustomRow>

          <CustomColumn gap='10px' width='100%' alignItems='center'>
            <Id placeholder='아이디를 입력하세요.' />
            <Id placeholder='비밀번호를 입력하세요.' />

            <CustomColumn gap='30px' width='100%' alignItems='center'>
              <CustomRow width='100%' gap='10px'>
                <Find>
                  <CustomFont color='#85E176;'>아이디 찾기</CustomFont>
                </Find>
                <Find>
                  <CustomFont color='#85E176;'>비밀번호 찾기</CustomFont>
                </Find>
              </CustomRow>

              <LogInButton>
                <CustomFont color='#353535'>Log In</CustomFont>
              </LogInButton>

              <CustomRow gap='10px' width='100%' alignItems='center'>
                <CustomFont color='white'>아직 계정이 없으신가요?</CustomFont>
                <LogInButton onClick={SignUp}>
                  <CustomFont color='#353535'>SIGN UP</CustomFont>
                </LogInButton>
              </CustomRow>
            </CustomColumn>
          </CustomColumn>

        </CustomColumn>

      </PageContainer>
    </ContainerCenter>
  );
};