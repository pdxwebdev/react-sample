import React from 'react';
import { Component } from 'react';

// layout
import Gallery from 'components/layout/Gallery';
import Thumbnail from 'components/layout/Thumbnail';


class Digital extends Component {
  render() {
    // const props = this.props;
    return (
      <digital>
        <Gallery>
          <Thumbnail
            img="1.jpg"
            size="large"
            name="Name of Piece"
            description="My description here..."
            price="$99.99"
          />

          <Thumbnail
            img="2.jpg"
            size="small"
            name="Name of Piece"
            description="My description here..."
            price="$99.99"
          />
          <Thumbnail
            img="3.jpg"
            size="small"
            name="Name of Piece"
            description="My description here..."
            price="$99.99"
          />
        </Gallery>
      </digital>
    );
  }
}


export default Digital;
