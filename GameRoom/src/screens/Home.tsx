import { Link } from 'react-router-dom';
import { Button, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <Title style={{color: 'white'}} level={2}>Bem-vindo à nossa Página Inicial</Title>
          <Paragraph style={{color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac dolor nec urna varius tincidunt.
          </Paragraph>
          <Paragraph style={{color: 'white'}}>
            Inscriva-se agora para aproveitar os benefícios exclusivos!
          </Paragraph>
          <Link to="/register">
            <Button type="primary">Cadastrar-se</Button>
          </Link>
        </Col>
        <Col xs={24} md={12} lg={8}>
          {/* Adicione aqui qualquer conteúdo adicional, como imagens, vídeos, etc. */}
          <img
            src="https://via.placeholder.com/400x300"
            alt="Imagem de Destaque"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
