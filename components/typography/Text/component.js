import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


class Text extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      styles[props.kind],
      props.className,
    );
    return (
      <span
        className={className}
        style={props.style}
      >
        {props.children}
      </span>
    );
  }
}


Text.propTypes = {
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


Text.defaultProps = {
  kind: 'primary',
};


export default Text;
