import React from 'react';
import { Component } from 'react';

// layout
import Gallery from 'components/layout/Gallery';
import Thumbnail from 'components/layout/Thumbnail';


class Photography extends Component {
  render() {
    // const props = this.props;
    return (
      <photography>
        <Gallery>
          <Thumbnail
            img="4.jpg"
            size="large"
            name="Name of Piece"
            description="My description here..."
            price="$99.99"
          />
        </Gallery>
      </photography>
    );
  }
}


export default Photography;
