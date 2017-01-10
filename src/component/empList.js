/**
 * Created by TTND on 1/6/2017.
 */
import React, { PropTypes }  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getEmployeeList,deleteEmployee,updateEmployee} from '../actions';
class EmpList extends React.Component {
  constructor(props){
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  componentDidMount(){
    this.props.getEmployeeList();
  }
  deleteEmployee(employee) {
    this.props.deleteEmployee(employee);
  }
  render() {
    let emplist = this.props.empList;
    let listOfEmp = emplist.list.map((item,idx)=>{
      let nextStateVal=item.id;
      return(<tr key={idx}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.designation}</td>
        <td>{item.salary}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
        <td>{item.joiningDate}</td>
        <td>
          <button className="btn btn-warning" onClick={(e) => this.deleteEmployee(item.id)}>Delete</button>
      </td><td>
          <Link to={nextStateVal}>Edit</Link>
        </td>
      </tr>);
    });
    return (<div>
      <Link to="/create">New Employee</Link>
      <table className="table table-striped table-bordered">
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
      </table>
    </div>);
  }
}

let EmpComponent = connect((state) => state, (dispatch) => {
  return {
    getEmployeeList() {
      dispatch(getEmployeeList());
    },
    deleteEmployee(employee) {
      dispatch(deleteEmployee(employee));
    }
  }
})(EmpList);

export default EmpComponent;
EmpList.propTypes = {
  empList: PropTypes.shape({
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string
  })
};
