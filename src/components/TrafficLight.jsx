import React from 'react';
import {
  Container,
  TrafficLightBoard,
  Red,
  Yellow,
  Green,
  LightContainer,
  LightMidBox,
  Controller,
  LightMidContainer,
  Button,
} from './style';

const TrafficLight = ({ cycle, handleStart, handleReset }) => {
  const isStreetAGreen = cycle === 0;
  const isStreetARed = cycle === 2;
  const isStreetAYellow = cycle === 1 || cycle === 3;

  const isStreetBGreen = cycle === 2;
  const isStreetBRed = cycle === 0;
  const isStreetBYellow = cycle === 1 || cycle === 3;

  return (
    <Container>
      <LightContainer>
        <TrafficLightBoard>
          <Red active={isStreetARed} />
          <Yellow active={isStreetAYellow} />
          <Green active={isStreetAGreen} />
        </TrafficLightBoard>
      </LightContainer>
      <LightMidBox>
        <LightMidContainer>
          <TrafficLightBoard>
            <Red active={isStreetBRed} />
            <Yellow active={isStreetBYellow} />
            <Green active={isStreetBGreen} />
          </TrafficLightBoard>
        </LightMidContainer>
        <Controller>
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleReset}>Reset</Button>
        </Controller>
        <LightMidContainer>
          <TrafficLightBoard>
            <Red active={isStreetBRed} />
            <Yellow active={isStreetBYellow} />
            <Green active={isStreetBGreen} />
          </TrafficLightBoard>
        </LightMidContainer>
      </LightMidBox>
      <LightContainer>
        <TrafficLightBoard>
          <Red active={isStreetARed} />
          <Yellow active={isStreetAYellow} />
          <Green active={isStreetAGreen} />
        </TrafficLightBoard>
      </LightContainer>
    </Container>
  );
};

export default TrafficLight;
