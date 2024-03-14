import { Avatar, Card, Divider, Typography } from 'antd';
import Header from '../components/Header';
import CFooter from '../components/Footer';
import AvatarImage from '../assets/avatarImage.png';
import SecureLS from 'secure-ls';
const { Title, Text } = Typography;

const Profile = () => {
const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

  const userData = JSON.parse(ls.get('userData'));

  return (
    <>
      <Header typeUser={userData.type} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 120px)' }}>
        <Card style={{ width: '400px', textAlign: 'center' }}>
          <Avatar size={128} src={AvatarImage} alt="Avatar do Usuário" />
          <Title level={3} style={{ marginTop: '10px' }}>{userData.name}</Title>
          <Text type="secondary" style={{ marginBottom: '20px' }}>{userData.email}</Text>
          <Divider />
          <div style={{ textAlign: 'left', margin: '20px' }}>
            <Text>CPF: {userData.cpf}</Text>
            <br />
            <Text>Data de Nascimento: {userData.birth}</Text>
            <br />
            <Text>Endereço: {userData.address}</Text>
          </div>
        </Card>
      </div>
      <CFooter style={{ marginTop: 'auto' }} />
    </>
  );
};

export default Profile;
