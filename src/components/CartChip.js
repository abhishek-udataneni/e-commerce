import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
});

function CartChip(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container justify="between" alignItems="center"> 

          <Grid item xs="12"><Typography gutterBottom variant="h6">Fantastic Beasts and Where to Find Them</Typography></Grid>
          <Grid container alignItems="center" item xs="12">
            
            <Typography variant="h6" color="textPrimary">Quantity : 2</Typography>
            <RemoveCircleOutline />
            <AddCircleOutline />
          </Grid>
          <Grid item xs="12"><Typography gutterBottom variant="h6">price:$4.50</Typography></Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
    </div>
  );
}

export default withStyles(styles)(CartChip);
