import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: start;
    // margin-right: -50px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;

    // margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    // margin: 0 auto;
  }
`;
