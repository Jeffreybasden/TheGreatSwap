import styled from "styled-components"

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  contain: content;
`;

export const SwapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 450px;
  border-radius: 25px;
  box-shadow: -10px 10px rgba(0, 0, 0, 0.142);
  background: linear-gradient(to bottom right, #ced4da, #7f7f7f);
`;

export const Title = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(#000000, #ffd100);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-size: $extra-large;
  font-weight: 900;
  font-family: "Catamaran", sans-serif;
  font-style: italic;

`;
export const TitleBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/greatswap.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: fit-content;
`;
