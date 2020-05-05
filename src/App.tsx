  import React from 'react';
  import Container from '@material-ui/core/Container';
  import { makeStyles } from '@material-ui/core/styles';
  import Paper from '@material-ui/core/Paper';
  import Grid from '@material-ui/core/Grid';
  import TextField from '@material-ui/core/TextField';
  import MenuItem from '@material-ui/core/MenuItem';
  import Select from '@material-ui/core/Select';
  import FormControl from '@material-ui/core/FormControl';
  import InputLabel
    from '@material-ui/core/InputLabel';




  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cryptoInputWrap : {
      padding : '5px 10px',
      display : 'flex'
    },

    currencyInput: {
      minWidth: '30%',
      // marginBottom : '10px'

    },
    currencyType: {
      minWidth : '25%',
      position : 'relative',
      right : '-5px',
      top : '0'
    },
  }));

  function App() {
    const classes = useStyles();

    return (
      <Container maxWidth="lg" className={classes.root} >
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper>

            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <div className={classes.cryptoInputWrap}>
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
              <div className={classes.cryptoInputWrap}>
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
          </Grid>
        </Grid>
      </Container>
    );
  }

  export default App;
