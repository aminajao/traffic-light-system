import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 20px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  background: none;
`;
export const LightContainer = styled.div`
  width: 120px;
  height: 200px;
  display: flex;
  justify-content: center;
  background-color: #2b2b2a;
`;

export const LightMidBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2b2b2a;
`;

export const LightMidContainer = styled.div`
  width: 150px;
  height: 120px;
  background-color: #2b2b2a;
  border: none;
  margin-left: 3.7em;
  margin-right: 3.7em;
  display: flex;
  justify-content: center;
`;

export const Controller = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #2b2b2a;
`;

export const TrafficLightBoard = styled.div`
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 50px;
  background: black;
  border-radius: 10px;
`;

export const Light = styled.div`
  margin: auto;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const Green = styled(Light)`
  background-color: ${({ active }) =>
    active ? 'rgb(36, 205, 3)' : 'rgba(36, 205, 3, 0.25)'};
`;

export const Yellow = styled(Light)`
  background-color: ${({ active }) =>
    active ? 'rgb(255, 212, 0)' : 'rgba(255, 212, 0, 0.25)'};
`;

export const Red = styled(Light)`
  background-color: ${({ active }) =>
    active ? 'rgb(255, 0, 0)' : 'rgba(255, 0, 0, 0.25)'};
`;

export const StreetLabel = styled.p`
  margin-left: -100px;
`;