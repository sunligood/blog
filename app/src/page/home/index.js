import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from '../../common/header/index'

class Home extends Component {
  render() {
    return (
      <div className='content'>

      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
