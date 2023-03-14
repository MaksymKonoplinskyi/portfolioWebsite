import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import BackgroundAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import { LeftSection, DownloadButton } from './HeroStyles';
// import CV from '../../assets/cv.pdf';

const Hero = (props) => {
  const handleClick = () => {
    const url = "https://github.com/MaksymKonoplinskyi/portfolioWebsite/raw/master/public/CV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", 'CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <Section grid nopadding>
        <LeftSection>
          <SectionTitle main>
            Hello, I'm <br />
            Maksym <br />
            Konoplinskyi
          </SectionTitle>
          <SectionText>
            Fullstack Developer
          </SectionText>
          {/* <Button onClick={props.handleClick}><a href='https://github.com/MaksymKonoplinskyi/portfolioWebsite/raw/master/public/cv.pdf' download>Download CV</a></Button> */}

          <DownloadButton onClick={handleClick}>
            <p>Download CV</p>
            {/* <ButtonFront></ButtonFront> */}
          </DownloadButton>
        </LeftSection>
        <BackgroundAnimation />
      </Section>
    </>
  );
}

export default Hero;