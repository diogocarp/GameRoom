import { Card, Button } from 'antd';

const Product = ({ product, onAddToCart }) => { // Receber a função onAddToCart como prop
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: '100%'  }}
      cover={<img alt={product.title} src={product.image} style={{ maxWidth: '400px', maxHeight: '450px', minWidth: '400px', minHeight: '450px' }} />}
    >
      <Meta title={product.title} description={`$${product.price}`} />
      <Button type="primary" style={{ marginTop: '10px', width: '100%' }} onClick={() => onAddToCart(product)}> 
        Adicionar ao Carrinho
      </Button>
    </Card>
  );
};

export default Product;
