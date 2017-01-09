/**
 * Created by TTND on 1/6/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import {getEmployeeList,deleteEmployee} from '../actions';
import {Table, Button} from 'react-bootstrap'
class EmpList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(getEmployeeList())
  }

  render() {

    let listOfEmp = this.props.empList.list.map((item,idx)=>{
      return(<tr key={idx}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.designation}</td>
        <td>{item.salary}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
        <td>{item.joiningDate}</td>
        <td>
          <button className="btn btn-warning" onClick={(e) => this.props.dispatch(deleteEmployee(item.id))}>Delete</button>
          </td><td>
          <button className="btn btn-default" >Edit</button>
        </td>
      </tr>);
    });
    return (<table className="table table-striped table-bordered">
            <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Joining Date</th>
                  <th></th>
                  <th></th>
              </tr>
            </thead>
            <tbody>
            {listOfEmp}
            </tbody>
    </table>);
  }
}

const EmpComponent = connect((state=>{
  return state;
}))(EmpList);

export default EmpComponent;
