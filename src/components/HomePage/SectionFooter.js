import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SectionFooter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sectionFooter}>
        <span className={classes.italic}>{this.props.italic}</span>

        <Button className={classes.Button} variant="outlined">
          {this.props.buttontext}
        </Button>

        {this.props.children}
      </div>
    );
  }
}

SectionFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  sectionFooter: {
    display: 'inline-block'
  },
  italic: {
    fontSize: 12,
    fontStyle: 'italic'
  },
  subheader: {
    maxWidth: 600,
    textAlign: 'center',
    margin: 'auto'
  },
  Button: {
    margin: 12,
    border: '2px solid #171717',
    borderRadius: 0,
    color: '#171717',
    borderColor: '#171717',
    fontWeight: 600,
    '&:hover': {
      color: '#ff3b00',
      borderColor: '#ff3b00',
      backgroundColor: '#fff',
      borderRadius: 0
    }
  }
});

export default withStyles(styles)(SectionFooter);
