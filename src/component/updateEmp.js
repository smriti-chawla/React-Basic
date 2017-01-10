/**
 * Created by TTND on 1/6/2017.
 */
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {addEmployee} from '../actions';
import {Router, browserHistory,Link } from 'react-router';


class UpdateEmp extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      user:{
        id:'',
        firstName: '',
        lastName:'',
        designation:'',
        salary:'',
        gender:'',
        email:'',
        joiningDate: ''
      },
      errMsg:'',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.params;

  }

  componentWillUnmount(){
    this.setState({
      user:{
        id:'',
        firstName: '',
        lastName:'',
        designation:'',
        salary:'',
        gender:'',
        email:'',
        joiningDate: ''
      }
    });
  }

  handleChange(e){
    let initialState = this.state.user;
    initialState[e.target.name] = e.target.value;
    this.setState(initialState);
  }
  formValidation() {
    let emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let stateVal = this.state.user;
    console.log(stateVal, 'statencjdcdnck');
    if(!stateVal.firstName) {
      this.setState({
        errMsg:"FirstName is required",
        error: true
      });
      console.log(this.state)

    }
    else if(!stateVal.lastName) {
      this.setState({
        errMsg : "LastName is required",
        error: true
      });
      console.log(this.state)
    }
    else if(!stateVal.gender) {
      this.setState({
        errMsg:"gender is required",
        error: true
      });
      console.log(this.state)
    }

    // else if(emailExp.test(stateVal.email)) {
    //   this.setState({
    //     errMsg:"E-mail is not valid"
    //   });
    //   console.log(this.state)
    // }
    else {
      this.setState({
        error:false,
        errMsg:''
      });
      console.log(this.state)
    }
  }

  handleSubmit() {
    debugger
    let stateVal = this.state.user;
    this.formValidation();
    if(!this.state.error) {
    let newObj = {
      firstName: stateVal.firstName,
      lastName: stateVal.lastName,
      designation: stateVal.designation,
      salary: stateVal.salary,
      joiningDate: stateVal.joiningDate,
      gender:stateVal.gender,
      email:stateVal.email
    };
      console.log(newObj, 'new object');
      this.props.addEmployeeSuccess(newObj);
      browserHistory.push('/');
    }
  }
  render() {

    return (<table className="table">
            <tbody>
            <tr>{this.state.errMsg}</tr>
              <tr>
                <td>First Name</td><td><input type="text" name="firstName" value={this.state.user.firstName} onChange={this.handleChange}/></td>
              </tr>

              <tr>
                <td>Last Name</td><td><input type="text" name="lastName" value={this.state.user.lastName} onChange={this.handleChange}/></td>
              </tr>

              <tr>
                <td>Designation</td><td><input type="text" name="designation" onChange={this.handleChange} value={this.state.user.designation}/></td>
              </tr>

              <tr>
                <td>Salary</td><td><input type="text" name="salary" onChange={this.handleChange} value={this.state.user.salary}/></td>
              </tr>

              <tr>
                <td>Gender</td><td><input type="text" name="gender" onChange={this.handleChange} value={this.state.user.gender}/></td>
              </tr>

              <tr>
                <td>Email</td><td><input type="email" name="email" onChange={this.handleChange} value={this.state.user.email}/></td>
              </tr>

              <tr>
                <td>Joining Date</td><td><input type="date" name="joiningDate" onChange={this.handleChange} value={this.state.user.joiningDate}/></td>
              </tr>
            <tr><td><button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button></td>
              <td><Link to="/">Back to Homepage</Link></td></tr>
            </tbody>
    </table>);
  }
}

let updateEmpComponent = connect((state) => state, (dispatch) => {
  return {
    addEmployeeSuccess(employee) {
      dispatch(addEmployee(employee));
    }
  }
})(UpdateEmp);

export default updateEmpComponent;

UpdateEmp.propTypes = {
  firstName:React.PropTypes.string,
  lastName:React.PropTypes.string,
  gender:React.PropTypes.string,
  designation:React.PropTypes.string
};

