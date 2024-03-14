import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Address from './Address';
import Review from './Review';
import { useLocation } from 'react-router-dom';
import Payment from './Payment';
import '../css/checkoutStyle.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));



export default function Checkout() {

const location = useLocation();
const { cartItems, itensAmount } = location.state;
const steps = ['Endereço de entrega', 'Detalhes de pagamento', 'Revise seu pedido!'];
const [cep, setCep] = useState({});
const [payment, setPayment] = useState({});
const [activeStep, setActiveStep] = useState(0);

function getStepContent() {

    const handleCepNext = (cep) => {
        setCep(cep);
        setActiveStep(1);
      };
    
      const handlePaymentNext = (payment) => {
        setPayment(payment);
        setActiveStep(2);
      };

    return (
        <>
          {activeStep === 0 && <Address onNext={handleCepNext} />}
          {activeStep === 1 && <Payment cep={cep} onNext={handlePaymentNext} />}
          {activeStep === 2 && <Review cep={cep} payment={payment} cartItens={cartItems} itensAmount={itensAmount}/>}
        </>
        )
}

    
  const classes = useStyles();

  return (
   
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Revisão de Pedido
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
          {getStepContent()}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
    
  );
}