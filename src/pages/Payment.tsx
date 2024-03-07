import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'antd';

export default function Payment({address, onNext}) {

    

      const handleChange = (event) => {
        const { name, value } = event.target;
        setPayment((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleNext = () => {
        const dataWithPayment = { ...address, ...payment };
        onNext(dataWithPayment);
      };

      const [payment, setPayment] = useState({
        ccname: '',
        ccnumber: '',
        ccexp: '',
        cccvv: '',
        savePayment: false
      });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Método de Pagamento
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" onChange={(e) => setPayment({ ...payment, ccname: e.target.value })}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            onChange={(e) => setPayment({ ...payment, ccnumber: e.target.value })}/>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" onChange={(e) => setPayment({ ...payment, ccexp: e.target.value })}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange={(e) => setPayment({ ...payment, cccvv: e.target.value })}/>
      
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard"/>}
            label="Remember credit card details for next time"
          />
        </Grid>
        <Button onClick={handleNext}>Next</Button>
      </Grid>
    </React.Fragment>
  );
}