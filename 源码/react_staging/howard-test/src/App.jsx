import React from "react";
import { DatePicker, Button } from "antd";
import { AppleOutlined, SearchOutlined } from "@ant-design/icons";

function App() {
  const onChange = (d,ds) => {
    console.log(d);
    console.log(ds);
  };

  return (
    <div>
      App
      <button type="primary">Click Me</button>
      <Button type="primary">Click Me</Button>
      <Button type="link">Link Button</Button>
      <AppleOutlined />
      <Button icon={<SearchOutlined />}>Search</Button>
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default App;
