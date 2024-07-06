import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

function ComboBox(props) {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.variants[0].v0001}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    );
  }

export default function Chapter01(props) {
    const [value, setValue] = React.useState(0)
    const tabs = props.init.chapters

    return (
      <div>
        <ComboBox props = {props} >
        </ComboBox>
      </div>
    )
  }