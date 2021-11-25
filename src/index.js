import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import AppContent from './AppContent';
import AppHeader  from './AppHeader';
import AppFooterFunctionalComponent from './AppFooterFunctionalComponent';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = { posts: [] };
  }

  handlePostChange(posts) {
    this.setState( {posts: posts} );
  }

  //every react component must have one function called render
  render() {
    const appProps = {
      title:"My first React app",
      subtitle:"A simple app",
      subject:"This app is built on React and is very simple."
    }

    return (
      
      <div className="app">

          <AppHeader { ...appProps } posts={this.state.posts} handlePostChange={this.handlePostChange} />
          <AppContent { ...appProps } posts={this.state.posts} handlePostChange={this.handlePostChange} />
          <AppFooterFunctionalComponent name={"Altenburger Jessica"} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))