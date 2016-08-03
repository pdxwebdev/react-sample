import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';


/**
 * <%= componentName %> component is used for...
 */
class <%= componentName %> extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    return (
      <<%= componentName.toLowerCase() %>
        className={className}
        style={props.style}
      >
        <%= componentName %>
        {props.children}
      </<%= componentName.toLowerCase() %>>
    );
  }
}


<%= componentName %>.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


<%= componentName %>.defaultProps = {
};


export default <%= componentName %>;
