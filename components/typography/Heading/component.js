import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


class Heading extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      styles[props.kind],
      props.className,
    );
    return (
      <heading
        className={className}
        style={props.style}
      >
        {props.children}
      </heading>
    );
  }
}


Heading.propTypes = {
  kind: PropTypes.string,
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Heading.defaultProps = {
};


export default Heading;
