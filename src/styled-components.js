import styled from "styled-components"

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  contain: content;
`;

export const SwapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 450px;
  border-radius: 25px;
  box-shadow: -10px 10px rgba(0, 0, 0, 0.142);
  background: linear-gradient(to bottom right, #001845, #5c677d);
`;
