import './App.css';
import { Menu } from 'antd';

function App() {
  return (
    <div style={{ height: '100vh', backgroundColor: "rgb(0,150,255)" }}>
      <Menu
      style={{fontSize:18, fontWeight:"bold"}}
        mode='horizontal'
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
    </div>
  );
}

export default App;
