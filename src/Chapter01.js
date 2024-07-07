import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

function ComboBox(props) {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    );
  }

export default function Chapter01(props) {

    return (
      <div>
      {console.log(props)}
      <ComboBox options={props.init[0].v0001} >
      </ComboBox>
      <ComboBox options={props.init[0].v0002} >
      </ComboBox>
      </div>
    )
  }