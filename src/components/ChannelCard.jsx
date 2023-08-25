import { Link } from "react-router-dom";

import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetails, marginTop }) => (
  <Box sx={{ 
    boxShadow: "none", 
    borderRadius: "20px" ,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width:{ xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto',
    marginTop
    }}>
    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetails?.title}
          sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3'}}
        />
        <Typography variant='h6'>
          {channelDetails?.snippet?.title}
          <CheckCircle sx={{fontSize: 14, color: 'grey', ml: '5px'}} />
        </Typography>
        {
          channelDetails?.statistics?.subscriberCount && (<Typography>
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()}
          </Typography>)
        }
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
