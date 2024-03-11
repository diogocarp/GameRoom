import { Form, Input, Button, DatePicker, Row, Col, Card } from 'antd';
import { UserOutlined, MailOutlined, IdcardOutlined, CalendarOutlined, HomeOutlined, LockOutlined, EyeFilled, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        cpf: '',
        birth: null,
        address: '',
        email: '',
        password: '',
        type: 'costumer'
    });

    const [visiblePass, setVisiblePass] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setUser(prevState => ({
            ...prevState,
            birth: date
        }));
    };

    const togglePasswordVisibility = () => {
        setVisiblePass(!visiblePass);
    };

    
    const onFinish = async () => {

        try {
            const response = await axios.post('http://localhost:3000/users', user);
            console.log(response)
            alert('Cadastrado com sucesso!');
            navigate('/login');
        } catch (error) {
            alert('Erro ao enviar dados:' + error);
        }
    };

    const typePass = visiblePass ? 'password' : 'text';

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh', padding: '20px' }}>
            <Col xs={24} sm={12} md={12} lg={8} style={{ padding: '0' }}>
                <Card title="Cadastro" style={{ textAlign: 'center', borderRadius: '50px 0 0 50px', height: '100vh' }}>
                    <Form
                        name="registration_form"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Por favor, digite seu nome!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nome"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="cpf"
                            rules={[
                                { required: true, message: 'Por favor, digite seu CPF!' },
                                {
                                    pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                                    message: 'Por favor, digite um CPF válido!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<IdcardOutlined />}
                                placeholder="CPF"
                                name="cpf"
                                value={user.cpf}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="birth"
                            rules={[{ required: true, message: 'Por favor, selecione sua data de nascimento!' }]}
                        >
                            <DatePicker
                                style={{ width: '100%' }}
                                placeholder="Data de Nascimento"
                                format="DD/MM/YYYY"
                                suffixIcon={<CalendarOutlined />}
                                onChange={handleDateChange}
                                value={user.birth}
                            />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Por favor, digite seu endereço!' }]}
                        >
                            <Input
                                prefix={<HomeOutlined />}
                                placeholder="Endereço"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Por favor, digite seu e-mail!' },
                                { type: 'email', message: 'Por favor, digite um e-mail válido!' },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined />}
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
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Cadastrar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={10}>
                <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/ef/a0/27/efa027e810681894293ba2bf761c3a7e.jpg")', backgroundSize: 'cover', height: '100vh', borderRadius: '0 50px 50px 50px' }}></div>
            </Col>
        </Row>
    );
};

export default Register;
