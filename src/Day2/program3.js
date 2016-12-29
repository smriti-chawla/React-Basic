/**
 * Created by TTND on 12/27/2016.
 * Create a component Water having a state variable as temperature. Render Water is in solid state if temperature <= 0, Water is in a liquid state if temperature > 0 and < 100, Water in Gas state if temperature >= 100. Change the state of the component from react extension in the browser.
 */
import React from 'react';

export default class UserDetail  extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const userArr = this.props.user;
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Avatar</th>
                </thead>
                <tbody>
                     {
                        userArr.map((user, i) =>(
                            <UserInfo key={i} user={user} />
                     ))}
                </tbody>
            </table>
        );
    }

}

class UserInfo extends React.Component {
    render() {
        const {user} = this.props;
        const data = (<tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td><img src={user.avatar} /></td>
            </tr>);
        return (
            data
        );
    }
}

