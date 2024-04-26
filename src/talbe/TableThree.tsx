import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  TableCell,
  tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#F15A24",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#F15A24",
    // backgroundColor: "#FFF9E5",
  },
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   backgroundColor: "#FFF9E5",
// }));

type TableTwoProps = {
  title: string;
};

const TableTwo: React.FC<TableTwoProps> = ({ title }) => {
  return (
    <div className="text-center mt-5 ">
      <div className="text-lg font-bold mb-1 text-gray-700">{title}</div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <StyledTableCell align="right">２時間コース</StyledTableCell>
              <StyledTableCell align="right">３時間コース</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>１回 / 月</StyledTableCell>
              <TableCell align="right">3,000円</TableCell>
              <TableCell align="right">4,500円</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableTwo;
