import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from '../../common/header/index';
import Banner from '../../common/banner/index';

class Home extends Component {
  render() {
    return (
      <div className='content'>
        <Banner></Banner>
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
