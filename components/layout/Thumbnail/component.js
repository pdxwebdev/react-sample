import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


/**
 * Thumbnail component is used for...
 */
class Thumbnail extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      styles[props.size],
      props.className,
    );
    return (
      <thumbnail
        className={className}
        style={props.style}
      >
        <a
          style={{
            backgroundImage: `url(media/${props.img})`,
          }}
        />
        <thumbnail-mask />
        <name>{props.name}</name>
        <price>{props.price}</price>
        <description>{props.description}</description>
      </thumbnail>
    );
  }
}


Thumbnail.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
  img: PropTypes.string.isRequired,
  size: PropTypes.string,
};


Thumbnail.defaultProps = {
  size: 'large',
};


export default Thumbnail;
