import { Row, Col } from 'antd';
import Product from '../components/Product';
import Header from '../components/Header';
import CFooter from '../components/Footer';
import { useEffect, useState } from 'react';
import { Api } from '../api/Api';

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => alert('Ocorreu um erro ao carregar os itens! ' + err));
  }, []); 

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: 'white' }}>Loja E-commerce</h1>
        <Row gutter={[16, 16]}>
          {products && products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}> {/* Ajuste as colunas com base no tamanho da tela */}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
      <CFooter />
    </>
  );
};

export default Store;