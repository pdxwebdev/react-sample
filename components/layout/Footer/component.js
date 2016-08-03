import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import classnames from 'classnames';

import Columns from 'components/flexbox/Columns';
import Column from 'components/flexbox/Column';

import styles from './styles.scss';


class Footer extends Component {
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      props.className,
    );
    const year = new Date().getUTCFullYear();

    return (
      <footer
        className={className}
        style={props.style}
      >
        <Columns
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Column style={{ flexGrow: 0 }}>
            &copy; {year} Timothy Fischer. All rights reserved.
          </Column>
        </Columns>
      </footer>
    );
  }
}


Footer.propTypes = {
  /**
   * Add custom className
  */
  className: PropTypes.string,
  /**
   * Add custom inline styles
  */
  style: PropTypes.object,
};


Footer.defaultProps = {
};


export default Footer;
