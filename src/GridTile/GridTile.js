import React, {useRef} from "react";
import { useTransition, useChain, animated } from "react-spring";
import styled from "styled-components";

const TileContainer = styled(animated.div)`
	width: 100%;
	height: 100%;
	position: relative;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, 140px);
	grid-template-rows: repeat(auto-fit, 140px);
	grid-gap: 10px;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
`;

const GridTileChildItem = styled(animated.div)`
  height: 140px;
  width: 140px;
  background-color: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

const GridTile = (props) => {
	let children  = [];
	for (let i = 0; i < 8; i++) {
		children[i] = {name: "test"+i};
	};

	const transRef = useRef();
	const transitions = useTransition(children, (item) => item.name, {
		ref: transRef,
		unique: true,
		trail: 400 / 4,
		from: { opacity: 0, transform: "scale(0)" },
		enter: { opacity: 1, transform: "scale(1)" },
		leave: { opacity: 0, transform: "scale(0)" }
	});

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	useChain([transRef], [.1]);

	return (
		<TileContainer>
			{transitions.map(({ item, key, props }) => (
				<GridTileChildItem key={key} style={{ ...props}} />
			))}
		</TileContainer>
	);
};

export default GridTile;

/*
	1. TileGrid expands from 200px box, to 100% of container
	2. Once expanded, render each component, chain a appear + grow animation

*/