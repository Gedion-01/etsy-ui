"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  AccountCircle,
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ProductCard from "./_components/product-card";
import ProductList from "./_components/product-list";
import ProductPage from "./product/page";

const EtsyClone = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: "white", height: "100vh" }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
          paddingX: "4px",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: 0,
            margin: 0,
            color: "black",
            maxWidth: { xs: "none", md: "1234px" },
            marginX: { xs: "none", md: "auto" },
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Typography
              variant="h6"
              style={{ color: "#F56524", marginRight: 24, fontWeight: "bold" }}
            >
              Etsy
            </Typography>
            <IconButton aria-label="Categories">
              <MenuIcon sx={{ marginRight: "2px" }} />
            </IconButton>
          </Box>

          {/* Search Bar */}
          <Box
            component="form"
            display="flex"
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" },
              border: "1px solid #ccc",
              borderRadius: "999px",
              paddingLeft: 1,
              width: "500px",
              overflow: "hidden",
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{ paddingLeft: 2, fontSize: "1rem", width: "100%" }}
            />
            <IconButton
              type="submit"
              color="error"
              sx={{
                backgroundColor: "#F56524",
                color: "#fff",
                marginRight: 1,
                marginY: "3px",
                ":hover": {
                  backgroundColor: "rgba(245, 101, 36, 0.6)",
                  borderRadius: "0px",
                  marginY: "0px",
                  paddingY: "11px",
                  marginRight: 0,
                  paddingRight: 2,
                },
              }}
            >
              <SearchIcon sx={{ fontSize: "21px" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="text" sx={{ mr: 2, color: "black" }}>
              Sign in
            </Button>
            <IconButton aria-label="add to favorites">
              <FavoriteBorder />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <CardGiftcardIcon />
            </IconButton>
            <IconButton aria-label="add to shopping cart">
              <ShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          <Button
            style={{
              textTransform: "none",
              color: "black",
              marginRight: 24,
              fontSize: "12px",
            }}
          >
            <CardGiftcardIcon sx={{ marginRight: "2px", fontSize: "12px" }} />
            Gift Mode
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "black",
              marginRight: 24,
              fontSize: "12px",
            }}
          >
            Back-to-School Savings
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "black",
              marginRight: 24,
              fontSize: "12px",
            }}
          >
            Home Favorites
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "black",
              marginRight: 24,
              fontSize: "12px",
            }}
          >
            Fashion Finds
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "black",
              marginRight: 24,
              fontSize: "12px",
            }}
          >
            Registry
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          <IconButton aria-label="Categories">
            <MenuIcon sx={{ marginRight: "2px" }} />
          </IconButton>
          <Box
            component="form"
            display="flex"
            alignItems="center"
            sx={{
              display: "flex",
              border: "1px solid #ccc",
              borderRadius: "999px",
              paddingLeft: 1,
              width: "100%",
              overflow: "hidden",
              marginY: 1,
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{ paddingLeft: 2, fontSize: "1rem", width: "100%" }}
            />
            <IconButton
              type="submit"
              color="error"
              sx={{
                backgroundColor: "#F56524",
                color: "#fff",
                marginRight: 1,
                marginY: "3px",
                ":hover": {
                  backgroundColor: "rgba(245, 101, 36, 0.6)",
                  borderRadius: "0px",
                  marginY: "0px",
                  paddingY: "11px",
                  marginRight: 0,
                  paddingRight: 2,
                },
              }}
            >
              <SearchIcon sx={{ fontSize: "21px" }} />
            </IconButton>
          </Box>
        </Box>
      </AppBar>

      <ProductCard />
      <ProductList />
      <ProductPage />
    </Box>
  );
};

export default EtsyClone;
