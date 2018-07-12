import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Section from '../components/HomePage/Section';
import SectionFooter from '../components/HomePage/SectionFooter';
import SectionHeader from '../components/HomePage/SectionHeader';
import Portfolio from '../components/HomePage/Portfolio';
import { withStyles } from '@material-ui/core/styles';

import { data } from '../components/HomePage/headingdata';

class HomePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Section>
          <SectionHeader
            title={data.headers[1]}
            subheader={data.subheaders[0]}
          />
          <Portfolio />
          <SectionFooter
            italic="By the way, we're hiring."
            buttontext="work with us"
          />
        </Section>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {}
});
export default withStyles(styles)(HomePage);
