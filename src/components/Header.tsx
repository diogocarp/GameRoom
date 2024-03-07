import { ShoppingCartOutlined, ArrowRightOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/headerStyle.css'; 

const Header = () => {
  const [current, setCurrent] = useState('l');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ height: '60px', fontSize: '20px', padding:'10px 0 10px 0' }}>
        <Menu.Item key="h" icon={<HomeOutlined style={{ fontSize: '24px' }} />}>
          <Link to="/home">Inicial</Link>
        </Menu.Item>
        <Menu.Item key="s" icon={<ShoppingCartOutlined style={{ fontSize: '24px' }} />}>
          <Link to="/store">Loja</Link>
        </Menu.Item>
        <Menu.Item key="/" icon={<ArrowRightOutlined style={{ fontSize: '24px' }} />} className="ml-auto-md">
          <Link to="/">Sair</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Header;
