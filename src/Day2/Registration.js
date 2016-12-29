/**
 * Created by TTND on 12/27/2016.
 * Create a User Registration form with fields ( FirstName, LastName, EmailId, Contact Number, Password and Confirm password). Form should have a submit button. Apply form validation to incorporate following rules.

 First Name should not be equal to LastName and both the fields should be required.
 Password and Confirm password should be same.
 Email should be a valid email.
 Contact number should be of 10 digit numbers only.
 Submit button should validate the form if it is validated, it should display validation successful (in green color) otherwise it should show the error messages bellow the respective text boxes (in red color).

 When form is loaded for the first time, FirstName should be focused.
 */
import React from 'react';
//import InputField from './Input.js';

export default class Registration  extends React.Component {
    constructor(props) {
        super(props);
        this.state={firstName:{value:'', errVal:''},lastName:{value:'', errVal:''},email:{value:'', errVal:''},password:{value:'', errVal:''},confirmPassword:{value:'', errVal:''}, formValid:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let initialValue = this.state;
        initialValue[event.target.name] = event.target.value;
        this.setState(initialValue);
    }

    handleSubmit(e) {
        e.preventDefault();
        let emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.firstName.value ==="") {
            console.log(1);
            this.setState({
                firstName: {
                    errVal: 'first Name is required'
                },
                formValid:false

            });
        }
        if (this.state.lastName.value ==="") {
            this.setState({
                lastName: {
                    errVal: 'Last Name is required'
                },
                formValid:false

            });

        }
        if(this.state.firstName.value === this.state.lastName.value ){
            this.setState({
                lastName: {
                    errVal: 'First Name and last name should not be equal'
                },
                formValid:false

            });

        }
        if (emailExp.test(this.state.email)) {
            this.setState({
                email: {
                    errVal: 'Email not Valid'
                },
                formValid:false

            });
        }
        if(this.state.password.value !== this.state.confirmPassword.value) {
            this.setState({
                password: {
                    errVal: 'password and confirm password not equal'
                },
                formValid:false

            });

        }


    }

    render() {
        let user=this.state, errorEle ;

        let element=(
            <form onSubmit={this.handleSubmit}>
            <table>
                <tr>
                    <td>FirstName</td>
                    <td>
                        <input type="text" name="firstName" value={this.state.firstName.value} onChange={this.handleChange}/>
                        </td>
                    {this.state.firstName.errVal === '' ? '' :<td className="error">{this.state.firstName.errVal}</td>}
                </tr>
                <tr>
                    <td>LastName</td>
                    <td><input type="text" name="lastName" value={this.state.lastName.value} onChange={this.handleChange} /></td>
                    {this.state.lastName.errVal === '' ? '' :<td className="error">{this.state.lastName.errVal}</td>}
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" name="email" value={this.state.email.value} onChange={this.handleChange} /></td>
                    {this.state.email.errVal === '' ? '' :<td className="error">{this.state.email.Email}</td>}
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password" value={this.state.password.value} onChange={this.handleChange} /></td>
                    {this.state.password.errVal === '' ? '' :<td className="error">{this.state.password.Email}</td>}
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td><input type="password" name="confirmPassword" value={this.state.confirmPassword.value} onChange={this.handleChange} /></td>
                    {this.state.confirmPassword.errVal === '' ? '' :<td className="error">{this.state.confirmPassword.Email}</td>}
                </tr>

                <tr><td><input type="submit" value="Submit" /></td></tr>
            </table>
</form>
);
return(
    element
    );
}

}
