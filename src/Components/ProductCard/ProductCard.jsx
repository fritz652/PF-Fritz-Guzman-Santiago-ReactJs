import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import './ProductCard.css';

const ProductCard = ({ item }) => {
  return (
    <Link to={`/itemDetail/${item.id}`}>
            <Card sx={{ maxWidth: 345 }} className="cardBox" >
              <CardMedia
                sx={{ height: 220 }}
                image={item.img}
                title="Imagen zapatilla"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body" color="text.secondary">
                S/.{item.price}
              </Typography>
            </CardContent>
            <CardActions>
              {item.stock > 0 ? (
                <Link to={`/itemDetail/${item.id}`}>
                  <Button size="small" variant="outlined">
                    Ver detalle
                  </Button>
                </Link>
              ) : (
                <Button variant="contained" disabled>
                  Sin stock
                </Button>
              )}
            </CardActions>
          </Card>
    </Link>
  );
};

export default ProductCard;
