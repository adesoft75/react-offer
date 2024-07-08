import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

function ComboBox(props) {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.options}
        sx={{ width: 300, mb: 1 }}
        renderInput={(params) => <TextField {...params} label={props.name} />}
      />
    );
  }

export default function Chapter01(props) {
    const reqs = props.init
    return (
      <div>
        {reqs.map((req, index) => {
          return(
            <ComboBox options={reqs[index].variants} name={reqs[index].name} key={index} >
            </ComboBox>  
          )
        })}
      </div>
    )
  }