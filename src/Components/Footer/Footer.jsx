import { styled } from 'styled-components';

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: 10vh;
background-color: #575757;
color: white;
gap: 10px;
`;

const Title = styled.h1`
font-size: 15px;
font-family: 'RIDIBatang';
color: white;
`;

const Detail = styled.a`
font-size: 10px;
font-family: 'RIDIBatang';
color: white;
`;

export default function Component() {
    return (
        <FooterContainer>
            <Detail>Dogether: Do-to-gether</Detail>
        </FooterContainer>
    );
};