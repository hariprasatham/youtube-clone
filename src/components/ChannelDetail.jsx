import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])




  const { id } = useParams()

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: "linear-gradient(to right, #00fff5, #00e8ff, #00c7ff, #3193ff, #e900ff)",
          zIndex: 10,
          height: 300
          }}
          />
          <ChannelCard channelDetails={channelDetail} marginTop="-110px" />
      </Box>
      <Box display='flex' p={2}>
        <Box sx={{mr:{sm: '100px'}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail