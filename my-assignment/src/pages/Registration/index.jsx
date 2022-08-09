import React, {Component, Fragment} from "react";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AVCButton from "../../components/common/Button";
import profileImg from "../../assets/img/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
import {upload} from "@testing-library/user-event/dist/upload";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Login/style";

class Registration extends Component{

    constructor(props) {
        super(props);
        /*this.state={
            profileImg: profileImg
        }*/
    }

    render() {

        const {classes} = this.props;

        /*const {profileImg} = this.state*/

        const top100Films = [
            { label: 'The Shawshank Redemption', year: 1994 },
            { label: 'The Godfather', year: 1972 },
            { label: 'The Godfather: Part II', year: 1974 },
            { label: 'The Dark Knight', year: 2008 },
        ]

        return(
            <Fragment>
                <h1>User Registration</h1>
                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container className="pt-2" spacing={3} >
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="First Name" label="First Name" variant="outlined"
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

                            <TextValidator id="outlined-basic" placeHolder="Last Name" label="Last Name"
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

                            <TextValidator id="outlined-basic" placeHolder="Email" label="Email"
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="User Name" label="User Name"
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Password" label="Password"
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="City" label="City"
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Street" label="Street"
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Street No" label="Street No"
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Zip Code" label="Zip Code"
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>

                            <TextValidator id="outlined-basic" placeHolder="Mobile No" label="Mobile No"
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

export default withStyles(styleSheet) (Registration);