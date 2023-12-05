import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";
import { Box,Icon }  from "@mui/material";

const Header = ({ scrollPosition, article, cartcount }) => {
  console.log(scrollPosition)
  return (
    <><CssBaseline /><AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        boxShadow: scrollPosition > 0 ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none !important" ,
        borderBottom: 1,
        borderColor: "#D3D3D3",
        height: 64,
        top: `${scrollPosition}px`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", height: "100%" }}>
        <Typography variant="h5" color="#e24f43" component="div">
          {article.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Icon>
            <img src="/heart.svg" alt="heart" />
          </Icon>
          <Icon>
            <img src="/facts.svg" alt="second-icon" />
          </Icon>
          <Divider orientation="vertical" flexItem />
          <Icon className="cart-icon">
            <img src="/cart.svg" alt="third-icon" />
            <span className="cart-badge">{cartcount}</span>
          </Icon>
        </Box>
      </Toolbar>
    </AppBar></>
  );
};

export default Header;
