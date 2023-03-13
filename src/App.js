import './App.css';
import { Menu, Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: '100vh', backgroundColor: "rgb(0,150,255)" }}>
      <div style={{ backgroundColor: "white", padding: "12px 0 0 12px", fontSize: 18 }}>
        <MenuOutlined onClick={() => {
          setOpenMenu(true);
        }} />
      </div>
      <Navbar />
      <Drawer
        placement='left'
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        style={{ border: "none" }}
      >
        <Navbar isInline />
      </Drawer>
    </div>
  );
}

function Navbar({ isInline = false }) {
  return (
    <Menu
      style={{ fontSize: 18, fontWeight: "bold" }}
      mode={isInline ? 'inline' : 'horizontal'}
      items={[
        {
          label: "Home",
          key: "home"
        },
        {
          label: "Inventory",
          key: "inventory"
        },
        {
          label: "Orders",
          key: "orders"
        },
        {
          label: "Customers",
          key: "customers"
        }
      ]}
    ></Menu>
  );
}

export default App;
