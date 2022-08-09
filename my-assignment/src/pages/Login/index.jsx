import { Component } from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import TextField from '@mui/material/TextField';
import AVCButton from "../../components/common/Button";
import AVCSnackBar from "../../components/common/SnackBar";
class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: 'amayuru5678',
            pw: '123',
            formData: {
                user_name: '',
                password: ''
            },
            //for snackbar props
            open: false,
            message: '',
            severity: ''
        }
    }

    checkValidity(){
        console.log("FormData: "+this.state.formData);

        let formData = this.state.formData;
        if(formData.user_name === this.state.userName && formData.password === this.state.pw){
            //console.log("User credential matched...");
            this.setState({
                open: 'true',
                message: 'User credential matched...',
                severity: 'success'
            })
        }else {
            //console.log("User name Or Password incorrect...");
            this.setState({
                open: 'true',
                message: 'User name Or Password incorrect...',
                severity: 'error'
            })
        }
    }

    render() {

        const {classes} = this.props;

        return(
            <div className={classes.container}>
                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <h1>Login page</h1>
                    </div>
                    <div className={classes.form_container}>
                        <TextField id="outlined-basic" label="User name" variant="outlined"
                                   onChange={(e) => {
                                       console.log(e.target.value);
                                       let formData = this.state.formData;
                                       formData.user_name = e.target.value;
                                       this.setState(formData);
                                   }}
                        />
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined"
                                   onChange={(e) => {
                                       console.log(e.target.value);
                                       let formData = this.state.formData;
                                       formData.password = e.target.value;
                                       this.setState(formData);
                                   }}
                        />
                    </div>
                    <div className={classes.btn_container}>
                        <AVCButton variant="contained" label="Login"
                                   onClick={() => {
                                       console.log("Login btn clicked!");
                                       this.checkValidity();
                                   }}
                        />
                    </div>
                    <div></div>
                </div>
                <AVCSnackBar
                            open={this.state.open}
                            onClose={() => {
                                this.setState({open: false})
                            }}
                            message={this.state.message}
                            autoHideDuration={3000}
                            severity={this.state.severity}
                            variant="filled"
                        />
            </div>
        )
    }
}

export default withStyles(styleSheet) (Login)