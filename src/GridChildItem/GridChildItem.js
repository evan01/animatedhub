import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";


const GridTileChildItemContainer = styled(animated.div)`
  height: 140px;
  width: 140px;
  background-color: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

const DescriptionSection = styled.div`
	height: 50px;
	width: 100%;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	bottom: 0px;
	background-color: skyblue
`;

const ContentContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;

const PictureBackGround = styled.div`
	border-radius: 25px;
	background-color: orange;
`;

const GridChildItem = (props) => {
	return (
		<GridTileChildItemContainer style={props.style}>
			<ContentContainer>
			</ContentContainer>
		</GridTileChildItemContainer>
	);
};


export default GridChildItem;

