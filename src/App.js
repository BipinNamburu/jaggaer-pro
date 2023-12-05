import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Icon, Divider, ButtonBase } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import jsonData from "./data.json";
import { Menu, MenuItem } from '@material-ui/core';


export default function App() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);

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
  const { article, cart, user } = jsonData;

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [cartcount, setCartCount] = useState(5);
  const [initialCart, setInitialCart] = useState(5);
  const [pieces, setpieces] = useState(0);
  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value, 10) || 0;
    setpieces(inputValue);
  };
  const handleAddToCart = () => {
    console.log(initialCart, pieces);
    setpieces(pieces);
    setCartCount(initialCart + pieces);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [imageSources, setImageSources] = useState(article.images);
  const switchImage = (clickedIndex) => {
    const updatedImageSources = [...imageSources];
    const temp = updatedImageSources[clickedIndex - 1];
    updatedImageSources[clickedIndex - 1] = updatedImageSources[2];
    updatedImageSources[2] = temp;
    setImageSources(updatedImageSources);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          overflow: "auto",
          flexDirection: "column",
          height: "max-content",
        }}
      >
        <CssBaseline />
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "white",
            boxShadow: 0,
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
        </AppBar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "#D3D3D3",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              overflow: "auto",
              padding: "24px",
              backgroundColor: "white",
            }}
          >
            <Grid container className="mainGrid" spacing={2}>
              <Grid item sx={{ margin: 0 }} className="twoImages">
                <Grid container spacing={2}>
                  {imageSources.slice(0, 2).map((src, index) => (
                    <Grid item xs={12} sx={{ margin: 0 }}>
                      <Paper
                        elevation={3}
                        className="smallPaper"
                        onClick={() => switchImage(index + 1)}
                      >
                        <img src={src} className="pieceImage" />
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
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  {" "}
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
                        alt="Additional Image"
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
                          maxWidth: "16px", // Adjust the size as needed
                          maxHeight: "16px", // Adjust the size as needed
                        }}
                        alt="Additional Image"
                      />
                    </Icon>
                  )}
                </Paper>
              </Grid>
              <Grid item sx={{ margin: 0, width: "600px", paddingLeft: 0 }}>
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  className="detailsGrid"
                >
                  <Grid item xs={12} style={{ alignSelf: "flex-start" }}>
                    <div className="detailsTitle">{article.title}</div>
                    <div className="supplierContainer">
                      by{" "}
                      <span className="supplierName">
                        <a href={article.supplier_link}>
                          {article.supplier_name}
                        </a>
                      </span>
                    </div>
                    <div>
      <div onClick={handleClick} className="starGrid">
        <Grid container>
          {[...Array(5)].map((_, index) => (
            <Grid item key={index}>
              <Icon>
                <img src={index < selectedRating ? "/starFilled.svg" : "/star.svg"} alt={`icon-${index}`} />
              </Icon>
            </Grid>
          ))}
        </Grid>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: '50px' }}
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          <MenuItem key={rating} onClick={() => handleRatingSelect(rating)}>
            {[...Array(rating)].map((_, index) => (
              <Icon key={index}>
                <img src="/starFilled.svg" alt={`filled-star-${index}`} />
              </Icon>
            ))}
          </MenuItem>
        ))}
      </Menu>
    </div>
                    <div className="shippingDescription">
                      <Typography style={{ marginRight: "5px" }}>
                        {article.price} EUR
                      </Typography>
                      <span className="tax">
                        +{article.transport_costs} EUR shipping
                      </span>
                      <Icon fontSize="16px">
                        <img src="/discount.svg" alt="Discount Icon" />
                      </Icon>
                    </div>
                    <div className="tax">
                      all prices inc. {article.vat_percent}% taxes
                    </div>
                  </Grid>
                  <Grid item xs={12} style={{ alignSelf: "flex-end" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        id="outlined-basic"
                        className="pieceCount"
                        size="small"
                        onChange={handleChange}
                        value={pieces}
                      />{" "}
                      <span style={{ marginLeft: "10px" }}>{article.unit}</span>
                      <Button
                        className="addToCart"
                        style={{
                          textTransform: "none",
                          marginLeft: "30px",
                          borderRadius: 0,
                          gap: "10px",
                          color: "white",
                          backgroundColor: "#e24f43",
                          width: "auto",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingRight: "10px",
                        }}
                        onClick={handleAddToCart}
                      >
                        <Icon style={{ display: "flex" }}>
                          <img src="/add.svg"></img>
                        </Icon>
                        Add to cart
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "30px", width: "75%", wordBreak: "break-word" }}>
            <div className="description">DESCRIPTION</div>
            {article.description_long}
            <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
              <Grid xs={6} item>
                <Paper
                  sx={{ padding: "15px" }}
                  elevation={3}
                  style={{ height: "auto" }}
                >
                  <div className="boxHeading">DETAILS</div>
                  <Divider
                    sx={{
                      borderRadius: 1,
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  />
                  <div className="sideHeadings">Features</div>
                  <List
                    sx={{
                      paddingTop: "0px !important",
                      listStyleType: "disc",
                      pl: 2,
                      "& .MuiListItem-root": {
                        display: "list-item",
                      },
                    }}
                  >
                    {Object.entries(article.features).map(
                      ([feature, value]) => (
                        <ListItem key={feature} sx={{ padding: 0 }}>
                          <span className="subHeadings">{feature}: </span>
                          <span className="values">{value}</span>
                        </ListItem>
                      )
                    )}
                  </List>
                  <div className="sideHeadings">Attatchments</div>
                  <List
                    sx={{
                      padding: "0px !important",
                      listStyleType: "disc",
                      pl: 2,
                      "& .MuiListItem-root::before": {
                        content: "''",
                        display: "inline-block",
                        width: "12px",
                        height: "24px",
                        background: `url('/attatchment.svg') no-repeat`,
                        backgroundPosition: "center",
                        marginRight: "5px",
                      },
                    }}
                  >
                    {article.attachments.map((attachment) => (
                      <ListItem key={attachment.file_name} sx={{ padding: 0 }}>
                        <a
                          href={attachment.file_link}
                          download={attachment.file_name}
                          className="attachedLinks"
                        >
                          {attachment.file_label}
                        </a>
                      </ListItem>
                    ))}
                  </List>
                  <div className="keyword">Keywords</div>
                  <div
                    style={{ marginTop: "5px", display: "flex", gap: "5px" }}
                  >
                    {article.keywords.map((keyword) => (
                      <Button
                        key={keyword}
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "600",
                          fontSize: "12px",
                          borderRadius: "15px",
                          color: "white",
                          backgroundColor: "#ced4db",
                          width: "auto",
                          height: "20px",
                        }}
                      >
                        {keyword}
                      </Button>
                    ))}
                  </div>
                </Paper>
              </Grid>
              <Grid xs={6} item>
                <Paper
                  sx={{ padding: "15px" }}
                  elevation={3}
                  style={{ height: "auto" }}
                >
                  <div className="boxHeading">PRICING AND SHIPPING</div>
                  <Divider
                    sx={{
                      borderRadius: 1,
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  />
                  <List
                    sx={{
                      paddingTop: "0px !important",
                      listStyleType: "disc",
                      pl: 2,
                      "& .MuiListItem-root": {
                        display: "list-item",
                      },
                    }}
                  >
                    <ListItem sx={{ padding: 0 }}>
                      <span className="subHeadings">Minimum order: </span>
                      <span className="values">
                        {article.minimum_order_quantity} PCE
                      </span>
                    </ListItem>
                    <ListItem sx={{ padding: 0 }}>
                      <span className="subHeadings">Shipping: </span>
                      <span className="values">680,96 EUR</span>
                    </ListItem>{" "}
                    <ListItem sx={{ padding: 0 }}>
                      <span className="subHeadings">Delivery: </span>
                      <span className="values">
                        {article.delivery_time} days
                      </span>
                    </ListItem>
                  </List>
                  <div className="sideHeadings" style={{ marginTop: "20px" }}>
                    Price Breaks
                  </div>
                  <div style={{ width: "50%" }}>
                    <Divider
                      sx={{
                        borderRadius: 1,
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    />
                    {Object.entries(article.price_breaks).map(
                      ([quantity, price]) => (
                        <div key={quantity}>
                          <div class="priceBreaks">
                            <div>{`ex ${quantity} PCE`}</div>
                            <div>{`${price.toFixed(2)} EUR/PCE`}</div>
                          </div>
                          <Divider
                            sx={{
                              borderRadius: 1,
                              marginTop: "5px",
                              marginBottom: "5px",
                            }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
