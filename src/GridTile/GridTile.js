import React, {useState, useRef} from "react";
import { useTransition, useSpring, useChain, config, animated } from "react-spring";
import styled from "styled-components";

const TileContainer = styled(animated.div)`
	/* position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	grid-gap: 25px;
	padding: 25px;
	background: white;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05); */
`;

const TileGrid = styled(animated.div)`
	display: flex;
	min-width: 200px;
	min-height: 200px;
	will-change: width, height;
	grid-column: last-col / span 1;
  	grid-row: 1 / last-line;
`;

const GridTileChildItem = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

const colors = [
	{
		  name: "Rare Wind",
		  description: "#a8edea → #fed6e3",
		  css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
		  height: 200
	},
	{
		  name: "Saint Petersburg",
		  description: "#f5f7fa → #c3cfe2",
		  css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
		  height: 400
	},
	{
		  name: "Deep Blue",
		  description: "#e0c3fc → #8ec5fc",
		  css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
		  height: 400
	},
	{
		  name: "Ripe Malinka",
		  description: "#f093fb → #f5576c",
		  css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
		  height: 400
	},
	{
		  name: "Perfect White",
		  description: "#fdfbfb → #ebedee",
		  css: "linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)",
		  height: 400
	},
	{
		  name: "Near Moon",
		  description: "#5ee7df → #b490ca",
		  css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
		  height: 400
	},
	{
		  name: "Wild Apple",
		  description: "#d299c2 → #fef9d7",
		  css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
		  height: 200
	},
	{
		  name: "Ladoga Bottom",
		  description: "#ebc0fd → #d9ded8",
		  css: "linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)",
		  height: 400
	},
	{
		  name: "Sunny Morning",
		  description: "#f6d365 → #fda085",
		  css: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
		  height: 200
	},
	{
		  name: "Lemon Gate",
		  description: "#96fbc4 → #f9f586",
		  css: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
		  height: 400
	},
	{
		  name: "Salt Mountain",
		  description: " #FFFEFF → #D7FFFE",
		  css: "linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)",
		  height: 200
	},
	{
		  name: "New York",
		  description: " #fff1eb → #ace0f9",
		  css: "linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)",
		  height: 400
	},
	{
		  name: "Soft Grass",
		  description: " #c1dfc4 → #deecdd",
		  css: "linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)",
		  height: 400
	},
	{
		  name: "Japan Blush",
		  description: " #ddd6f3 → #faaca8",
		  css: "linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)",
		  height: 200
	}
];

const GridTile = (props) => {
	const [open, setOpen] = useState(false);

	const springRef = useRef();
	const {...styles} = useSpring({
		config: config.stiff,
		from: { size: "0%", background: "hotpink", padding: "0px" },
		to: {
			width: open ? "70%": "0%",
			height: open ? "70%": "0%",
			background: open ? "skyblue" : "hotpink",
			gridRowStart: open? 20 : 0,
			gridColumnStart: open ? 20 : 0,
			position: open ? "fixed" : "relative",
			zIndex: open ? "1" : "0",
		}
	});

	// const transRef = useRef();
	// const transitions = useTransition(open ? colors : [], (item) => item.name, {
	// 	ref: transRef,
	// 	unique: true,
	// 	trail: 400 / colors.length,
	// 	from: { opacity: 0, transform: "scale(0)" },
	// 	enter: { opacity: 1, transform: "scale(1)" },
	// 	leave: { opacity: 0, transform: "scale(0)" }
	// });

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	// useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);
	const openGridTile = () => {
		console.log("ToogleOpen:",open);

		setOpen((open) => !open);
	};

	return (
		<TileContainer>
			<TileGrid style={styles} onClick={openGridTile}>
				{/* {transitions.map(({ item, key, props }) => (
					<GridTileChildItem key={key} style={{ ...props, background: item.css }} />
				))} */}
			</TileGrid>
		</TileContainer>
	);
};

export default GridTile;

/*
	1. TileGrid expands from 200px box, to 100% of container
	2. Once expanded, render each component, chain a appear + grow animation

*/