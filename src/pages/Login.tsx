import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values:', values);
        navigate('/home');
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh', padding: '20px' }}>
            <Col xs={24} sm={12} md={12} lg={10} style={{ padding: '0' }}>
                <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/ef/a0/27/efa027e810681894293ba2bf761c3a7e.jpg")', backgroundSize: 'cover', height: '100vh', borderRadius: '50px 0 0 50px' }}></div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} >
                <Card title="Login" style={{ textAlign: 'center', borderRadius: '0 50px 50px 0',height: '100vh' }}>
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
                            <a href="/" style={{ float: 'right' }}>
                                Esqueceu a senha?
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Entrar
                            </Button>
                            <p style={{ textAlign: 'center', margin: '10px 0' }}>Ou <a href="/">registre-se agora!</a></p>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Login;
