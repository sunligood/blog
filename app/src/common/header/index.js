import React, { Component } from 'react';
import { Menu } from "antd";
import "antd/dist/antd.css";
import './index.scss'
const { SubMenu } = Menu
class Header extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     current: 'mail'
  //   }
  // }
  state = {
    current: 'home'
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="comm-header">
        <div className='wrap'>
          <div className='l'>
            <img src={require('../../../public/logo.png')} width='50px' />
          </div>
          <div className='r'>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="home">
                首页
              </Menu.Item>
              <Menu.Item key="app">
                Navigation Two
              </Menu.Item>
              <SubMenu title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
              </a>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}
export default Header;
