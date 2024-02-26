import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../../../Components/Container/StyledImg';
import { useContext } from 'react';
import { OutletContext } from '../../ForOutlet';

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
    margin: 30px;
    gap: 10px;
    position: relative;
`

// 기본 버튼 디자인
const BasicButton = styled.button`
width: ${props => props.width || '20%'};
height: ${props => props.height || '3vh'};
border: none;
background-color: orange;
border-radius: 10px;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Find = styled.button`
width: 30%;
border: none;
background-color: transparent;
color: #FFCE86;
font-family: 'RIDIBatang';
font-size: 12px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: underline;
`;

const LogIn = styled.input`
border: 1px solid orange;
border-radius: 20px;

display:flex;
flex-direction: row;
align-items: center;
justify-content: center;

width: 80%;
height: 5vh;
padding-left: 10px;

&::placeholder {
  color: #FFCE86;
  font-family: 'RIDIBatang';
}
`;

const Detail = styled.a`
color: #949494;
font-family: 'RIDIBatang';
font-size: 10px;
`;

const Row = styled.div`
width: 100%;
align-items: center;
justify-content: center;
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap || '30px'};
`;

const Column = styled.div`
width: 100%;
align-items: center;
justify-content: center;
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '30px'};
`;

export default function Component() {

    const navigate = useNavigate();

    const GoMain = () => {
        navigate('/');
    }

    const setBackSetting = useContext(OutletContext);

    setBackSetting(false);

    return (
        <ContainerCenter>
            <PageContainer>
                회원가입 페이지
            </PageContainer>
        </ContainerCenter>
    );
};