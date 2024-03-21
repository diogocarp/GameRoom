import React, { useEffect, useState } from 'react';
import { Card, Divider, Typography, Menu, Dropdown, Avatar } from 'antd';
import Header from '../components/Header';
import CFooter from '../components/Footer';
import AvatarImage from '../assets/avatarImage.png';
import SecureLS from 'secure-ls';
import axios from 'axios';

const { Title, Text } = Typography;

const Profile = () => {
  const ls = new SecureLS({ encodingType: 'aes', isCompression: false });
  const userData = JSON.parse(ls.get('userData'));

  const [userOrders, setUserOrders] = useState([]);

  async function fetchUserOrders() {
    try {
      const response = await axios.get(`http://localhost:3000/payments/${userData._id}`);
      setUserOrders(response.data);
    } catch (error) {
      console.error('Erro ao buscar os pedidos:', error);
    }
  }

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const handleOrderSelection = (order) => {
    setSelectedOrder(order);
  };



  return (
    <>
      <Header typeUser={userData.type} />
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 120px)' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <Card style={{ textAlign: 'center' }}>
            <Avatar size={128} src={AvatarImage} alt="Avatar do Usuário" />
            <Title level={3} style={{ marginTop: '10px' }}>{userData.name}</Title>
            <Text type="secondary" style={{ marginBottom: '20px' }}>{userData.email}</Text>
            <Divider />
            <div style={{ textAlign: 'left', margin: '20px' }}>
              <Text>CPF: {userData.cpf}</Text>
              <br />
              <Text>Data de Nascimento: {userData.birth}</Text>
              <br />
              <Text>Endereço: {userData.address}</Text>
            </div>
          </Card>
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <Title level={3} style={{ color: 'white' }}>Meus Pedidos</Title>
          {userOrders.map(order => (
            <Card key={order.codOrder} style={{ marginBottom: '20px', borderRadius: '8px' }}>
              
                <div >
                  <Text strong>Código do Pedido:</Text> {order.codOrder}<br />
                  <Text strong>Nome do Cliente:</Text> {order.nameCostumer}<br />
                  <Text strong>Total:</Text> {order.totalPrice}<br />
                  <Text strong>Produtos:</Text> {order.products.join(', ')}
                </div>
              
            </Card>
          ))}
        </div>
      </div>
      <CFooter style={{ marginTop: 'auto' }} />
    </>
  );
};

export default Profile;
