import React, { Component } from "react"

//CLASS BASED COMPONENT

class User extends Component {
    render() {
        return <ul><li>{this.props.name}</li></ul>
    }
}

//FUNCTIONAL COMPONENT

// const User = (props) => {
//     return (
//         <ul>
//             <li>{props.name}</li>
//         </ul>
//     )
// }

export default User