import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'antd';
import { Api } from '../api/Api';

export default function Address({onNext}) {
    const [cep, setCep] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCep = (event) => {
        const { value } = event.target;
        const cleanedCep = value.replace(/\D/g, '');
        if (cleanedCep.length === 8) {
            setLoading(true);
            Api.get(`https://viacep.com.br/ws/${cleanedCep}/json/`)
                .then(res => {
                    
                    setCep(res.data);
                    setLoading(false);
                    setError(null);

                })
                .catch(err => {
                    setError('Ocorreu um erro ao carregar os itens! ' + err);
                    setLoading(false);
                });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCep((prevData) => ({ 
            ...prevData,
            [name]: value,
        }));
    };

    const handleNext = () => {
        onNext(cep);
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Endereço de entrega:
            </Typography>
            <Grid container spacing={3}>
               
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="CEP"
                        fullWidth
                        autoComplete="postal-code"
                        value={cep.zip}
                        onChange={handleCep}
                    />
                </Grid>
                {loading && <p>Carregando...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Primeiro endereço"
                                fullWidth
                                autoComplete="shipping address-line1"
                                value={cep.logradouro || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Segundo endereço"
                                fullWidth
                                autoComplete="shipping address-line2"
                                value={cep.bairro || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="Cidade"
                                fullWidth
                                autoComplete="shipping address-level2"
                                value={cep.localidade || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="state"
                                name="state"
                                label="Estado"
                                fullWidth
                                autoComplete="shipping address-level1"
                                value={cep.uf || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                    </>
                )}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="primary" name="saveAddress" checked ={cep.saveAddress} onChange={handleChange} />}
                        label="Usar este endereço para detalhes de pagamento"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Nome"
                        fullWidth
                        autoComplete="given-name"
                        value={cep.firstName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Sobrenome"
                        fullWidth
                        autoComplete="family-name"
                        value={cep.lastName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleNext}>Próximo</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
