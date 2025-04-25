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
  },
}));

type PriceTableProps = {
  rows: { title: string; data: { [K: string]: string } }[];
};

const PriceTable: React.FC<PriceTableProps> = ({ rows }) => {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-5">
      {rows.map((row, key) => (
        <div className="text-center mt-5 w-11/12 sm:w-3/5" key={key}>
          <div className="text-lg font-bold mb-1 text-gray-700">
            {row.title}
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>加工内容</StyledTableCell>
                  <StyledTableCell align="right">税込価格</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(row.data).map((rowData, rowKey) => (
                  <TableRow key={rowKey}>
                    <TableCell>
                      <div className="font-bold">{rowData}</div>
                    </TableCell>
                    <TableCell align="right">{row.data[rowData]}円～</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </main>
  );
};

export default PriceTable;
