import React, { Component } from 'react';
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import './index.scss'

class Header extends Component {
	render() {
		return (
			<div className="comm-header">
				<Row gutter={20}>
					<Col span={4}>
						<img src={require('../../../public/logo192.png')} width='50px' />
					</Col>
					<Col span={20}>
						<ul>
							<li>1</li>
							<li>1</li>
							<li>1</li>
							<li>1</li>
							<li>1</li>
						</ul>
					</Col>
				</Row>
			</div>
		)
	}
}
export default Header;
