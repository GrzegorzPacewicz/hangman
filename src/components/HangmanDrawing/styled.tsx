import styled from "styled-components";

export const Container = styled.div`
    position: relative;
  `;

export const Hack = styled.div`
  height: 50px;
  width: 10px;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Top = styled.div`
  height: 10px;
  width: 200px;
  background-color: white;
  margin-left: 120px;
`;

export const Line = styled.div`
  height: 340px;
  width: 10px;
  background-color: white;
  margin-left: 120px;
`;

export const Bottom = styled.div`
  height: 10px;
  width: 250px;
  background-color: white;
`
export const Head = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 10px solid white;
  position: absolute;
  top: 50px;
  right: -30px;
`;

export const Body = styled.div`
  height: 100px;
  width: 10px;
 background-color: white;
  position: absolute;
  top: 120px;
  right: 0;
`;

export const RightArm = styled.div`
  height: 10px;
  width: 100px;
  background-color: white;
  position: absolute;
  top: 150px;
  right: -100px;
  rotate: -30deg;
  transform-origin: left bottom;
`;

export const LeftArm = styled.div`
  height: 10px;
  width: 100px;
  background-color: white;
  position: absolute;
  top: 150px;
  right: 10px;
  rotate: 30deg;
  transform-origin: right bottom;
`;

export const RightLeg = styled.div`
  height: 10px;
  width: 100px;
  background-color: white;
  position: absolute;
  top: 210px;
  right: -90px;
  rotate: 60deg;
  transform-origin: left bottom;
`;

export const LeftLeg = styled.div`
  height: 10px;
  width: 100px;
  background-color: white;
  position: absolute;
  top: 210px;
  right: 0;
  rotate: -60deg;
  transform-origin: right bottom;
`;