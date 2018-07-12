import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { cdata } from './componentdata';

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    console.log(JSON.stringify(cdata.main));
    return (
      <Grid container justify="center" className={classes.cardroot}>
        {cdata.main.map((num, i) => (
          <Grid item spacing="8">
            <Card key={i} className={classes.card}>
              <CardHeader
                classes={{ title: classes.cardtitle }}
                title={num[1]}
                className={classes.cardbg}
              />
              <CardContent className={classes.cardcontentbg}>
                <Typography className={classes.cardcontent}>
                  {num[2]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object
};

const styles = theme => ({
  card: {
    maxWidth: 420,
    margin: 12
  },
  cardroot: {
    //display: 'flex',
    //flexDirection: 'column'
  },
  cardtitle: {
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: 1.8
  },
  cardbg: {
    backgroundColor: '#f5f5f5',
    height: 70
  },
  cardcontent: {
    fontSize: 16
  },
  cardcontentbg: {
    paddingTop: 24,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 2
  }
});

export default withStyles(styles)(Portfolio);
