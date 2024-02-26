import styled from 'styled-components';

const StyledImg = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    margin-top: ${props => props.marginTop || 0};
    margin-bottom: ${props => props.marginBottom || 0};
    margin-left: ${props => props.marginLeft || 0};
    margin-right: ${props => props.marginRight || 0};
    border-radius: ${props => props.borderRadius || '0'};
`;

export default StyledImg;
