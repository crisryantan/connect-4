import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const ProjectTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FooterWrapper = styled.div`
  text-align: center;
`;

export const CurrentColor = styled.div`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  margin: 10px;
  width: 40px;
  background-color: ${props =>
    props.cellColor ? `${props.cellColor} !important` : '#eeeeee'};
`;

export const Button = styled.button`
  border: 1px solid;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 10px;

  :focus {
    outline: 0;
  }
`;
