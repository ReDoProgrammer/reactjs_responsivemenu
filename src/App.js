import './App.css';
import { Menu, Drawer } from 'antd';
import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: '100vh', backgroundColor: "rgb(0,150,255)" }}>
      <Navbar />
      <Drawer
        open={openMenu}
        onClose={() => {
          setOpenMenu(true);
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
