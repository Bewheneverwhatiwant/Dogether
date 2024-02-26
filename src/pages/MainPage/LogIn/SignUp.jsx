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
width: ${props => props.width || '6rem'};
padding: 0.5rem;
`;

const Id = styled.input`
display: flex;
border: 1px solid #85E176;
background-color: transparent;
border-radius: 20px;
width: ${props => props.width || '16rem'};
height: 2rem;
padding: 0.3rem;

&::placeholder {
  color: #D9D9D9;
}

&:active {
  outline: none;  // 클릭 시 기본적으로 적용되는 아웃라인 제거
}
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

          <CustomColumn gap='15px' width='100%' alignItems='center'>
            <CustomFont color='white' font='1.5rem'>we DO-to-gether.</CustomFont>
            <CustomFont color='white' >welcome!</CustomFont>
          </CustomColumn>

          <CustomColumn gap='10px' width='100%' alignItems='center'>
            <Id placeholder='사용하실 아이디를 입력하세요.' />
            <CustomRow width='16rem' justifyContent='flex-start'>
              <LogInButton width='8rem'>
                <CustomFont color='#353535'>아이디 중복 검사</CustomFont>
              </LogInButton>
            </CustomRow>
            <Id placeholder='사용하실 비밀번호를 입력하세요.' />
            <Id placeholder='사용하실 비밀번호를 한번 더 입력하세요.' />

            <LogInButton>
              <CustomFont color='#353535'>SIGN UP</CustomFont>
            </LogInButton>

          </CustomColumn>

        </CustomColumn>

      </PageContainer>
    </ContainerCenter>
  );
};