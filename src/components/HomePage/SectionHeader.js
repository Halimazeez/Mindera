import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SectionHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.header} variant="title">
          {this.props.title}
        </Typography>

        <Typography
          className={classes.subheader}
          variant="subheading"
          color="inherit"
        >
          {this.props.subheader}
        </Typography>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  header: {
    fontWeight: 700,
    fontSize: '3.3em',
    marginBottom: theme.spacing.unit * 3,
    '@media screen and (max-width: 760px)': {
      fontSize: '1.6em'
    },
    '@media screen and (max-width: 1024px) and (min-width: 760px)': {
      fontSize: '2.25em'
    }
  },
  subheader: {
    maxWidth: 645,
    fontWeight: 350,
    textAlign: 'center',
    letterSpacing: 1.8,
    margin: 'auto',
    textTransform: 'uppercase',
    marginBottom: theme.spacing.unit * 7
  }
});

export default withStyles(styles)(SectionHeader);
