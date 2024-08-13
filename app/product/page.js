"use client"

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  IconButton,
  Box,
  Collapse,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LinkIcon from "@mui/icons-material/Link";
import StraightenIcon from "@mui/icons-material/Straighten";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NVITPWoOm6pm5dflCRJfOMeTwt_V_JRUpg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NVITPWoOm6pm5dflCRJfOMeTwt_V_JRUpg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmRjeEU1cAgm9D49c4E-1Dmg2pNRzdygAoA&s",
];

const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ backgroundColor: "white", height: "100vh", padding: "20px" }}>
      <Box
        sx={{
          maxWidth: { xs: "none", md: "1234px" },
          marginX: { xs: "none", md: "auto" },
        }}
      >
        <div style={{ backgroundColor: "#FFF", color: "#000" }}>
          <AppBar
            position="static"
            style={{ backgroundColor: "#FFF", boxShadow: "none" }}
          ></AppBar>
          <Container
            maxWidth="md"
            style={{ marginTop: "2rem" }}
            sx={{ padding: 0 }}
          >
            <Grid container spacing={4} sx={{ padding: 0 }}>
              <Grid item xs={12} sm={2} sx={{ padding: 0 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {images.map((image, index) => (
                    <Card
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      style={{
                        padding: 0,
                        marginBottom: "0.5rem",
                        cursor: "pointer",
                        border:
                          currentImage === index ? "2px solid #4caf50" : "none",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={`Thumbnail ${index + 1}`}
                        image={image}
                        style={{
                          width: "70px",
                          height: "100%",
                          maxHeight: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </Card>
                  ))}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ position: "relative", padding: 0 }}
              >
                <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                  <IconButton
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      color: "#000",
                      transform: "translateY(-50%)",
                    }}
                    onClick={handlePrevImage}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <Card
                    style={{
                      boxShadow: "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="Product Image"
                      image={images[currentImage]}
                      title="Product Image"
                      style={{
                        maxHeight: "100%",
                        borderRadius: "8px",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Card>

                  <IconButton
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: 0,
                      color: "#000",
                      transform: "translateY(-50%)",
                    }}
                    onClick={handleNextImage}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </div>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginTop: "2rem", fontWeight: 700, color: "#000" }}
                >
                  Highlights
                </Typography>
                <Grid container spacing={1} sx={{ padding: 0 }}>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 500, color: "#000" }}
                    >
                      Made by DreamBeadsDovi
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 500, color: "#000" }}
                    >
                      Materials: Glass
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 500, color: "#000" }}
                    >
                      Chain style: Bead
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 500, color: "#000" }}
                    >
                      Necklace length: 42 Centimeters
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} sx={{ padding: 0 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ fontWeight: 700, color: "red" }}
                >
                  Rare find
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: 700 }}
                >
                  Soccer Ball Necklace
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  style={{ lineHeight: 1.6 }}
                >
                  Soccer Ball Necklace-Football Beaded Necklace-Soccer Fans
                  Gift-Soccer Ball Charm Necklace
                </Typography>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 500, color: "#000" }}
                    >
                      DreamBeadsDovi
                    </Typography>
                  </Grid>
                  <Grid item>
                    <StarIcon sx={{ fontSize: "1rem" }} />
                    <StarIcon sx={{ fontSize: "1rem" }} />
                    <StarIcon sx={{ fontSize: "1rem" }} />
                    <StarIcon sx={{ fontSize: "1rem" }} />
                    <StarIcon sx={{ fontSize: "1rem" }} />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "1.5rem",
                    color: "#111",
                    fontWeight: 600,
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  Add to cart
                </Button>
                <Box mt={4} mb={4}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" style={{ fontWeight: 600 }}>
                      Item details
                    </Typography>
                    <IconButton onClick={handleExpandClick}>
                      {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Grid>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box mt={2}>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: 600 }}
                      >
                        Highlights
                      </Typography>
                      <Grid container spacing={1} direction="column">
                        <Grid item>
                          <Box display="flex" alignItems="center">
                            <HandshakeIcon style={{ marginRight: 8 }} />
                            <Typography variant="body1">
                              Made by <strong>DreamBeadsDovi</strong>
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Box display="flex" alignItems="center">
                            <LocalOfferIcon style={{ marginRight: 8 }} />
                            <Typography variant="body1">
                              Materials: Glass
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Box display="flex" alignItems="center">
                            <LinkIcon style={{ marginRight: 8 }} />
                            <Typography variant="body1">
                              Chain style: Bead
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Box display="flex" alignItems="center">
                            <StraightenIcon style={{ marginRight: 8 }} />
                            <Typography variant="body1">
                              Necklace length: 42 Centimeters
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Box mt={3}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontWeight: 600 }}
                        >
                          About this item
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Soccer Ball Necklace-Football Beaded Necklace-Soccer
                          Fans Gift-Soccer Ball Charm Necklace-Ball
                          Charm-Football Charm Necklace -Green Necklace
                        </Typography>
                      </Box>
                    </Box>
                  </Collapse>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </Box>
  );
};

export default ProductPage;
