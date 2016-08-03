import React from 'react';
import { Component } from 'react';

// layout
import Gallery from 'components/layout/Gallery';
import Thumbnail from 'components/layout/Thumbnail';


class Artwork extends Component {
  render() {
    // const props = this.props;
    return (
      <artwork>
        <Gallery>
          <Thumbnail
            img="2.jpg"
            size="large"
            name="Name of Piece"
            description="My description here..."
            price="$99.99"
          />
        </Gallery>
      </artwork>
    );
  }
}


export default Artwork;
