import React, { Component } from 'react';
import actions from './actions/index.js';
import { connect } from 'react-redux';

import './less/index.css';

import data from './data.json';
import MainPage from './components/MainPage.js';
import Overall from './components/Overall.js';
import Dashboard from './components/Dashboard.js';
import About from './components/About.js';

const mapStateToProps = (state) => {
  return {
    page: state.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (name) => {
      dispatch(actions.setPage(name));
    },
    setYear: (year) => {
      dispatch(actions.setYear(year));
    },
    setCharity: (charity) => {
      dispatch(actions.setCharity(charity));
    }
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.routingManipulator(null, props);
    window.onpopstate = this.routingManipulator.bind(this);
  }

  routingManipulator(event, props = this.props) {
    let menuStrings = window.location.pathname.split('/');
    if(menuStrings[1]) {
      props.setPage(menuStrings[1]);

      if(menuStrings[2]) {
        const found = data.foundations.find((a) => a.n === menuStrings[2]);
        if(found) {
          props.setCharity(menuStrings[2]);
        }
      }
    } else {
      props.setPage("home");
    }
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
