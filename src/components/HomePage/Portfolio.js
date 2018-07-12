import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { cdata } from './componentdata';

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    //console.log(JSON.stringify(cdata.main));
    return (
      <Grid container justify="center" className={classes.cardroot} spacing="8">
        {cdata.main.map((num, i) => (
          <Card key={i} className={classes.card} elevation={0} square>
            <CardHeader
              classes={{ title: classes.cardtitle }}
              title={num[1]}
              className={classes.cardbg}
            />
            <CardContent className={classes.cardcontent}>{num[2]}</CardContent>
            <Link to="#" className={classes.link}>
              <Button className={classes.button}>Learn More</Button>
            </Link>
          </Card>
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
    display: 'flex',
    flexDirection: 'column',
    margin: 12,
    border: '1px solid #f5f5f5'
  },
  cardroot: {
    flexWrap: 'nowrap',
    '@media screen and (max-width: 970px)': {
      flexWrap: 'wrap'
    }
  },
  cardtitle: {
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: 1.8
  },
  cardbg: {
    backgroundColor: '#f5f5f5',
    height: 70,
    padding: 48
  },
  cardcontent: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    lineHeight: '24px',
    flexGrow: 2
  },
  button: {
    borderTop: '1px solid #f5f5f5',
    padding: '16px !IMPORTANT',
    textTransform: 'uppercase',
    letterSpacing: '1.7px',
    width: '100%',
    color: '#ff3b00',
    fontWeight: 700,
    fontSize: 16
  },
  link: {
    textDecoration: 'none',
    color: '#ff3b00',
    fontWeight: 700,
    '&:hover': {
      color: '#171717'
    }
  }
});

export default withStyles(styles)(Portfolio);
