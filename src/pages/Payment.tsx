import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'antd';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel } from '@material-ui/core';

export default function Payment({cep, onNext}) {

      const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

      const isValidCreditCard = (cardNumber: string): boolean => {
        return creditCardRegex.test(cardNumber);
      };

      const handleNext = () => {
        if(!isValidCreditCard(payment.ccnumber)){
        alert("Número de cartão de crédito inválido!")
        return
      }
        const dataWithPayment = { ...cep, ...payment };
        onNext(dataWithPayment);
      };

      const [payment, setPayment] = useState({
        ccname: '',
        ccnumber: '',
        ccexp: '',
        cccvv: '',
        savePayment: false
      });

      const currentYear = new Date().getFullYear();

      const futureYears = Array.from({ length: 10 }, (_, index) => {
          const year = currentYear + index;
          return year.toString().slice(-2); 
      });
      
      const months = Array.from({ length: 12 }, (_, index) => {
          const month = index + 1;
          return month < 10 ? '0' + month : month.toString(); 
      });
      
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Método de Pagamento
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Nome no cartão"  fullWidth autoComplete="cc-name" onChange={(e) => setPayment({ ...payment, ccname: e.target.value })}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Número do cartão"
            inputProps={{ maxLength: 16 }}
            fullWidth
            autoComplete="cc-number"
            onChange={(e) => setPayment({ ...payment, ccnumber: e.target.value })}/>
          
        </Grid>
        <Grid item xs={12} md={6}>
        <FormControl fullWidth>
        <InputLabel id="cc-exp-label">Data de Expiração</InputLabel>
        <Select onChange={(e) => setPayment({ ...payment, ccexp: e.target.value })}>
      {futureYears.map(year => (
        months.map(month => (
          <MenuItem key={`${month}-${year}`} value={`${month}-${year}`}>
            {`${month}/${year}`}
          </MenuItem>
        ))
      ))}
    </Select>
    </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Últimos três digitos no verso do cartão"
            fullWidth
            autoComplete="cc-csc"
            onChange={(e) => setPayment({ ...payment, cccvv: e.target.value })}/>
      
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard"/>}
            label="Lembrar do cartão na próxima compra"
            onChange={(e) => setPayment({ ...payment, savePayment: e.target.value })}
          />
        </Grid>
        <Button onClick={handleNext}>Próximo</Button>
      </Grid>
    </React.Fragment>
  );
}