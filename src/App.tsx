import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cryptoInputWrap: {
    padding: '5px 10px',
    display: 'flex'
  },
  table: {
    minWidth: 650,
  },
  currencyInput: {
    minWidth: '75%'

  },
  currencyInputWrap: {
    padding: '5px 10px',
  },
  currencyType: {
    minWidth: '25%',
    position: 'relative',
    right: '-5px',
    top: '0'
  },
  currencyTypography : {
    marginTop : '10px'
  },
  currencyIcon: {
    width: '18px',
    height: '18px'
  }
}));

type Tcoin = {
  name: string,
  fullName: string,
  volume24Hour: number,
  imageUrl: string,
  price: number
}

function App() {
  const [allCoins, setAllCoins] = useState<Tcoin[]>([]);
  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) => {
      const coins: Tcoin[] = data.Data.map((coin: any) => {
        const obj: Tcoin = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          volume24Hour: coin.RAW.USD.VOLUME24HOUR,
          imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE
        }
        return obj;
      });
      setAllCoins(coins);
      console.log(data)
    })
  }, [])

  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={8}>
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
                {allCoins.map((coin: any) => (
                  <TableRow key={coin.name}>
                    <TableCell component="th" scope="row" >
                      <img src={coin.imageUrl} alt="Icon" className={classes.currencyIcon} />
                    </TableCell>
                    <TableCell align="right">{coin.name}</TableCell>
                    <TableCell align="right">{coin.fullName}</TableCell>
                    <TableCell align="right">{coin.price}</TableCell>
                    <TableCell align="right">{coin.volume24Hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <div className={classes.currencyInputWrap}>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="Сумма" />
              </FormControl>

              <FormControl className={classes.currencyType}>
                <InputLabel shrink>Валюта</InputLabel>

                <Select
                  value={0} >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

            </div>
          </Paper>
          <Paper>
            <div className={classes.currencyInputWrap}>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="Сумма" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel shrink>Валюта</InputLabel>
                <Select
                  value={0} >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Typography className={classes.currencyTypography} variant="h5" component="h5">
                77.81 Российский рубль</Typography>
            </div>

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
