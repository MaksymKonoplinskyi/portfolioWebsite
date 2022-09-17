import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TagList, Tag } from './TechnologiesStyles';
import { technologies } from '../../constants/constants';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My current stack of technologies is HTML5, CSS3, SASS, JavaScript, React, Redux, Node JS, Express, Sequelize, MongoDB. Learning Solidity and want to progress in this field further on.
    </SectionText>
    <List>
      {technologies.map((t, i) => {
        return (
          <ListItem>
            <ListContainer>
              <ListTitle>{t.title}</ListTitle>
              {/* <ListParagraph>
                Experiece with <br />
              </ListParagraph> */}
              <TagList>
                {t.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </ListContainer>
          </ListItem>
        )

      })}
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML5 <br />
            CSS3 <br />
            SASS <br />
            Java Script <br />
            React <br />
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node JS, <br />Express, <br />Sequelize, <br />MongoDB, <br />Solidity
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
