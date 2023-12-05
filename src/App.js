import * as React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Grid,
} from "@mui/material";
import jsonData from "./data.json";
import Header from "./AppBarComponent";
import ImageContainer from "./ImageGridComponent";
import DetailsContainer from "./DetailsGridComponent";
import DescriptionComponent from "./DescriptionComponent";

export default function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cartcount, setCartCount] = useState(jsonData.cart.items);
  const [initialCart] = useState(jsonData.cart.items);
  const [pieces, setPieces] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageSources, setImageSources] = useState(jsonData.article.images);
  const { article, cart } = jsonData;

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value, 10) || 0;
    setPieces(inputValue);
  };

  const handleAddToCart = () => {
    setCartCount(initialCart + pieces);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const switchImage = (clickedIndex) => {
    const updatedImageSources = [...imageSources];
    const temp = updatedImageSources[clickedIndex - 1];
    updatedImageSources[clickedIndex - 1] = updatedImageSources[2];
    updatedImageSources[2] = temp;
    setImageSources(updatedImageSources);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    handleClose();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", overflow: "auto", flexDirection: "column", height: "max-content" }}>
        <Header scrollPosition={scrollPosition} article={article} cartcount={cartcount} />
        <Box sx={{ display: "flex", flexDirection: "column", background: "#D3D3D3" }}>
          <Box sx={{ flexGrow: 1, overflow: "auto", padding: "24px", backgroundColor: "white" }}>
            <Grid container className="mainGrid" spacing={2}>
              <ImageContainer
                scrollPosition={scrollPosition}
                article={article}
                cartcount={cartcount}
                imageSources={imageSources}
                switchImage={switchImage}
                isHovered={isHovered}
                handleHover={handleHover}
                handleMouseLeave={handleMouseLeave}
              />
              <DetailsContainer
                article={article}
                handleRatingSelect={handleRatingSelect}
                selectedRating={selectedRating}
                handleClick={handleClick}
                handleClose={handleClose}
                handleChange={handleChange}
                pieces={pieces}
                handleAddToCart={handleAddToCart}
                anchorEl={anchorEl}
              />
            </Grid>
          </Box>
          <DescriptionComponent article={article} />
        </Box>
      </Box>
    </>
  );
}
