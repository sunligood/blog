import React, { Component } from 'react';
import { Button } from "antd";
import "antd/dist/antd.css";

class Apps extends Component {
  render() {
    return (
      <div className="App">
        {/* <DatePicker /> */}
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
      </Button>
      </div>
    )
  }
}
export default Apps;
