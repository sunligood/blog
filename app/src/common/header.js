import React, {Component} from 'react';
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";

class Apps extends Component {
  render () {
    return (
      <div className="App">
      {/* <DatePicker /> */}
      <Button type="primary" style={{ marginLeft: 8 }}>
        header
      </Button>
    </div>
    )
  }
}
export default Apps;
