import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


class Columns extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    return (
      <columns
        className={className}
        style={props.style}
      >
        {props.children}
      </columns>
    );
  }
}


Columns.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Columns.defaultProps = {
};


export default Columns;
