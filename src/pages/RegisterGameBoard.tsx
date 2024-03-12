import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegisterGameBoard = () => {
    const navigate = useNavigate();

    const [gameBoard, setGameBoard] = useState({
        name: '',
        value: 0,
        description: '',
        minPlayers: 0,
        maxPlayers: 0,
        recommendedAge: 0,
        publisher: '',
        designer: '',
        releaseDate: '',
        imageURL: '',
        rulesURL: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGameBoard(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onFinish = async () => {
        try {
            const response = await axios.post('http://localhost:3000/gameboards', gameBoard);
            console.log(response)
            console.log('Dados do GameBoard:', gameBoard);
            alert('Cadastrado com sucesso!');
            navigate('/store');
        } catch (error) {
            alert('Erro ao enviar dados:' + error);
        }
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh', padding: '20px' }}>
            <Col xs={24} sm={12} md={12} lg={10} style={{ padding: '0' }}>
                <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/ef/a0/27/efa027e810681894293ba2bf761c3a7e.jpg")', backgroundSize: 'cover', height: '100vh', borderRadius: '50px 0 0 50px' }}></div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} >
                <Card title="Cadastro de GameBoard" style={{ textAlign: 'center', borderRadius: '0 50px 50px 0', height: '100vh' }}>
                    <Form
                        name="register_gameboard"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Insira o nome do jogo de tabuleiro' }]}
                        >
                            <Input
                                placeholder="Nome do jogo de tabuleiro"
                                name="name"
                                value={gameBoard.name}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="value"
                            rules={[{ required: true, message: 'Insira o valor do jogo de tabuleiro' }]}
                        >
                            <Input
                                placeholder="Valor do jogo de tabuleiro"
                                name="value"
                                value={gameBoard.value}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="imageURL"
                            rules={[{ required: true, message: 'Insira a url da imagem do jogo de tabuleiro' }]}
                        >
                            <Input

                                placeholder="Imagem do jogo de tabuleiro"
                                name="imageURL"
                                value={gameBoard.imageURL}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        
                        <Form.Item
                            name="minJoga"
                            rules={[{ required: true, message: 'Insira o minimo de jogadores' }]}
                        >
                            
                            <Input
                               type='number'
                                placeholder="Minimo de players"
                                name="minPlayers"
                                value={gameBoard.minPlayers}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        
                        <Form.Item
                            name="maxJoga"
                            rules={[{ required: true, message: 'Insira o maximo de jogadores' }]}
                        >
                            <Input
                                type='number'
                                placeholder="Maximo de players"
                                name="maxPlayers"
                                value={gameBoard.maxPlayers}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="description"
                            rules={[{ required: true, message: 'Insira a descrição do jogo de tabuleiro' }]}
                        >
                            <Input.TextArea
                                placeholder="Descrição do jogo de tabuleiro"
                                name="description"
                                value={gameBoard.description}
                                onChange={handleChange}
                            />
                        </Form.Item>



                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Cadastrar GameBoard
                            </Button>
                            <p style={{ textAlign: 'center', margin: '10px 0' }}>
                                <Link to="/home">
                                    <ArrowLeftOutlined /> Voltar para a Home
                                </Link>
                            </p>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default RegisterGameBoard;
