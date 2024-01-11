import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Lógica de autenticação aqui
  };

  return (
    <div style={{ minHeight: '91vh',align:'middle',justifyContent: 'center', alignItems: 'middle' }}>
    <Row justify="center" align="middle" style={{ minHeight: '100%', paddingTop:'30px'}}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card title="Login" style={{ textAlign: 'center' }}>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Por favor, digite seu usuário!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Usuário"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor, digite sua senha!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Senha"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Lembrar-me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="/">
                Esqueceu a senha?
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Entrar
              </Button>
              Ou <a href="/">registre-se agora!</a>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default Login;
