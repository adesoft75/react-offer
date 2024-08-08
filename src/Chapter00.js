import * as React from 'react'
import Collapse from '@mui/material/Collapse'
import NavigateNext from '@mui/icons-material/NavigateNext'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
        <TableCell >
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"> {row.name} </TableCell>
        <TableCell align="right">{row.duration + " " + row.durationUnit} </TableCell>
        <TableCell align="right">{row.value}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit >
            <TableBody >
              {props.rows.filter((row) => row.parent === props.index).map((row) => (
                <TableRow key={row.num}>
                  <TableCell>
                    <IconButton size="small" >
                      <NavigateNext/>
                    </IconButton>  
                  </TableCell>
                  <TableCell component="th" scope="row"> {row.name} </TableCell>
                  <TableCell align="right">{row.duration + " " + row.durationUnit}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

function CollapsibleTable(props) {
  const rows = props.items
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
          <TableCell />
            <TableCell><h3>Наименование разделов, объектов, работ и затрат</h3></TableCell>
            <TableCell align="right"><h3>Срок выполнения работ</h3></TableCell>
            <TableCell align="right"><h3>Стоимость, Рубли без НДС</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter((row) => row.parent == 0).map((item) => (
            <Row key={item.num} index={item.num} row={item} rows={props.items} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function Chapter00(props) {
    const items = props.init
    return (
      <div>
        <CollapsibleTable items={items} />
      </div>
    )
  }