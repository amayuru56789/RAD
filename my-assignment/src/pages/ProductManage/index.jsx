import React, {Component, Fragment} from "react";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AVCButton from "../../components/common/Button";

class Product extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        const top100Films = [
            { label: 'The Shawshank Redemption', year: 1994 },
            { label: 'The Godfather', year: 1972 },
            { label: 'The Godfather: Part II', year: 1974 },
            { label: 'The Dark Knight', year: 2008 },
        ]

        return(
            <Fragment>
                <h1>Product Manage Form</h1>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container className="pt-2" spacing={3} >
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Title" label="Title" variant="outlined"
                                           size="small" style={{width: '100%'}}
                                           /*value={this.state.formData.title}
                                           onChange={(e) => {
                                               let formData=this.state.formData;
                                               formData.title = e.target.value;
                                               this.setState({formData});
                                           }}*/
                                           validators={['required', 'isString']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Price" label="Price"
                                           variant="outlined" size="small" style={{width: '100%'}}
                                           /*value={this.state.formData.price}
                                           onChange={(e) => {
                                               let formData=this.state.formData;
                                               formData.price = e.target.value;
                                               this.setState({formData});
                                           }}*/
                                           validators={['required', 'isString']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                size="small"
                                style={{width: '100%'}}
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Movie" />}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Description" label="Description"
                                           variant="outlined" size="small" style={{width: '100%'}}
                                           /*value={this.state.formData.description}
                                           onChange={(e) => {
                                               let formData=this.state.formData;
                                               formData.description = e.target.value;
                                               this.setState({formData});
                                           }}*/
                                           validators={['required', 'isString']}
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent={"flex-end"}>
                            <AVCButton variant="contained" label="Clear"
                                       onClick={() => {

                                       }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{display: 'flex'}} justifyContent={"flex-end"}>
                            <AVCButton variant="contained" label="Save"
                                       onClick={() => {

                                       }}
                            />
                        </Grid>

                    </Grid>

                </ValidatorForm>
            </Fragment>
        )
    }
}

export default Product;