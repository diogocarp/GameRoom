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
  
  <Row style={{ padding: '20px', alignItems: 'center', justifyContent: 'center' }}>
  <h1 style={{ color: 'white', marginBottom: '10px', marginRight: 'auto' }}>Loja E-commerce</h1>
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <input 
      type="text" 
      className="form-control" 
      style={{ 
        height: '40px', 
        paddingLeft: '15px', 
        borderRadius: '20px', 
        border: '2px solid #ccc', 
        fontSize: '16px', 
        width: '300px' 
      }} 
      placeholder="Pesquisar produtos..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
    <i className="fa fa-search" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa' }}></i>
  </div>
</Row>


      
        <Row gutter={[16, 16]}>
          
          {products.filter(filterProducts).map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Product product={product} onAddToCart={addToCart} />
            </Col>
          ))}
        </Row>
      <CFooter />
    </>
  );
};

export default Store;
