import React from 'react';
import styled from 'styled-components';
import LineBreak from '../assets/svgs/pattern-divider-desktop.svg';

const AdviceContent = (props) => {
  const { id, message } = props;

  return (
    <>
      <AdviceNumberContainer>{`ADVICE ${id}`}</AdviceNumberContainer>
      <AdviceTextContent>{`"${message}"`}</AdviceTextContent>
      <PatternDivider
        src={LineBreak}
        alt='line break'
      />
    </>
  );
};

const AdviceNumberContainer = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 4.08571px;
  color: #53ffaa;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const AdviceTextContent = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #cee3e9;
  margin: 0px 48px 40px;
  width: 444px;
`;

const PatternDivider = styled.img`
  margin: 0px 48px 72px;
`;

export default AdviceContent;
