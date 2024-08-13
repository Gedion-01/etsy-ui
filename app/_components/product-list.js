import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ArrowDropDown } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Personalized Soccer Ball Notebook",
    price: "USD 18.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NVITPWoOm6pm5dflCRJfOMeTwt_V_JRUpg&s", // replace with actual image URLs
    rating: 4.8,
    reviews: 20100,
    seller: "DesigningMoments",
  },
  {
    id: 2,
    title: "Soccer Balls Pattern Headband",
    price: "USD 18.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NVITPWoOm6pm5dflCRJfOMeTwt_V_JRUpg&s",
    rating: 4.5,
    reviews: 327,
    seller: "GorunUS",
  },
  // Add more products as necessary
];

const ProductList = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "none", md: "1234px" },
        marginX: { xs: "none", md: "auto" },
        borderBottom: "1px solid #ccc",
      }}
    >
      <Box sx={{ padding: "16px 16px 0px 16px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <Button
            variant="outlined"
            style={{
              borderColor: "black",
              color: "black",
              textTransform: "none",
              borderRadius: "20px",
            }}
            startIcon={<TuneIcon />}
          >
            All Filters
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: "0.8rem",
              }}
            >
              356 results, with Ads
            </Typography>
            <HelpOutlineIcon
              sx={{
                color: "black",
                fontSize: "1rem",
                marginRight: "4px",
              }}
            />
            <Button
              variant="outlined"
              style={{
                borderColor: "black",
                color: "black",
                textTransform: "none",
                borderRadius: "20px",
              }}
              endIcon={<ArrowDropDown />}
            >
              Sort by: most relevant
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "44px",
            marginTop: "10px",
            boxShadow: 0,
          }}
        >
          <Button
            variant="contained"
            style={{
              borderColor: "black",
              color: "black",
              textTransform: "none",
              borderRadius: "20px",
              backgroundColor: "rgba(204, 204, 204, 0.8)",
            }}
            endIcon={<CloseIcon />}
          >
            All Filters
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "black",
            }}
          >
            Etsy's Picks
          </Typography>
          <Button
            variant="outlined"
            style={{
              borderColor: "black",
              color: "black",
              textTransform: "none",
              borderRadius: "20px",
            }}
          >
            See more
          </Button>
        </Box>
        <Grid container spacing={2}>
          {products.map((product, i) => (
            <Grid item xs={12} sm={6} md={3} lg={2.4} key={product.id}>
              <Link href="/product">
              <Card
                sx={{
                  boxShadow: 0,
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
                <CardContent
                  sx={{
                    padding: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    component="h2"
                    style={{ fontWeight: "bold", marginTop: "8px" }}
                  >
                    {product.title}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    style={{ marginTop: "" }}
                  >
                    <Box
                      sx={{
                        marginTop: "4px",
                      }}
                    >
                      <StarIcon style={{ color: "", fontSize: "1rem" }} />
                      <StarIcon style={{ color: "", fontSize: "1rem" }} />
                      <StarIcon style={{ color: "", fontSize: "1rem" }} />
                      <StarIcon style={{ color: "", fontSize: "1rem" }} />
                      <StarIcon style={{ color: "", fontSize: "1rem" }} />
                    </Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        textDecoration: "underline",
                      }}
                    >
                      (224)
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginTop: "8px" }}
                  >
                    {product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontWeight: "bold" }}
                  >
                    {product.seller}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;
