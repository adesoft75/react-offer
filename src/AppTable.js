import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(que, ans) {
  return { que, ans };
}

const rows = [
  createData('Субподрядчик', 'нет'),
  createData('Новая система', 'да')
];

export default function AppTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{width: "100%", height: "100%"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Выполнять работы по данному разделу</TableCell>            
            <TableCell align="right">да</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.que}
              </TableCell>                            
              <TableCell align="right">{row.ans}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>     
    </TableContainer>
  );
}