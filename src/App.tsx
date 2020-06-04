import React, { useEffect } from 'react';
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
import { CryptoTable } from './components/CryptoTable';
import { TCoin } from './types'
import { connect } from 'react-redux'
import { setCoins } from './actions/setCoins'


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
  currencyTypography: {
    marginTop: '10px',
    textAlign: 'center',
    padding: '5px'
  },
  currencyIcon: {
    width: '18px',
    height: '18px'
  }
}));



const App = (props: any) => {
  const { items, setCoins } = props;
  console.log(props)
  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) => {
      console.log(data)
      const coinsData: TCoin[] = data.Data.map((coin: any) => {
        const obj: TCoin = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
          price: parseInt(coin.RAW.USD.PRICE)
        }
        return obj;
      });
      setCoins(coinsData);
    })
  }, [setCoins])

  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CryptoTable items={items} classes={classes} />
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
                  value={20}>
                  {
                    items && items.map((item: TCoin, index : number) => <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                    )
                  }
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
                  value={20}>
                  {
                    items && items.map((item: TCoin, index : number) => <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                    )
                  }
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
const mapStateToProps = (state: any) => ({
  items: state.coins.items
})
export default connect(mapStateToProps, { setCoins })(App);
