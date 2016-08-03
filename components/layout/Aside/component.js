import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import Spacer from 'components/layout/Spacer';

import styles from './styles.scss';


class Aside extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.children && styles.active,
      props.className,
    );
    return (
      <aside
        className={className}
        style={props.style}
      >
        <wrapper>
          <content>
            {props.children}
            <Spacer kind="vertical" size="medium" />
          </content>
        </wrapper>
      </aside>
    );
  }
}


Aside.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Aside.defaultProps = {
};


export default Aside;
