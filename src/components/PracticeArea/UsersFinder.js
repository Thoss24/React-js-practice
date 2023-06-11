import Users from "./Users"
import React, { Fragment, useState, useEffect, Component } from "react"

const users = [
    { name: "James" },
    { name: "Jack" },
    { name: "Kate" },
    { name: "John" },
  ];

//CLASS BASED COMPONENT

class UsersFinder extends Component {
    constructor() {
        super();
        this.state = {
            findUsers: users,
            searchTerm: ''
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({findUsers: users.filter((user) => user.name.includes(this.state.searchTerm))})
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value})
    };

    render() {
        return (
            <Fragment>
                <div>
                    <input type="search" onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.findUsers}/>
            </Fragment>
        )
    }
}

//FUNCTIONAL COMPONENT

// const UsersFinder = () => {

//     const [findUsers, setFindUsers] = useState(users)

//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFindUsers(users.filter((user) => user.name.includes(searchTerm)))
//     }, [searchTerm])

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value)
//     };

//     return (
//         <Fragment>
//             <div>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={findUsers}/>
//         </Fragment>
//     )
// }

export default UsersFinder