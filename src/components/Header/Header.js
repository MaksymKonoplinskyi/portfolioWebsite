import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Li } from './HeaderStyles';
// import { styles } from './Header.module.css'

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="#сontacts">
          <NavLink>Contacts</NavLink>
        </Link>
      </li>

    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/MaksymKonoplinskyi">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/konoplinskyi/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
