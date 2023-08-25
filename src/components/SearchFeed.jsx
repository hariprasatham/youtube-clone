import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box, Typography} from '@mui/material'

import { Videos }from './'

import {fetchFromAPI} from '../utils/fetchFromAPI'


const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items)})
  },[searchTerm])


  return (
    <Box p={2} sx={{overflowY: 'auto',ml: '100px' , height: '90vh', flex: 2}}>
        <Typography variant='h4' mb={2} fontWeight='bold' color='white'>
          Search Results for: <span style={{color: '#F31503'}}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed