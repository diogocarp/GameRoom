import { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';

interface Item {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartProps {
  cartItems: Item[];
  setCartItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export function Cart({ cartItems, setCartItems }: CartProps) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const itensAmount = cartItems.reduce((total, item) => total + item.price, 0);


  return (
    <div>
      <Button type="primary" onClick={showDrawer} style={{ float: 'right', marginTop: '30px',marginRight: '30px' }}>
        Abrir Carrinho
      </Button>
      <Drawer
        title="Carrinho de Compras"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={300}
      >
        {cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: '20px' }}>
            <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} /><br/>
            <span><b>{item.title}</b></span><br/>
            <span style={{ marginLeft: '10px',  marginRight: '10px', }}>${item.price}</span>
          </div>
        ))}
        <p>Total: ${getTotal()}</p>
        <Link to="/payment" state={{ cartItems, itensAmount }}>
          <Button type="primary" style={{ marginLeft: '10px' }}>Ir para pagamento</Button>
        </Link>
      </Drawer>
    </div>
  );
}
