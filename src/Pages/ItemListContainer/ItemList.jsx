import ProductCard from "../../Components/ProductCard/ProductCard";
import { Box, Grid } from "@mui/material";

function ItemList({ items }) {
  console.log(items);
  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          {items.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ItemList;
