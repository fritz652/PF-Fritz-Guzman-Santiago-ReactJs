import { ThemeProvider } from "@emotion/react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import Rating from "./BasicRating";

//colors theme
import customTheme from "../themeConfig";

function CardProduct() {
  return (
    <ThemeProvider theme={customTheme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <Rating />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" color={"primary"}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" color={"secondary"}>
            .
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default CardProduct;
