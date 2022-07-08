import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

// import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const Body = () => {
  // const classes = useStyles();

  return (
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            colort="textPrimary"
            gutterBottom
          >
            Photo Album
          </Typography>

          <Typography
            variant="h5"
            align="center"
            colort="textSecondary"
            paragraph
          >
            Hello, this is a photo album and im trying to make a sentence very
            long in english and i dk what to write in here
            lalalalalalalalalalaalalal
          </Typography>

          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary Action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Body;
