import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


class Rows extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    return (
      <rows
        className={className}
        style={props.style}
      >
        {props.children}
      </rows>
    );
  }
}


Rows.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Rows.defaultProps = {
};


export default Rows;
