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

export const DownloadButton = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 40px'};
  color: #fff;
  background: ${({ alt }) => 1 ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: .75;
  transition: .5s ease;
  &:hover {
    background: ${({ alt }) => 1 ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    // font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '35px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 48px;
    // font-size: 24px;
    margin-bottom: ${({ alt }) => alt ? '0' : '30px'};
    
  }
`

// export const ButtonFront = styled.button`
//   border: none;
//   border-radius: 50px;
//   color: #fff;
//   display: flex;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
//   // opacity: ${({ disabled }) => disabled ? '.5' : '1'};
//   transition: .4s ease;
//   font-size: ${({ alt }) => alt ? '20px' : '24px'};
//   font-weight: 600;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

//   &:hover {
//     background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
//     // opacity: 0;
//   }
//   &:focus {
//     outline: none;
//   }
//   &:active {
//     opacity: 1;
//     box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
//   }

//   &:disabled{
//     background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
//     opacity: 0.5;
//     box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
//   }

//   @media ${(props) => props.theme.breakpoints.md} {
//     font-size: ${({ alt }) => alt ? '20px' : '16px'};
//       }

//   @media ${(props) => props.theme.breakpoints.sm} {
//     font-size: 14px;
//   }
// `

