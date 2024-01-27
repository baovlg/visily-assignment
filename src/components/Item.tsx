import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Paper, Avatar, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  form: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "284px",
    maxWidth: "100%",
    margin: "6px auto",
    padding: "1px",
  },
  image: {
    aspectRatio: "2.13",
    objectFit: "contain",
    objectPosition: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "3.5px",
    paddingRight: "20px",
    paddingTop: "5px",
    paddingBottom: "2.5px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down("md")]: {
      paddingRight: "5px",
    },
  },
  heading: {
    color: theme.palette.text.primary,
    fontSize: "1.75rem",
    fontWeight: theme.typography.fontWeightBold,
    whiteSpace: "nowrap",
  },
  note: {
    color: theme.palette.text.secondary,
    fontSize: "1.75rem",
    whiteSpace: "nowrap",
  },
}));

function NewComponent() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.form}>
      <Avatar
        alt="Visily"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
        className={classes.image}
      />
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          Welcome to Visily
        </Typography>
        <Typography variant="body1" className={classes.note}>
          2 days ago
        </Typography>
      </Box>
    </Paper>
  );
}
