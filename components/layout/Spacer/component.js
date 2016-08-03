import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


class Spacer extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      styles[props.kind],
      styles[props.size],
      props.className,
    );
    return (
      <spacer
        className={className}
        style={props.style}
      />
    );
  }
}


Spacer.propTypes = {
  kind: PropTypes.string,
  size: PropTypes.string,
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Spacer.defaultProps = {
  kind: 'vertical',
  size: 'medium',
};


export default Spacer;
