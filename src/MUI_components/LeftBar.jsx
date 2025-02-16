import { Box, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const itemData = [
  { img: '/images/proj1.jpg', title: 'Image 1' },
  { img: '/images/proj2.jpg', title: 'Image 2' },
  { img: '/images/proj3.png', title: 'Image 3' },
];

const showLG = { xs: "none", lg: "block" };

const RightBar = ({ theme }) => {
  return (
    <Box
      sx={{
        display: showLG,
        flexGrow: "auto",
        bgcolor: theme.palette.favColor.main,
        pl: 2,
      }}
      component="section"
    >
      {/* Online Friends Section */}
      <Typography sx={{ fontWeight: 300 }} mt={2} variant="h6">
        Online Professionals
      </Typography>
      <AvatarGroup sx={{ justifyContent: "center", my: 2 }} total={24}>
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="John Developer"
          src="https://images.pexels.com/photos/3662979/pexels-photo-3662979.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Jane Designer"
          src="https://images.pexels.com/photos/1516196/pexels-photo-1516196.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Sara Developer"
          src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Mark Designer"
          src="https://images.pexels.com/photos/5951914/pexels-photo-5951914.jpeg"
        />
      </AvatarGroup>

      {/* Latest Projects Section */}
      <Typography sx={{ fontWeight: 300 }} my={2} variant="h6">
        Latest Projects
      </Typography>
      <ImageList
        gap={10}
        sx={{ width: 500, height: 160, overflowY: "hidden" }}
        cols={3}
        rowHeight={99}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ borderRadius: "5px" }}
              src={item.img} // Dynamically use the image path from the item
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} // Dynamic srcSet for responsive loading
              alt={item.title} // Use the title for alt text
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Latest Conversations Section */}
      <Typography sx={{ fontWeight: 300 }} mb={1} mt={4} variant="h6">
        Latest Conversations
      </Typography>
      <List sx={{ width: "100%", maxWidth: 488, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="John Developer"
              src="https://images.pexels.com/photos/7365020/pexels-photo-7365020.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Looking for feedback on my latest app"
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                John Developer — Can anyone suggest improvements for this app?
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Sara Developer"
              src="https://images.pexels.com/photos/8669022/pexels-photo-8669022.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Looking for a React Expert"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sara UX — I'm starting a new project and need a React developer.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Mark Designer"
              src="https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="New Web Design for Client"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Mark Designer — Finished the new web design for a client.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default RightBar;
