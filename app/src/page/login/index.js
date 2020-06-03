import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from '../../common/header'

class Apps extends Component {
  render () {
    return (
      <div>11111</div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Apps></Apps>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
