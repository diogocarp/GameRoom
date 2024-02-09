import { Card, Button } from 'antd';

const Product = ({ product }) => {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: '100%' }} // Altere para 100% para tornar o componente responsivo
      cover={<img alt={product.title} src={product.image} style={{ width: '100%' }} />} // Altere para 100% para tornar a imagem responsiva
    >
      <Meta title={product.title} description={`$${product.price}`} />
      <Button type="primary" style={{ marginTop: '10px', width: '100%' }}> {/* Altere para 100% para tornar o botão responsivo */}
        Adicionar ao Carrinho
      </Button>
    </Card>
  );
};

export default Product;