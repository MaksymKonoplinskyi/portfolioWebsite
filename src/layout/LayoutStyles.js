import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;
padding: 0px 40px;
// margin: 50px;
// box-sizing: border-box;

@media ${(props) => props.theme.breakpoints.md} {
    padding: 0px 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0px 10px;
  }
`;
