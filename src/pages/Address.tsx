    import React, { useState } from 'react';
    import Grid from '@material-ui/core/Grid';
    import Typography from '@material-ui/core/Typography';
    import TextField from '@material-ui/core/TextField';
    import FormControlLabel from '@material-ui/core/FormControlLabel';
    import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'antd';

    export default function Address({onNext}) {

        const handleChange = (event) => {
            const { name, value } = event.target;
            setAddress((prevData) => ({ 
              ...prevData,
              [name]: value,
            }));
          };
        
          const handleNext = () => {
            onNext(address)
          };
        

        const [address, setAddress] = useState({
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            saveAddress: false
          });

    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Shipping address
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                value={address.firstName}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                value={address.lastName}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                value={address.address1}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                value={address.address2}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                value={address.city}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                value={address.zip}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                value={address.country}
                onChange={handleChange}
            />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
            />
            </Grid>
            <Button onClick={handleNext}>Next</Button>
        </Grid>
        </React.Fragment>
    );
    }