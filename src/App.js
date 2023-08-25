import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material'

import {NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components'

const App = () => (
    <Router>
        <Box sx={{ background: '#000' }}>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' exact element={<VideoDetail />} />
                <Route path='/channel/:id' exact element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
            </Routes>
        </Box>
    </Router>
)


export default App