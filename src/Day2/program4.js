/**
 * Created by TTND on 12/27/2016.
 * Apply prop validation on userDetail component. prop user in UserDetail should be an object with key name (string), age (number), avatar (string).
 */
import React from 'react';

export default class UserValidation  extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const userArr = this.props.user
        return (
            <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Avatar</th>
            </thead>
            <tbody>
                 {
            userArr.map((user, i) => {
                     <UserInfo key={i} user={user} />
                     })}
            </tbody>
            </table>
        );
    }

}

class UserInfo extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td><img src={this.props.user.avatar} /></td>
            </tr>
);
}
}
UserValidation.propTypes = {
    user: React.PropTypes.shape({
            name: React.PropTypes.string,
            age: React.PropTypes.number,
            avatar: React.PropTypes.string
        }

    )
}