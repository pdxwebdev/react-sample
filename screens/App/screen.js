import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';

// layout
import Header from 'components/layout/Header';
import Navigation from 'components/layout/Navigation';
import NavigationLink from 'components/layout/NavigationLink';
import Main from 'components/layout/Main';
import Content from 'components/layout/Content';
import Aside from 'components/layout/Aside';
import Footer from 'components/layout/Footer';


class App extends Component {
  render() {
    const props = this.props;
    return (
      <app>
        <Header />
        <Main>
          <Navigation>
            <NavigationLink name="Home" link="/home" />
            <NavigationLink name="Photography" link="/photography" />
            <NavigationLink name="Digital" link="/digital" />
            <NavigationLink name="Artwork" link="/artwork" />
            <NavigationLink name="About" link="/about" />
          </Navigation>
          <Content>{props.content}</Content>
          <Aside>{props.aside}</Aside>
        </Main>
        <Footer />
      </app>
    );
  }
}

App.propTypes = {
  content: PropTypes.element,
  aside: PropTypes.element,
};


export default App;
