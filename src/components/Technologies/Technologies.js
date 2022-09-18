import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle, TagList, Tag } from './TechnologiesStyles';
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
              <TagList>
                {t.tags.map((t, i) => {
                  return <Tag key={t + i}>{t}</Tag>;
                })}
              </TagList>
            </ListContainer>
          </ListItem>
        )

      })}
      
    </List>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;
