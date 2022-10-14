import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdviceContent from './AdviceContent';
import DiceIcon from '../assets/svgs/icon-dice.svg';

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    setLoading(true);
    try {
      const resp = await fetch('https://api.adviceslip.com/advice');
      if (!resp.ok) new Error('issue fetching from source');
      const adviceJson = await resp.json();
      setAdvice(adviceJson.slip);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    await getAdvice();
  };

  return (
    <AdviceGeneratorContainter>
      {error && <p>Error fetching from resource</p>}
      {loading ? (
        <LoadingText>loading advice...</LoadingText>
      ) : (
        <>
          <AdviceContent
            id={advice.id}
            message={advice.advice}
          />
          <FetchButton onClick={handleClick}>
            <IconSpan>
              <img
                src={DiceIcon}
                alt='button icon'
              />
            </IconSpan>
          </FetchButton>
        </>
      )}
    </AdviceGeneratorContainter>
  );
};

const AdviceGeneratorContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #313a48;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  border-radius: 15px;
`;

const IconSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FetchButton = styled.button`
  width: 64px;
  height: 64px;
  margin-bottom: -32px;
  background: #53ffaa;
  border-radius: 50%;
  border: none;
  :hover {
    background: #53ffaa;
    box-shadow: 0px 0px 40px #53ffaa;
  }
`;

const LoadingText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #cee3e9;
  width: 444px;
`;

export default AdviceGenerator;
