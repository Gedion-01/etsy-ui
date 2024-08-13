import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { FavoriteBorder, Star } from "@mui/icons-material";

import StarIcon from "@mui/icons-material/Star";

const ProductCard = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "none", md: "1234px" },
        marginX: { xs: "none", md: "auto" },
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "100%",
          padding: "16px",
          boxShadow: 0,
          borderBottom: "1px solid #ccc",
        }}
      >
        <Box sx={{ position: "relative", width: "360px" }}>
          <CardMedia
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NVITPWoOm6pm5dflCRJfOMeTwt_V_JRUpg&s" // replace with the actual image URL
            alt="Football Field Pencil Case"
            style={{ width: "300px", height: "100%", borderRadius: "8px" }}
          />
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              border: "1px solid #333",
            }}
          >
            <FavoriteBorder />
          </IconButton>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "16px",
          }}
        >
          <CardContent style={{ padding: "0 16px 16px 0" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textDecoration: "underline",
                  }}
                >
                  efratul
                </Typography>
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
                    fontSize: "1rem",
                    textDecoration: "underline",
                  }}
                >
                  (224)
                </Typography>
              </Box>
              
            </Box>
            <Typography
              variant="h6"
              component="h2"
              style={{ fontWeight: "bold", fontSize: "1rem", marginTop: "8px" }}
            >
              Football Field Pencil Case, Soccer Field Zipper Pouch, Kid's
              Pencil Case, Back to School, Sport Lover Gift, Student Gift Idea,
              Gift for Kids
            </Typography>
            <Box
              sx={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                component="p"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginRight: "8px",
                }}
              >
                USD 19.00
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                  backgroundColor: "#4CAF50",
                  width: "126px",
                  paddingX: "10px",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "0.8rem",
                  }}
                >
                  FREE shipping
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              style={{
                borderColor: "#333",
                color: "#333",
                marginTop: "16px",
                textTransform: "none",
                borderRadius: "20px",
              }}
            >
              Shop this item
            </Button>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductCard;
