import { Box } from "@mui/material";
import React from "react";
import TodoList from "../pages/Todo";
import WeatherCard from "../components/WeatherCard";

const ToDo = () => {
  return (
    <Box
      sx={{
        // overflow: "hidden",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "20px",
          padding: "20px",
          boxShadow:
            "box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <Box sx={{ flex: 3 }}>
          <TodoList />
        </Box>
        <Box sx={{ flex: 1 }}>
          <WeatherCard />
        </Box>
      </Box>
    </Box>
  );
};

export default ToDo;
