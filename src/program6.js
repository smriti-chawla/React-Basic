/**
 * Created by TTND on 12/27/2016.
 * Abstract away the map logic from the above created component "Users" into a new component called "UserDetail". Use this new component for every user in the above list and refactor the "Users" component to use "UserDetail" inside it.
 */
import React from 'react'
export default class User extends React.Component {
    constructor() {
        super()
    }
    render() {
        const user =[
            {
            "_id": "58613042d144513fd8c03bbc",
            "isActive": true,
            "age": 38,
            "name": "Noelle Finch",
            "gender": "female",
            "email": "noellefinch@codax.com"
        },
            {
                "_id": "58613042f1ddd22998f7c02f",
                "isActive": false,
                "age": 40,
                "name": "Dominique Middleton",
                "gender": "female",
                "email": "dominiquemiddleton@codax.com"
            },
            {
                "_id": "58613042b6f22acfb34097da",
                "isActive": true,
                "age": 21,
                "name": "Beulah Hoover",
                "gender": "female",
                "email": "beulahhoover@codax.com"
            },
            {
                "_id": "5861304228670a96b75bde35",
                "isActive": false,
                "age": 26,
                "name": "Casey Acosta",
                "gender": "male",
                "email": "caseyacosta@codax.com"
            },
            {
                "_id": "586130424d77931fe3e26704",
                "isActive": true,
                "age": 36,
                "name": "Kathleen Parsons",
                "gender": "female",
                "email": "kathleenparsons@codax.com"
            },
            {
                "_id": "58613042b81ed4aea4f8bdd1",
                "isActive": true,
                "age": 32,
                "name": "Tami Morse",
                "gender": "female",
                "email": "tamimorse@codax.com"
            },
            {
                "_id": "5861304235cd4776fd7ce5a7",
                "isActive": false,
                "age": 28,
                "name": "Annette Whitaker",
                "gender": "female",
                "email": "annettewhitaker@codax.com"
            }
        ]

        return (
            <table>
            <thead>
                <th>name</th>
                <th>gender</th>
                <th>email</th>
            </thead>
            <tbody>

                {
                    user.map((user, i) =>(
                        <UserDetail key={i} user={user} />
                 ))}
    </tbody>
</table>
);
}
}


class UserDetail extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.gender}</td>
                <td>{this.props.user.email}</td>
            </tr>
         );
    }
}
