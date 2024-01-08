import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TrafficLight from './components/TrafficLight';

const Container = styled.div`
  padding: 30px 60px;
`;

function App() {
  const [cycle, setCycle] = useState(null);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCycle((cycle) => (cycle + 1) % 4);
      },
      cycle === 1 || cycle === 3 ? 5000 : 10000
    );

    return () => clearInterval(interval);
  }, [cycle]);

  const handleReset = () => {
    setCycle(null);
  };
  const handleStart = () => {
    setCycle(0);
  };

  return (
    <Container>
      <TrafficLight
        handleReset={handleReset}
        handleStart={handleStart}
        cycle={cycle}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      ></div>
    </Container>
  );
}

export default App;
