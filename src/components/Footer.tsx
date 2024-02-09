import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const CFooter: React.FC = () => {
  return (
    <Footer style={{ backgroundColor: '#000', color: '#fff' }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Space size={20}>
            <a href="https://www.facebook.com">
              <FacebookOutlined style={{ fontSize: '24px' }} />
            </a>
            <a href="https://www.twitter.com">
              <TwitterOutlined style={{ fontSize: '24px' }} />
            </a>
            <a href="https://www.instagram.com">
              <InstagramOutlined style={{ fontSize: '24px' }} />
            </a>
          </Space>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Text type="primary" style={{ color: 'white', fontSize: '16px' }}>© 2024 GameRoom. Todos os direitos reservados.</Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default CFooter;
