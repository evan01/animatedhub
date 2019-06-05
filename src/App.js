import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Grid from "./Grid/Grid";

const APPCONTAINER = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.div`
	position: fixed;
	top: 20px;
	font-size: 30px;
    font-family: "Operator Mono";
    src: url("/Users/eknox/Downloads/HCo_OperatorMono/OpenType/OperatorMono-BookItalic.ttf");
`;

const App = () => {
	return (
		<>
			<APPCONTAINER/>
			<Title> /* Evans Hackday */ </Title>
			<Grid>
			</Grid>
		</>
	);
};

export default App;
