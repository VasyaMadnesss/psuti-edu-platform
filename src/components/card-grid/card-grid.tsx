import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { Link } from "react-router";
import type { LinkCard } from "../../types/link-card";

interface CardGridProps {
  cardData: LinkCard[];
}

const CardGrid = ({ cardData }: CardGridProps) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {cardData.map((card) => (
          <Grid
            columns={3}
            key={card.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 4,
            }}
          >
            <Card
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Область клика (вся карточка) */}
              <CardActionArea
                component={Link}
                to={card.link}
                sx={{ flexGrow: 1 }}
              >
                {/* Изображение карточки */}
                <CardMedia
                  component="img"
                  height="160"
                  image={card.imageUrl}
                  alt={card.title}
                  sx={{
                    objectFit: "cover",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                />

                {/* Содержимое карточки */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>

                  {/* Теги/чипсы */}
                  <Box
                    sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}
                  >
                    {card.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardGrid;
