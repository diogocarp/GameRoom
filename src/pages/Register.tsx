import { Form, Input, Button, DatePicker, Row, Col, Card } from 'antd';
import { UserOutlined, MailOutlined, IdcardOutlined, CalendarOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values:', values);
        navigate('/home');
    };

    return (
     
        <Row justify="center" align="middle" style={{ minHeight: '100vh',padding: '20px'  }}>
            <Col xs={24} sm={12} md={12} lg={8} style={{ padding: '0' }}>
                <Card title="Cadastro" style={{ textAlign: 'center', borderRadius: '50px 0 0 50px', height: '100vh' }}>
                    <Form
                        name="registration_form"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="firstName"
                            rules={[{ required: true, message: 'Por favor, digite seu nome!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Nome" />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            rules={[{ required: true, message: 'Por favor, digite seu sobrenome!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Sobrenome" />
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
                            <Input prefix={<IdcardOutlined />} placeholder="CPF" />
                        </Form.Item>

                        <Form.Item
                            name="birthdate"
                            rules={[{ required: true, message: 'Por favor, selecione sua data de nascimento!' }]}
                        >
                            <DatePicker
                                style={{ width: '100%' }}
                                placeholder="Data de Nascimento"
                                format="DD/MM/YYYY"
                                suffixIcon={<CalendarOutlined />}
                            />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Por favor, digite seu endereço!' }]}
                        >
                            <Input prefix={<HomeOutlined />} placeholder="Endereço" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Por favor, digite seu e-mail!' },
                                { type: 'email', message: 'Por favor, digite um e-mail válido!' },
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="E-mail" />
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
