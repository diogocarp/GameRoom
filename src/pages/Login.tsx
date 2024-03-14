import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { LockOutlined, MailOutlined, EyeOutlined, EyeFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import SecureLS from 'secure-ls';

const Login = () => {
    const ls = new SecureLS({ encodingType: 'aes', isCompression: false });
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [visiblePass, setVisiblePass] = useState(true);

    const typePass = visiblePass ? 'password' : 'text';

    const togglePasswordVisibility = () => {
        setVisiblePass(!visiblePass);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onFinish = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${user.email}`);
            const userData = response.data;
            const emailResp = userData.email;
            const passwordResp = userData.password;
            if(emailResp !== user.email){
                alert('Email incorreto!')
                return
            }
            if(passwordResp !== user.password){
                alert('Senha incorreta!')
                return
            }
            alert('Login feito com sucesso!');
            ls.set('userData', JSON.stringify(userData))
            navigate('/home');
        } catch (error) {
            console.log(error);
            alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
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
                            name="email"
                            rules={[{ required: true, message: 'Por favor, digite seu email!' }]}
                        >
                            <Input
                                prefix={<MailOutlined className="site-form-item-icon" />}
                                placeholder="E-mail"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Por favor, digite sua senha!' }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type={typePass}
                                placeholder="Senha"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                suffix={
                                    visiblePass ?
                                        <EyeOutlined onClick={togglePasswordVisibility} />
                                        :
                                        <EyeFilled onClick={togglePasswordVisibility} />
                                }
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
                            <p style={{ textAlign: 'center', margin: '10px 0' }}>Ou <a href="/register">registre-se agora!</a></p>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Login;
