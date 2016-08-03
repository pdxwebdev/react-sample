import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


class NavigationHeading extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    return (
      <navigationheading
        className={className}
        style={props.style}
      >
        <name>{props.name}</name>
        <underline />
      </navigationheading>
    );
  }
}


NavigationHeading.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
  name: PropTypes.string,
};


NavigationHeading.defaultProps = {
};


export default NavigationHeading;
