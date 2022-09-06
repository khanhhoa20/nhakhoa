import { Box, Button, Card, Container, Icon, IconButton, InputAdornment, Paper, Stack, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';
import { BiSearchAlt2 as Search, BiCheckCircle } from 'react-icons/bi'

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

    const [value, setValue] = useState(dayjs());
    // console.log(value);
    let formattedDate = dayjs(value).format('DD/MM/YYYY');
    // console.log(formattedDate);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);

    };

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(searchTerm);
    }

    const [checkIn, setcheckIn] = useState(true);

    return (
        <Container>
            <Stack spacing={6.8}>

                <Typography variant='h5'>Danh sách đặt khám</Typography>
                <Stack direction='row'
                    // alignItems='center'
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Box sx={{ width: '250px' }}>
                        <DatePicker
                            label="ngày-tháng-năm"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            inputFormat="DD/MM/YYYY"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                        }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            sx={{ width: '250px' }}
                            variant="standard"
                            label="Tìm kiếm..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton type='submit' sx={{ color: '#4285f4' }}>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Stack>
                <Card square={true} sx={{ boxShadow: 'none' }}  >
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow hover>
                                <TableCell align='center'>Họ và tên</TableCell>
                                <TableCell align='center'>Số điện thoại</TableCell>
                                <TableCell align='center'>Ngày đặt hẹn</TableCell>
                                <TableCell align='center'>Buổi hẹn</TableCell>
                                <TableCell align='center'>Check in</TableCell>
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
                                        <TableCell align='center'>
                                            <Button>
                                                <BiCheckCircle color={checkIn ? 'green' : 'gray'} size='22px' />
                                                {/* {checkIn ? 'Đã check in' : 'Chưa check in'} */}
                                            </Button>
                                        </TableCell>
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
        </Container >
    )
}

export default Appointment