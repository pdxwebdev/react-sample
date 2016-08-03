import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import styles from './styles.scss';


class NavigationLink extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.active && styles.active,
      props.hover && styles.hover,
      props.className,
    );
    return (
      <navigationlink
        className={className}
        style={props.style}
      >
        <Link
          to={props.link}
          activeClassName={styles.active}
        >
          {props.name}
        </Link>
      </navigationlink>
    );
  }
}


NavigationLink.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
  active: PropTypes.bool,
  hover: PropTypes.bool,
  link: PropTypes.string,
  name: PropTypes.string,
};


NavigationLink.defaultProps = {
};


export default NavigationLink;
