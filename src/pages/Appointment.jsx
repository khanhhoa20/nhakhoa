import { Card, CardContent, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useState } from 'react';


// data giả
function createData(ten, sdt, date, time) {
    return { ten, sdt, date, time };
}

const rows = [
    createData('Sơn', "0123456789", "2/9/2021", "Sáng"),
    createData('Tài', "7896541230", "3/9/2022", "Chiều"),
    createData('Khôi', "9874563210", "4/9/2022", "Sáng"),
];

const Appointment = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);

    };

    return (
        <Container>
            <Stack spacing={6.8}>

                <Typography variant='h5'>Danh sách đặt khám</Typography>

                <Card square={true} sx={{ boxShadow: 'none' }} >
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow hover>
                                <TableCell align='center'>Tên</TableCell>
                                <TableCell align='center'>Số điện thoại</TableCell>
                                <TableCell align='center'>Ngày đặt hẹn</TableCell>
                                <TableCell align='center'>Giờ hẹn</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                :
                                rows).map((row, i) => (
                                    <TableRow key={i} hover >
                                        <TableCell align='center'>{row.ten}</TableCell>
                                        <TableCell align='center'>{row.sdt}</TableCell>
                                        <TableCell align='center'>{row.date}</TableCell>
                                        <TableCell align='center'>{row.time}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[1, 2, 3, { label: 'All', value: -1 }]}
                                    // colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    labelRowsPerPage='Số hàng trên trang'
                                    showFirstButton
                                    showLastButton
                                    labelDisplayedRows={({ from, to, count }) =>
                                        (`${from}–${to} của ${count !== -1 ? count : `nhiều hơn ${to}`}`)}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}

                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Card>

            </Stack>
        </Container>
    )
}

export default Appointment