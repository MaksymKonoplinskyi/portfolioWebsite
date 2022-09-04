import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
// import CV from '../../assets/cv.pdf';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm <br />
          Maksym Konoplinskyi
        </SectionTitle>
        <SectionText>
        Fullstack Developer
        </SectionText>
        <Button onClick={props.handleClick}><a href='https://github.com/MaksymKonoplinskyi/portfolioWebsite/raw/master/public/cv.pdf' download>Download CV</a></Button>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;