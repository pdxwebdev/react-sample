import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


/**
 * Gallery component is used for...
 */
class Gallery extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    return (
      <gallery
        className={className}
        style={props.style}
      >
        {props.children}
      </gallery>
    );
  }
}


Gallery.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Gallery.defaultProps = {
};


export default Gallery;
