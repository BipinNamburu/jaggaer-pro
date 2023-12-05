import React from "react";
import { Box, Grid, Button, Paper } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

export default function DescriptionComponent({ article }) {
  return (
    <Box sx={{ padding: "30px", width: "75%", wordBreak: "break-word" }}>
      <div className="description">DESCRIPTION</div>
      {article.description_long}
      <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
        {["DETAILS", "PRICING AND SHIPPING"].map((section, index) => (
          <Grid key={index} xs={6} item>
            <Paper elevation={3} style={{ height: "auto", padding: "15px" }}>
              <div className="boxHeading">{section}</div>
              <Divider
                sx={{
                  borderRadius: 1,
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
              {section === "DETAILS" ? (
                <>
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
                    {Object.entries(article.features).map(([feature, value]) => (
                      <ListItem key={feature} sx={{ padding: 0 }}>
                        <span className="subHeadings">{feature}: </span>
                        <span className="values">{value}</span>
                      </ListItem>
                    ))}
                  </List>
                  <div className="sideHeadings">Attachments</div>
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
                        background: `url('/attachment.svg') no-repeat`,
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
                  <div style={{ marginTop: "5px", display: "flex", gap: "5px" }}>
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
                </>
              ) : (
                <>
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
                      <span className="values">680.96 EUR</span>
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
                          <div className="priceBreaks">
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
                </>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
