import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Button, Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({ cartItens, itensAmount, cep, payment }) {
    const classes = useStyles();
    const generateOrder = Math.floor(Math.random() * 1000000)
    const [paymentSuccess, setPaymentSuccess] = useState(true);
    const [loading, setLoading] = useState(false);

    const handlePaymentSuccess = () => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
            setPaymentSuccess(false);            
        }, 3000);
    };

    return (
        <React.Fragment>
            {paymentSuccess ? (
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Ordem de Pedido:
                    </Typography>
                    <List disablePadding>
                        {cartItens.map((item) => (
                            <ListItem className={classes.listItem} key={item.id}>
                                <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                <ListItemText primary={item.title} secondary={item.description} />
                                <Typography variant="body2">{item.price}</Typography>
                            </ListItem>
                        ))}
                        <ListItem className={classes.listItem}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" className={classes.total}>
                                {itensAmount}
                            </Typography>
                        </ListItem>
                    </List>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" gutterBottom className={classes.title}>
                                Endereço:
                            </Typography>
                            <Typography gutterBottom>Nome do Destinatário: <br/>{cep.firstName} {cep.lastName}</Typography>
                            <Typography gutterBottom>Endereço: <br/>{cep.logradouro}</Typography>
                            <Typography gutterBottom>{cep.bairro}</Typography>
                            <Typography gutterBottom>Cidade: {cep.localidade} <br/> Estado: {cep.uf}</Typography>
                        </Grid>
                        <Grid item container direction="column" xs={12} sm={6}>
                            <Typography variant="h6" gutterBottom className={classes.title}>
                                Detalhes do Pagamento:
                            </Typography>
                            <Grid container>
                                <Typography gutterBottom>Nome no Cartão: <br/>{payment.ccname}</Typography>
                                <Typography gutterBottom>Número do Cartão: <br/>{payment.ccnumber}<br/>
                                Data de Expiração: {payment.ccexp}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <center>
                      {loading ? (<Space size="middle">
                        <Spin indicator={antIcon} />
                    </Space>)
                         : (<Button type="primary" onClick={handlePaymentSuccess}>Efetuar Pagamento</Button>)
                        }
                    </center>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    
                    <Typography variant="h5" gutterBottom>
                        Obrigado pela sua compra!
                    </Typography>
                    <Typography variant="subtitle1">
                        O seu número de pedido é {generateOrder}. Nós enviamos um email de confirmação para o seu e-mail, posteriormente o atualizaremos com as informações do seu pedido.
                    </Typography>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}
