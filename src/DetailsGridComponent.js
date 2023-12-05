import React from "react";
import {
  Grid,
  Icon,
  Typography,
  Menu,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

export default function DetailsContainer({
  article,
  handleRatingSelect,
  selectedRating,
  handleClick,
  handleClose,
  handleChange,
  pieces,
  handleAddToCart,
  anchorEl,
}) {
  return (
    <Grid item sx={{ margin: 0, width: "600px", paddingLeft: 0 }}>
      <Grid container spacing={2} alignItems="stretch" className="detailsGrid">
        <Grid item xs={12} style={{ alignSelf: "flex-start" }}>
          <div className="detailsTitle">{article.title}</div>
          <div className="supplierContainer">
            by{" "}
            <span className="supplierName">
              <a href={article.supplier_link}>{article.supplier_name}</a>
            </span>
          </div>
          <div>
            <div onClick={handleClick} className="starGrid">
              <Grid container>
                {[...Array(5)].map((_, index) => (
                  <Grid item key={index}>
                    <Icon>
                      <img
                        src={
                          index < selectedRating
                            ? "/starFilled.svg"
                            : "/star.svg"
                        }
                        alt={`icon-${index}`}
                      />
                    </Icon>
                  </Grid>
                ))}
              </Grid>
            </div>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ marginTop: "50px" }}
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <MenuItem
                  key={rating}
                  onClick={() => handleRatingSelect(rating)}
                >
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
            <span className="tax">+{article.transport_costs} EUR shipping</span>
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
  );
}
