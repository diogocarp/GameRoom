import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Row, Spin } from 'antd'; 
import { LoadingOutlined } from '@ant-design/icons'; 
import '../css/paymentStyle.css'; 

const PaymentPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false); 
  const location = useLocation();
  const { cartItems, itensAmount } = location.state;
  const navigate = useNavigate()

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPaymentSuccess(true);
      
    }, 3000);
  };

  return (
    <>
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <div className="payment-container">
      <h2 className="payment-title">Finalizar Compra</h2>
      <div className="payment-details">
        
        <p>Itens do Carrinho:</p>
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <div>
                <p className="item-title">{item.title}</p>
                <p className="item-price">Preço: R${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p>Total: R${itensAmount}</p>
      {!paymentSuccess ? (
        <Button type="primary" onClick={handlePayment} className="payment-button">
          {loading ? <Spin indicator={<LoadingOutlined style={{ color: '#fff' }} spin />} /> : "Pagar"} 
        </Button>
      ) : (
        <div className="payment-success">
          <p>O pagamento foi realizado com sucesso!</p>
          {setTimeout(() => {navigate('/home')}, 3000)}
        </div>
      )}
    </div>
    </Row>
    </>
  );
};

export default PaymentPage;
