import React from 'react'

import {VideoCard, ChannelCard} from './'

import { Stack, Box } from '@mui/material'


const Videos = ({videos, direction}) => {
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item, idx)=>(
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetails={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos