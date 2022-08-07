import { Component } from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import TextField from '@mui/material/TextField';
class Login extends Component{

    constructor(props) {
        super(props);
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
                                   // onChange={(e) => {
                                   //     console.log(e.target.value);
                                   //     let formData = this.state.formData;
                                   //     formData.user_name = e.target.value;
                                   //     this.setState(formData);
                                   // }}
                        />
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined"
                                   /*onChange={(e) => {
                                       console.log(e.target.value);
                                       let formData = this.state.formData;
                                       formData.password = e.target.value;
                                       this.setState(formData);
                                   }}*/
                        />
                    </div>
                    <div className={classes.btn_container}>

                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styleSheet) (Login)