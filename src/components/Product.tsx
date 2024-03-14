import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Product = ({ product, onAddToCart }) => {
  const { Meta } = Card;
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    onAddToCart(product);
  };

  return (
    <Card
      hoverable
      style={{
        width: '300px',
        height: '400px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
      }}
      onClick={handleFlip}
    >
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ display: flipped ? 'none' : 'block', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
         
          <div style={{ width: '250px', height: '250px', overflow: 'hidden' }}>
            <img alt={product.name} src={product.imageURL} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          
          <Meta
            title={<span style={{ color: 'black', fontWeight: 'bold' }}>{product.name}</span>}
            description={<span style={{ color: 'black', fontWeight: 'bold' }}>${product.value}</span>}
          />
          <div >
            <Button 
              type="primary" 
              shape="circle" 
              icon={<ShoppingCartOutlined style={{ fontSize: '24px' }} />} 
              style={{ 
                float:'right',
                width: '48px',
                height: '48px', 
                fontSize: '24px', 
              }} 
              onClick={handleAddToCart} 
            />
          </div>
        </div>
        <div style={{width: '80%', height: '100%', display: flipped ? 'block' : 'none', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)' , textAlign: 'center'}}>
          <center>
            <p style={{ color: 'black', fontWeight: 'bold' }}>{product.description}</p>
          </center>
          
        </div>
      </div>
    </Card>
  );
};

export default Product;
