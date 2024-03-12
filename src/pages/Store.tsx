import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Product from '../components/Product';
import Header from '../components/Header';
import CFooter from '../components/Footer';
import { Api } from '../api/Api';
import { Cart } from '../components/Cart'; 

const Store = () => {
  
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    Api.get('http://localhost:3000/gameboards/')
      .then(res => setProducts(res.data))
      .catch(err => alert('Ocorreu um erro ao carregar os itens! ' + err));
  }, []); 

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filterProducts = (product) => {
    if (!searchTerm) {
      return true; 
    }
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <>
      <Header />
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: 'white' }}>Loja E-commerce</h1>
            <div style={  {textAlign: 'right', paddingBottom: '20px'}}>
            <input 
        type="text" 
        className="form-control"
        style={{height: '25px' }}
        placeholder="Pesquisar produtos..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
      
        <Row gutter={[16, 16]}>
          
          {products.filter(filterProducts).map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Product product={product} onAddToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </div>
      <CFooter />
    </>
  );
};

export default Store;
