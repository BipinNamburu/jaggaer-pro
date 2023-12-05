import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const ImageContainer = ({ scrollPosition, article, cartcount, imageSources, switchImage, isHovered, handleHover, handleMouseLeave }) => {
  return (
    <>
      <Grid item sx={{ margin: 0 }} className="twoImages">
        <Grid container spacing={2}>
          {imageSources.slice(0, 2).map((src, index) => (
            <Grid item xs={12} sx={{ margin: 0 }} key={index}>
              <Paper
                elevation={3}
                className="smallPaper"
                onClick={() => switchImage(index + 1)}
                sx={{ boxShadow: 0, border: "1px solid #D3D3D3" }}
              >
                <img src={src} className="pieceImage" alt={`Image ${index}`} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sx={{ margin: 0 }} className="bigImageContainer">
        <Paper
          elevation={3}
          style={{
            height: "482px",
            width: "100%",
            position: "relative",
          }}
          sx={{ boxShadow: 0, border: "1px solid #D3D3D3" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={imageSources[2]}
            className="pieceImage"
            alt="Main Image"
            style={{
              transition: "transform 0.2s",
              transform: isHovered ? "scale(1.2)" : "scale(1)",
            }}
          />
          {isHovered ? (
            <Icon>
              <img
                src="/zoomOut.svg"
                className="additionalImage"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  maxWidth: "16px",
                  maxHeight: "16px",
                }}
                alt="Zoom Out"
              />
            </Icon>
          ) : (
            <Icon>
              <img
                src="/zoomIn.svg"
                className="additionalImage"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  maxWidth: "16px",
                  maxHeight: "16px",
                }}
                alt="Zoom In"
              />
            </Icon>
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default ImageContainer;
