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

export const Button1 = styled.button`

  background-color: #fff000;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: auto;
  text-align: center;
  transition: 200ms;
  margin: 4%;
  height: 9%;
  width: 40%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

:not(:disabled):hover,
:not(:disabled):focus {
  outline: 0;
  background: #f4e603;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}
`

export const Button2 = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 4%;
  height: 9%;
  width: 40%;
  outline: none;
  padding: auto;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;


:disabled {
  pointer-events: none;
}

:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

:active {
  box-shadow: none;
  transform: translateY(0);
}
`