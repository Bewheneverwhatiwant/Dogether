import styled from 'styled-components';

const CustomRow = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  gap: ${props => props.gap || '10px'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
`;

export default CustomRow;