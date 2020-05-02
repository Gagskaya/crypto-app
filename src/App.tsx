import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
            
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
