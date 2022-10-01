import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
width: 100%;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  // padding: 2rem;
  padding-bottom: 0;
}
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.9);
  text-align: center;
  width: 100%;// 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover {
    box-shadow: 3px 3px 20px rgba(148, 93, 214, 0.9);
    // border: 1px solid #fff;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const SubTitleContent = styled.h3`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 1.5rem;
  color: #9cc9e3;
  letter-spacing: 2px;
  font-size: 2.2rem
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding-top: 20px;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 3rem;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 2rem 4rem 2rem;

`;

export const ExternalLinks = styled.a`
color:#fffffe;
font-size: 1.6rem;
padding:1rem 0.8rem;
background: #1C5E8A;
border-radius: 15px;
transition: 0.5s;
width: 48%;
text-align: center;
// align-self: auto;
// align-self: center;
&:hover{
  background: #2E86CD;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 1rem 1rem;
margin: 1rem 2rem;
border-radius 15px;
background: #19202D;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
padding:0.1rem 0.5rem;
`