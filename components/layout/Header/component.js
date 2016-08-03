import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


class Header extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    return (
      <header
        className={className}
        style={props.style}
      >
        Timothy Fischer
      </header>
    );
  }
}


Header.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Header.defaultProps = {
};


export default Header;
