import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Posts = () => {
  const myCards = [
    {
      letter: "E",
      color: "#FF3EA5",
      userName: "Eya Yousfi",
      title: "New Flutter Music App UI 🎵",
      description:
        "Just finished designing a sleek and modern music app UI with Flutter & Material 3! What do you think? Feedback is welcome! 😃",

      imgLink: "/images/musicApp.jpg",
      date: "August 10, 2024",
    },

    {
      letter: "S",
      color: "teal",
      userName: "SarahUX",
      title: "Looking for a React Developer 👨‍💻",
      description:
        "I'm working on a new SaaS project and need a skilled React developer to collaborate with. DM me if interested!",
      imgLink: "/images/react.jpg",
      date: "August 15, 2024",
    },
  ];

  return (
    <Box sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card sx={{ maxWidth: 444, mx: "auto", my: 5 }} key={item.title}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: item.color }} aria-label="user">
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader={item.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" color="text.primary">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Posts;
