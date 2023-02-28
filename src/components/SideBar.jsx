import React from "react";
import { Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      pt={2}
      sx={{
        height: { sx: "auto", md: "95%" },
        overflowY: "auto",
        flexDirection: { md: "column " },
        position:'fixed',
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"  
          key={category.name}
          sx={{ justifyContent: "spaceBetween" }}
          style={{
            background: category.name === selectedCategory && "#fc1503",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "black",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.7",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
      <Typography
        className="copyright"
        variant="body2"
        sx={{ color: "#000", mt: 1.5 }}
      >
        Copyright @2022
      </Typography>
    </Stack>
  );
};

export default SideBar;
