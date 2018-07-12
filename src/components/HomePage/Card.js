import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Card extends Component {
  render() {
    const { classes } = this.props;
    return (
    //<Card >
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {}
});

export default withStyles(styles)(Card);
