import { ShoppingCartOutlined, ArrowRightOutlined, HomeOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {  useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/headerStyle.css'; 
import { GamepadOutlined } from '@material-ui/icons';

const Header = () => {
  const [current, setCurrent] = useState('l');
  const userData = JSON.parse(localStorage.getItem('userData'));



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
        <Menu.Item key="p" icon={<UserOutlined style={{ fontSize: '24px' }} />}>
          <Link to="/profile">Perfil</Link>
        </Menu.Item>
        {userData.type === 'admin' ? (
        <div>
        <Menu.Item key="g" icon={<GamepadOutlined style={{ fontSize: '24px' }} />} className="ml-auto-md">
          <Link to="/registerGameBoard">Cadastrar Jogo</Link>
        </Menu.Item>
        <Menu.Item key="t" icon={<UserAddOutlined style={{ fontSize: '24px' }} />} className="ml-auto-md">
        <Link to="/usersTable">Usuários</Link>
      </Menu.Item>
      </div>
      
) : null}

        <Menu.Item key="/" icon={<ArrowRightOutlined style={{ fontSize: '24px' }} />} className="ml-auto-md">
          <Link to="/" onClick={()=>{
            localStorage.removeItem('userData');
          }}>Sair</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Header;
