import React from 'react'
import Box from '@mui/material/Box'
import Chapter01 from './Chapter01'

export default function AppChapters(props) {
    
    return (
      <Box sx={{ width: '100%' }}>
        {props.index = 1 &&  <Chapter01 init={props.init.requisites} />}
      </Box>
    )
  }