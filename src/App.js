import React from "react";
import Gridtile from "./GridTile/GridTile";
import {createGlobalStyle} from "styled-components";
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
    overflow: hidden;
    user-select: none;
    background: lightblue;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const App = () => {
	return (
		<>
			<APPCONTAINER/>
			<Grid>
				<Gridtile/>
				<Gridtile/>
				<Gridtile/>
				<Gridtile/>
				<Gridtile/>
				<Gridtile/>
				<Gridtile/>
			</Grid>
		</>
	);
};

export default App;
