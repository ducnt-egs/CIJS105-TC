import { Flex, Input, Typography, Space, Switch, Radio, Dropdown, message, Button, ConfigProvider } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import "./App.css"

const { Text, Link } = Typography;
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const itemsMenuDropdown = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];


function App() {

  return (
    <>
      <div>
        <div className="general">
          <Text>Username</Text>
          <Input placeholder="Basic usage" />
        </div>
        <div className="general">
          <Text>Password</Text>
          <Input placeholder="Enter password" />

          <Text type="secondary">Your password is between 4 and 12 characters</Text>
        </div>
        <div className="general">
          <Text>Input Text Label</Text>
          <Input status="error" placeholder="Typing |" />

          <Text type="danger">Error message informing me of a problem</Text>
        </div>
        <div className="general">
          <input type="checkbox" /> <Text>Rememberme</Text>
        </div>
        <div className="general">
          <Switch defaultChecked onChange={onChange} />
          <Text className="switch">Off</Text>
        </div>
        <div className="general"><Radio>Radio selection 1</Radio></div>
        <div className="general"><Radio>Radio selection 2</Radio></div>
        <div className="general"><Radio>Radio selection 3</Radio></div>

        <Dropdown
          trigger={['hover']}
          menu={{
            items: itemsMenuDropdown
          }}

          className="general"
        >
          <button style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }}><span>Dropdown option </span> <DownOutlined /></button>
        </Dropdown>
        <div style={{ display: "flex", justifyContent: "space-between" }} className="general">
          <Button > Default Button</Button>
          <Button>Default Button</Button>
        </div>
      </div>
    </>
  )
}

export default App
