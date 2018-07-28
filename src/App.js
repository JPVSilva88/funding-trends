import React, { Component } from 'react';
import { connect } from 'react-redux';

import './less/index.css';

import MainPage from './components/MainPage.js';
import Overall from './components/Overall.js';
import Dashboard from './components/Dashboard.js';
import About from './components/About.js';

const mapStateToProps = (state) => {
  return {
    page: state.page
  };
};

class App extends Component {
  render() {
    var pageComponent;
    switch(this.props.page) {
      case "foundation":
        pageComponent = <Dashboard/>;
        break;
      case "overall":
        pageComponent = <Overall/>;
        break;
      case "about":
        pageComponent = <About/>;
        break;
      default:
        pageComponent = <MainPage/>;
        break;
    }

    return (
      <div className="App">
        {pageComponent}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
