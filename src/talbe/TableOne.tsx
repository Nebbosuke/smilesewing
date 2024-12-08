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
import CalcWinSize from "../component/CalcWinSize";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#F15A24",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#F15A24",
  },
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   backgroundColor: "#FFF9E5",
// }));

const TableOne = () => {
  return (
    <div className="text-center mt-5 ">
      <div className="text-lg font-bold mb-1 text-gray-700">
        自由レッスン料金
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <StyledTableCell align="right">
                {CalcWinSize() === "s" ? (
                  <>
                    <p>２時間</p>
                    <p>コース</p>
                  </>
                ) : (
                  <>２時間コース</>
                )}
              </StyledTableCell>
              <StyledTableCell align="right">
                {CalcWinSize() === "s" ? (
                  <>
                    <p>３時間</p>
                    <p>コース</p>
                  </>
                ) : (
                  <>３時間コース</>
                )}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>
                {CalcWinSize() === "s" ? (
                  <>
                    <p>１回</p>
                    <p>/ 月</p>
                  </>
                ) : (
                  <>１回 / 月</>
                )}
              </StyledTableCell>
              <TableCell align="right">3,500円</TableCell>
              <TableCell align="right">5,200円</TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                {CalcWinSize() === "s" ? (
                  <>
                    <p>４回</p>
                    <p>/ 月</p>
                  </>
                ) : (
                  <>４回 / 月</>
                )}
              </StyledTableCell>
              <TableCell align="right">
                <p>13,500円</p>
              </TableCell>
              <TableCell align="right">
                <p>20,500円</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableOne;
