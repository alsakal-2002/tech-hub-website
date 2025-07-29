import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function Post({ post }) {
  return (
    <Card 
      elevation={3} 
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)'
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{ 
            fontWeight: 'medium',
            color: 'primary.main' 
          }}
        >
          {post.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
