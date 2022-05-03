import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories) {
//   return { name, calories};
// }

// const rows = [
//   createData('Frozen yoghurt', 159),
//   createData('Ice cream sandwich', 237),
//   createData('Eclair', 262, 16.0),
//   createData('Cupcake', 305),
//   createData('Gingerbread', 356),
// ];

export default function ProductSpec({specific}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Xüsusiyyətlər</TableCell>
            <TableCell align="right">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {specific.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
