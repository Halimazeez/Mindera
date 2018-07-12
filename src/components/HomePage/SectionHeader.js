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
    fontWeight: 500,
    fontSize: '2.5em',
    marginBottom: theme.spacing.unit * 2
  },
  subheader: {
    maxWidth: 645,
    textAlign: 'center',
    letterSpacing: 1.8,
    margin: 'auto',
    textTransform: 'uppercase',
    marginBottom: theme.spacing.unit * 4
  }
});

export default withStyles(styles)(SectionHeader);
