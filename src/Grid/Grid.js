import React, {useState} from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import palette from "google-palette";
import _ from "lodash";
import GridTile from "../GridTile/GridTile.js";

const TILE_SIZE = 200;
const GRID_GAP = 25;
const GRID_PADDING = 30;

const getGridWidth = (numColumns) => (numColumns*TILE_SIZE + (numColumns-1)*GRID_GAP);

const getGridHeight = (numRows) => (numRows*TILE_SIZE + (numRows-1)*GRID_GAP);

const createTile = (name, value, ref) => {
	return({name: name, value: value, ref: ref});
};

const getColorScheme = () => {
	const palletes = ["diverging", "qualitative", "rainbow"];
	return palette(_.sample(palletes), 20, _.random(0,10));
};

const getBackgroundColor = (colors=getColorScheme()) => (`linear-gradient(135deg, #${_.sample(colors)} 0%, #${_.sample(colors)} 100%)`);

const Hub = ({props, children}) => {
	const [selected, setSelected] = useState(-1);

	//Transition animation for each tile added to the hub
	let tiles = [];
	for (let i = 0; i < 10; i++) {
		tiles[i] = createTile("tile"+i,i);
	}

	//Create the tile transitions
	const tile_transitions = useTransition(tiles,(item) => item.value,{
		trail: 500/tiles.length,
		from: { opacity: 0, transform: "scale(0)" },
		enter: { opacity: 1, transform: "scale(1)" },
		leave: { opacity: 1, transform: "scale(0)" }
	});

	const renderGridChildren = () => {
		return tile_transitions.map(({ item, key, props }) =>(
			<GridItemContainer
				selected={(item.value===selected)}
				onClick={() => (selected === item.value) ? setSelected(-1): setSelected(item.value)}
				columns={3}
				rows={3}
				key={key}
			>
				<GridItem
					style={props}
					selected={(item.value===selected)}
				>
					{(item.value===selected) && <GridTile/>}
				</GridItem>
			</GridItemContainer>

		));
	};

	return (
		<GridContainer>
			{renderGridChildren()}
		</GridContainer>
	);
};

const GridItem = styled(animated.div)`
	display: flex;
	flex-grow: 1;
	transition: transform .2s;
	height: 100%;
	width: 100%;
	border-radius: 15px;
	cursor: pointer;
	background: ${(props) => getBackgroundColor()};
`;

//Spring animation to do the height and width of container
const GridItemContainer = styled(animated.div)`
	width: ${(props) => (props.selected ? getGridWidth(props.columns) : TILE_SIZE)}px;
	height: ${(props) => (props.selected ? getGridHeight(props.rows) : TILE_SIZE)}px;
	opacity: ${(props)=>props.opacity};
	transition: width .4s, height .4s;
	grid-column: auto / span ${(props) => props.selected ? props.columns : 1 };
	padding: 20px;
	grid-row: auto / span ${(props) => props.selected ? props.columns : 1 };
	:hover {
		transform: ${(props)=>props.selected ? "" : "scale(1.3)"};
	}
`;

const GridContainer = styled(animated.div)`
	background-color: white;
	width: 70%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, ${TILE_SIZE}px);
	grid-template-rows: repeat(auto-fit, ${TILE_SIZE}px);
	grid-auto-flow: dense;
	grid-gap: ${GRID_GAP}px;
	border-radius: 10px;
	padding: ${GRID_PADDING}px;
	overflow: auto;
	box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
`;

export default Hub;

