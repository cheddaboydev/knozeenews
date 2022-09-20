import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReadMore, Share } from '@mui/icons-material';

export default function HomeCard({article}) {
  return (
    <Card >
      <CardMedia
        component="img"
        height="140"
        image={article.urlToImage}
        alt="image"
      />
      <CardContent>
        <Typography sx={{fontWeight: 'bold'}}>
            {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<Share />} size="small">Share</Button>
        <Button variant="contained" color="secondary" startIcon={<ReadMore />} size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
