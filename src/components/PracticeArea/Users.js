import User from "./User";
import classes from "./User.module.css";
import React, { useState, Component } from "react";

//CLASS BASED COMPONENT

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  toggleDisplayUsers = () => {
    this.setState((userState) => {
        return { showUsers: !userState.showUsers}
    });
  };

  render() {
    const usersList = this.props.users.map((user) => <User name={user.name} />);

    return (
      <div className={classes["users-container"]}>
        <button onClick={this.toggleDisplayUsers.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"}
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}

//FUNCTIONAL COMPONENT

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const usersList = users.map((user) => <User name={user.name} />);

//   const toggleDisplayUsers = () => {
//     setShowUsers((userState) => !userState);
//   };

//   return (
//     <div className={classes["users-container"]}>
//       <button onClick={toggleDisplayUsers}>
//         {showUsers ? "Hide" : "Show"}
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
