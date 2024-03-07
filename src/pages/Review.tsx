import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Button } from 'antd';


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

export default function Review({ cartItens, itensAmount, address, payment }) {
    const classes = useStyles();
  
    const [paymentSuccess, setPaymentSuccess] = useState(true);
  
    const handlePaymentSuccess = () => {
      setPaymentSuccess(false);
    };
  
    return (
      <React.Fragment>
        {paymentSuccess ? (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Ordem de Pedido
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
                <Typography gutterBottom>{address.firstName} {address.lastName}</Typography>
                <Typography gutterBottom>{address.address1}</Typography>
                <Typography gutterBottom>{address.city} {address.state}</Typography>
              </Grid>
              <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom className={classes.title}>
                  Detalhes do Pagamento
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.ccname}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.ccnumber}</Typography>
                  </Grid>
                </Grid>
                <Button type="primary" onClick={handlePaymentSuccess}>Efetuar Pagamento</Button>
              </Grid>
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation, and will
              send you an update when your order has shipped.
            </Typography>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
  