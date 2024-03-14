import { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import { Api } from '../api/Api';
import Header from '../components/Header';

const UsersTable = () => {

  const [users, setUsers] = useState()  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
    },
    {
      title: 'Data de Nascimento',
      dataIndex: 'birth',
      key: 'birth',
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
    },
    {
        title: 'Ações',
        key: 'id',
        render: (_, record) => (
            <Button onClick={() => deleteUser(record._id)}>Deletar</Button>
        ),
      },
  ];

    function deleteUser(idUser: number){
      Api.delete('http://localhost:3000/users/'+idUser)
      .then(res => console.log(res))
      .catch(err => alert('Ocorreu um erro ao deletar usuário ' + err));
    }

  useEffect(() => {
    Api.get('http://localhost:3000/users/')
      .then(res => setUsers(res.data))
      .catch(err => alert('Ocorreu um erro ao carregar os itens! ' + err));
  }, []);

  return <>
  <Header/>
  <Table style={{margin:'50px'}} columns={columns} dataSource={users} />
  </>
};

export default UsersTable;