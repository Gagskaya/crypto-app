import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { TCoin } from '../../types'

interface ICryptoTable {
    items: TCoin[],
    classes: any
}
export const CryptoTable: React.FC<ICryptoTable> = ({ items, classes }) => {
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Icon</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">FullName</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">volume24Hour</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!items ? 'Загрузка...' : items.map((coin: any) => (
                        <TableRow key={coin.name}>
                            <TableCell component="th" scope="row" >
                                <img src={coin.imageUrl} alt="Icon" className={classes.currencyIcon} />
                            </TableCell>
                            <TableCell align="right">{coin.name}</TableCell>
                            <TableCell align="right">{coin.fullName}</TableCell>
                            <TableCell align="right">${coin.price}</TableCell>
                            <TableCell align="right">${coin.volume24Hour}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
