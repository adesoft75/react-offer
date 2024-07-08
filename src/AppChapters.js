import React from 'react'
import Box from '@mui/material/Box'
import Chapter00 from './Chapter00'
import Chapter01 from './Chapter01'

export default function AppChapters(props) {
    
    return (
      <Box sx={{ width: '100%' }}>
        {props.index === 0 && <Chapter00 init={props.init.items} />}
        {props.index === 1 && <Chapter01 init={props.init.requisites} />}
      </Box>
    )
  }