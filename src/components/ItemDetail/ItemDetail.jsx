import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

export default function ActionAreaCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={product.images}
          alt="gren iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${product.price}
            <Typography />
            <Button variant="contained" color="success">
              Success
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
