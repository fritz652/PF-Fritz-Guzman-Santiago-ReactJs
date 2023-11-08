import ProductCard from "../../Components/ProductCard/ProductCard";
import { Box, Grid } from "@mui/material";

function ItemList({ items }) {
  console.log(items);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ display: "flex", gap: "50px" }}
          item
          xs={12}
          container
          justifyContent="center"
        >
          {items.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ItemList;
