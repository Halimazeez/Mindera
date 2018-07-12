import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Section extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.sectionMain}>{this.props.children}</div>;
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  sectionMain: {
    textAlign: 'center'
  }
});

export default withStyles(styles)(Section);
