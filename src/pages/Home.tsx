import { Link } from 'react-router-dom';
import { Button, Row, Col, Typography } from 'antd';
import Header from '../components/Header';
import damasImage from '../assets/jogo-de-damas.png'
import tabuleiroImage from '../assets/jogo-de-tabuleiro.png' ;
import CFooter from '../components/Footer';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <>
    <Header/>
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={8}>
          <Title style={{color: 'white'}} level={2}>Bem-vindo à GameRoom</Title>
          <Paragraph style={{color: 'white'}}>
          Explore um mundo de diversão e entretenimento com a nossa vasta seleção de jogos de tabuleiro para todas as idades e gostos. Desde clássicos atemporais até as mais recentes novidades do mundo dos jogos, estamos aqui para proporcionar experiências inesquecíveis para você, sua família e amigos.
          </Paragraph>
          <Paragraph style={{color: 'white'}}>
            Inscriva-se agora para aproveitar os benefícios exclusivos!
          </Paragraph>
          <Link to="/register">
            <Button type="primary">Cadastrar-se</Button>
          </Link>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <center><img
            src={damasImage}
            alt="Jogo de Damas"
            style={{ width: '70%', borderRadius: '8px' }}
          /></center>
        </Col>
      </Row>
    </div>
    <div style={{ padding: '20px' }}>
    <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12} lg={8}>
        <center><img
            src={tabuleiroImage}
            alt="Imagem de Destaque"
            style={{ width: '80%', borderRadius: '8px' }}
          /></center>
        </Col>
        <Col xs={24} md={12} lg={8}>
        <Title style={{color: 'white'}} level={2}>Jogue mais de 300 títulos de jogos com seus amigos!</Title>
          <Paragraph style={{color: 'white'}}>
          Navegue pela nossa coleção e descubra uma ampla gama de jogos de estratégia, quebra-cabeças desafiadores, jogos cooperativos emocionantes e muito mais. De clássicos como xadrez e damas a lançamentos modernos e inovadores, estamos sempre atualizando nosso estoque para garantir que você tenha acesso aos melhores e mais empolgantes jogos do mercado.
          </Paragraph>
          <Paragraph style={{color: 'white'}}>
            Inscriva-se agora para aproveitar os benefícios exclusivos!
          </Paragraph>
          <Link to="/store">
            <Button type="primary">Ver Produtos!</Button>
          </Link>
        </Col>
    </Row>
    </div>
    <CFooter/>
    </>
  );
};

export default Home;
