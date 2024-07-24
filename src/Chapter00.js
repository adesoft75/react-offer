import * as React from 'react'
import Collapse from '@mui/material/Collapse'
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
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"> {row.name} </TableCell>
        <TableCell align="right">{row.duration} </TableCell>
        <TableCell align="right">{row.value}</TableCell>
      </TableRow>
      <TableRow sx={{border: 0}}>
        <TableCell style={{paddingBottom: 0, paddingTop: 0, border: 0}}>
        <Collapse sx={{border: 0}} in={open} timeout="auto" unmountOnExit>
              
                <TableBody sx={{border: 0}} >
                  {props.rows.filter((row) => row.parent == props.index).map((row) => (
                    <TableRow key={row.num}>
                      <TableCell component="th" scope="row"> {row.name} </TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell align="right">{row.duration}</TableCell>
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
            <TableCell>Наименование разделов, объектов, работ и затрат</TableCell>
            <TableCell align="right">Срок выполнения работ</TableCell>
            <TableCell align="right">Стоимость, Рубли без НДС</TableCell>
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